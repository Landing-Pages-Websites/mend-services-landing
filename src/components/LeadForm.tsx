"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ShieldCheck, Phone } from "lucide-react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/ui/cta";

const FORM_ID = "mend-lead-form";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DECISION_OPTIONS = ["Yes", "No"] as const;
const TIMING_OPTIONS = ["Immediate service", "Just exploring"] as const;
const QUALIFYING_DECISION = "Yes";
const QUALIFYING_TIMING = "Immediate service";

// Attribution params persisted from the URL into hidden form fields.
const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  decisionMaker: string;
  serviceTiming: string;
}

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  decisionMaker: "",
  serviceTiming: "",
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "redirecting" | "error";

// Both qualified and disqualified answers still submit — every fill is a lead.
function isQualified(data: FormState): boolean {
  return (
    data.decisionMaker === QUALIFYING_DECISION &&
    data.serviceTiming === QUALIFYING_TIMING
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
    errors.phone = "Enter a valid 10-digit phone number";
  if (!data.decisionMaker) errors.decisionMaker = "Please choose one";
  if (!data.serviceTiming) errors.serviceTiming = "Please choose one";
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

function trackSubmission(qualified: boolean, fields: FormState): void {
  // Fire the MegaTag conversion BEFORE any dataLayer push.
  window.MegaTag?.trackEvent?.("form_submit", {
    ...fields,
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
  const [tracking, setTracking] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const fid = (name: string): string => `${idPrefix}-${name}`;

  // Persist utm/gclid params from the URL into hidden fields on mount.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const captured: Record<string, string> = {};
    for (const key of TRACKED_PARAMS) {
      const value = params.get(key);
      if (value) captured[key] = value;
    }
    // Populated after mount on purpose: reading window.location during render
    // would hydration-mismatch (the server has no query string).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTracking(captured);
  }, []);

  const update = (field: keyof FormState, value: string): void => {
    const next = field === "phone" ? formatPhone(value) : value;
    setData((prev) => ({ ...prev, [field]: next }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // Validate first, then hand off to the form's submit handler.
  const onSubmitClick = (): void => {
    if (inFlightRef.current || status === "submitting") return;
    const found = validate(data);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      formRef.current?.reportValidity();
      return;
    }
    formRef.current?.requestSubmit();
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (inFlightRef.current || status === "submitting") return;
    // Synchronous in-flight lock blocks rapid duplicate submits before the await yields.
    inFlightRef.current = true;
    setStatus("submitting");

    const qualified = isQualified(data);

    try {
      await submit({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        decisionMaker: data.decisionMaker,
        serviceTiming: data.serviceTiming,
        leadQuality: qualified ? "qualified" : "disqualified",
        ...tracking,
      });

      trackSubmission(qualified, data);
      router.push("/thank-you");
    } catch {
      inFlightRef.current = false;
      setStatus("error");
    }
  };

  const submitting = status === "submitting";
  const busy = submitting || status === "redirecting";

  return (
    <div className="rounded-2xl bg-white p-6 shadow-2xl shadow-ink/20 ring-1 ring-line sm:p-7">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-teal-600">
        <span className="inline-block h-2 w-2 rounded-full bg-brand-500" />
        Same-day &amp; 24/7 emergency service
      </div>
      <h2 className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight text-ink">
        Request Service
      </h2>
      <p className="mt-1.5 text-sm text-muted">
        Tell us what&apos;s going on and we&apos;ll call you right back — or call{" "}
        <a href={PHONE_TEL} className="font-semibold text-teal-600 underline-offset-2 hover:underline">
          {PHONE_DISPLAY}
        </a>{" "}
        now.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
        {Object.entries(tracking).map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value} readOnly />
        ))}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="First name" htmlFor={fid("firstName")} error={errors.firstName}>
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
          </Field>
          <Field label="Last name" htmlFor={fid("lastName")} error={errors.lastName}>
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
          </Field>
        </div>

        <Field label="Email" htmlFor={fid("email")} error={errors.email}>
          <input
            id={fid("email")}
            name="email"
            type="email"
            required
            autoComplete="email"
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass(errors.email)}
            placeholder="jane@email.com"
          />
        </Field>

        <Field label="Phone" htmlFor={fid("phone")} error={errors.phone}>
          <input
            id={fid("phone")}
            name="phone"
            type="tel"
            required
            inputMode="numeric"
            pattern="\(\d{3}\) \d{3}-\d{4}"
            autoComplete="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass(errors.phone)}
            placeholder="(737) 555-0199"
          />
        </Field>

        <RadioGroup
          legend="Are you the homeowner or authorized decision-maker?"
          name="decisionMaker"
          options={DECISION_OPTIONS}
          value={data.decisionMaker}
          error={errors.decisionMaker}
          onChange={(v) => update("decisionMaker", v)}
          idFor={fid}
        />

        <RadioGroup
          legend="Do you need service now, or just exploring?"
          name="serviceTiming"
          options={TIMING_OPTIONS}
          value={data.serviceTiming}
          error={errors.serviceTiming}
          onChange={(v) => update("serviceTiming", v)}
          idFor={fid}
        />

        <button
          type="button"
          onClick={onSubmitClick}
          disabled={busy}
          className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-4 font-display text-base font-bold uppercase tracking-wide text-ink shadow-lg shadow-ink/15 ring-1 ring-inset ring-brand-700/20 transition-all duration-200 hover:bg-brand-600 active:scale-[0.99] active:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy && <Loader2 className="h-5 w-5 animate-spin" />}
          {submitting ? "Sending…" : "Request My Service"}
        </button>

        <a
          href={PHONE_TEL}
          aria-label={`Call Mend Services at ${PHONE_DISPLAY}`}
          className="flex items-center justify-center gap-2 rounded-xl border-2 border-teal-500/25 px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-teal-600 transition-colors hover:bg-teal-500 hover:border-teal-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          Or call {PHONE_DISPLAY}
        </a>

        {status === "error" && (
          <p className="text-center text-sm text-error" role="alert">
            Something went wrong. Please try again or call{" "}
            <a href={PHONE_TEL} className="font-semibold underline">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        )}

        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted">
          <ShieldCheck className="h-3.5 w-3.5 text-success" />
          Your info stays private. No spam — we never sell your details.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="block">
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {error && <span className="mt-1 block text-xs text-error">{error}</span>}
    </div>
  );
}

