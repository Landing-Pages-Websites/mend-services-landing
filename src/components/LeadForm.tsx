"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Loader2, ShieldCheck } from "lucide-react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";

const BUDGET_OPTIONS = ["Under $5,000", "$5,000–$25,000", "$25,000+"] as const;
const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1–3 months",
  "Just researching",
] as const;

const DISQUALIFYING_BUDGET = "Under $5,000";
const DISQUALIFYING_TIMELINE = "Just researching";
const FORM_ID = "tlc-lead-form";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_RE = /^\d{5}$/;

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  projectDescription: string;
  budget: string;
  timeline: string;
}

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  zip: "",
  projectDescription: "",
  budget: "",
  timeline: "",
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "redirecting" | "error";

function isQualified(data: FormState): boolean {
  return (
    data.budget !== DISQUALIFYING_BUDGET &&
    data.timeline !== DISQUALIFYING_TIMELINE
  );
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function validate(data: FormState): Errors {
  const errors: Errors = {};
  if (!data.firstName.trim()) errors.firstName = "Enter your first name";
  if (!data.lastName.trim()) errors.lastName = "Enter your last name";
  if (!data.email.trim()) errors.email = "Enter your email";
  else if (!EMAIL_RE.test(data.email)) errors.email = "Enter a valid email";
  if (data.phone.replace(/\D/g, "").length < 10)
    errors.phone = "Enter a valid phone number";
  if (!ZIP_RE.test(data.zip)) errors.zip = "Enter a 5-digit ZIP";
  if (!data.budget) errors.budget = "Select a budget range";
  if (!data.timeline) errors.timeline = "Select a timeline";
  return errors;
}

function pushDataLayer(event: string, qualified: boolean): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    form_id: FORM_ID,
    lead_quality: qualified ? "qualified" : "disqualified",
  });
}

function trackSubmission(qualified: boolean): void {
  // Fire the MegaTag conversion before any dataLayer push.
  window.MegaTag?.trackEvent?.("form_submit", {
    lead_quality: qualified ? "qualified" : "disqualified",
  });
  pushDataLayer("form_submit", qualified);
  pushDataLayer("form_submission", qualified);
  if (qualified) pushDataLayer("qualified_lead", qualified);
}