function RadioGroup({
  legend,
  name,
  options,
  value,
  error,
  onChange,
  idFor,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  value: string;
  error?: string;
  onChange: (value: string) => void;
  idFor: (name: string) => string;
}): React.JSX.Element {
  return (
    <fieldset>
      <legend className="mb-1.5 block text-sm font-semibold text-ink">{legend}</legend>
      <div className="grid grid-cols-2 gap-2.5">
        {options.map((opt) => {
          const id = idFor(`${name}-${opt.replace(/\s+/g, "-").toLowerCase()}`);
          const selected = value === opt;
          return (
            <label
              key={opt}
              htmlFor={id}
              className={`flex cursor-pointer items-center justify-center rounded-xl border-2 px-3 py-3 text-center text-sm font-semibold transition-colors focus-within:ring-2 focus-within:ring-teal-500 ${
                selected
                  ? "border-brand-500 bg-brand-50 text-ink"
                  : "border-line bg-white text-muted hover:border-brand-300"
              }`}
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={opt}
                checked={selected}
                onChange={() => onChange(opt)}
                className="sr-only"
              />
              {opt}
            </label>
          );
        })}
      </div>
      {error && <span className="mt-1 block text-xs text-error">{error}</span>}
    </fieldset>
  );
}

function inputClass(error?: string): string {
  return `w-full rounded-xl border-2 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 transition-colors focus-visible:outline-none focus-visible:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500/40 ${
    error ? "border-error" : "border-line"
  }`;
}