export default function LeadForm({
  idPrefix = "lead",
}: {
  idPrefix?: string;
}): React.JSX.Element {
  const router = useRouter();
  const { submit } = useMegaLeadForm();
  const formRef = useRef<HTMLFormElement>(null);
  const inFlightRef = useRef(false);
  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const fid = (name: string): string => `${idPrefix}-${name}`;

  const update = (field: keyof FormState, value: string): void => {
    const next = field === "phone" ? formatPhone(value) : value;
    setData((prev) => ({ ...prev, [field]: next }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // Validate first, then hand off to the form's submit handler.
  const onSubmitClick = (): void => {
    if (inFlightRef.current) return;
    if (status === "submitting") return;
    const found = validate(data);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    formRef.current?.requestSubmit();
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (inFlightRef.current) return;
    if (status === "submitting") return;
    // Synchronous in-flight lock: block any subsequent requestSubmit() in this
    // same tick (rapid clicks) before the first await yields.
    inFlightRef.current = true;
    setStatus("submitting");

    const qualified = isQualified(data);

    try {
      await submit({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        zip: data.zip.trim(),
        projectDescription: data.projectDescription.trim(),
        budget: data.budget,
        timeline: data.timeline,
      });

      trackSubmission(qualified);
      router.push("/thank-you");
    } catch {
      // Release the lock so a failed submit can be retried. On success we
      // navigate to /thank-you and intentionally never release it.
      inFlightRef.current = false;
      setStatus("error");
    }
  };

  const submitting = status === "submitting";
  const busy = submitting || status === "redirecting";

  return (
    <div className="rounded-2xl bg-white p-6 shadow-2xl shadow-forest-950/20 ring-1 ring-line sm:p-8">
      <h2 className="font-display text-2xl font-semibold text-ink">
        Schedule Your Free On-Site Consultation
      </h2>
      <p className="mt-1.5 text-sm text-muted">
        No pressure, no obligation — we&apos;ll confirm your details and set up a visit.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="mt-6 space-y-4"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            label="First name"
            htmlFor={fid("firstName")}
            error={errors.firstName}
            input={
              <input
                id={fid("firstName")}
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                value={data.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                className={inputClass(errors.firstName)}
                placeholder="Jane"
              />
            }
          />
          <Field
            label="Last name"
            htmlFor={fid("lastName")}
            error={errors.lastName}
            input={
              <input
                id={fid("lastName")}
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
                value={data.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                className={inputClass(errors.lastName)}
                placeholder="Doe"
              />
            }
          />
        </div>

        <Field
          label="Email"
          htmlFor={fid("email")}
          error={errors.email}
          input={
            <input
              id={fid("email")}
              name="email"
              type="email"
              required
              autoComplete="email"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass(errors.email)}
              placeholder="jane@email.com"
            />
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            label="Phone"
            htmlFor={fid("phone")}
            error={errors.phone}
            input={
              <input
                id={fid("phone")}
                name="phone"
                type="tel"
                required
                inputMode="numeric"
                autoComplete="tel"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputClass(errors.phone)}
                placeholder="(208) 555-0199"
              />
            }
          />
          <Field
            label="ZIP code"
            htmlFor={fid("zip")}
            error={errors.zip}
            input={
              <input
                id={fid("zip")}
                name="zip"
                type="text"
                required
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={5}
                value={data.zip}
                onChange={(e) =>
                  update("zip", e.target.value.replace(/\D/g, "").slice(0, 5))
                }
                className={inputClass(errors.zip)}
                placeholder="83702"
              />
            }
          />
        </div>

        <Field
          label="Tell us about your project (optional)"
          htmlFor={fid("projectDescription")}
          input={
            <textarea
              id={fid("projectDescription")}
              name="projectDescription"
              rows={3}
              value={data.projectDescription}
              onChange={(e) => update("projectDescription", e.target.value)}
              className={`${inputClass()} resize-y`}
              placeholder="Paver patio, retaining wall, water feature, full backyard redesign…"
            />
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            label="Estimated budget"
            htmlFor={fid("budget")}
            error={errors.budget}
            input={
              <div className="relative">
                <select
                  id={fid("budget")}
                  name="budget"
                  required
                  value={data.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className={selectClass(errors.budget, data.budget)}
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            }
          />
          <Field
            label="Project timeline"
            htmlFor={fid("timeline")}
            error={errors.timeline}
            input={
              <div className="relative">
                <select
                  id={fid("timeline")}
                  name="timeline"
                  required
                  value={data.timeline}
                  onChange={(e) => update("timeline", e.target.value)}
                  className={selectClass(errors.timeline, data.timeline)}
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  {TIMELINE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            }
          />
        </div>

        <button
          type="button"
          onClick={onSubmitClick}
          disabled={busy}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-4 font-display text-base font-semibold text-white shadow-lg shadow-brand-900/25 ring-1 ring-inset ring-transparent transition-all duration-200 hover:bg-brand-600 hover:ring-leaf-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf-500/60 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {busy && <Loader2 className="h-5 w-5 animate-spin" />}
          {submitting ? "Sending…" : "Schedule My Free Consultation"}
        </button>

        {status === "error" && (
          <p className="text-center text-sm text-error" role="alert">
            Something went wrong. Please try again or call (208) 859-9955.
          </p>
        )}

        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted">
          <ShieldCheck className="h-3.5 w-3.5 text-success" />
          Your information stays private. We never sell or spam.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  input,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  input: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="block">
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-ink"
      >
        {label}
      </label>
      {input}
      {error && <span className="mt-1 block text-xs text-error">{error}</span>}
    </div>
  );
}

function inputClass(error?: string): string {
  return `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
    error ? "border-error" : "border-line"
  }`;
}

function selectClass(error: string | undefined, value: string): string {
  return `w-full appearance-none rounded-xl border bg-white px-4 py-3 pr-10 text-[15px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
    value ? "text-ink" : "text-muted/60"
  } ${error ? "border-error" : "border-line"}`;
}
