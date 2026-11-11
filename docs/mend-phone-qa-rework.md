# Mend lead form — phone/email QA rework, round 2 (provenance)

Non-runtime record. Nothing in the app reads this file.

## Why

Atlas task `3f765c08-a47a-4a8e-b025-b7f93b03df32` (LANDING_PAGE_EDITS). Independent QA
attempt 1, comment `cb9067be-64bf-4b72-bff2-df76d548daa8` (2026-11-11T00:10:22Z), hard-failed
QA Rubric 4 against production `6ad6e30` (PR #8):

- The legacy `useMegaLeadForm` hook returned a made-up `{ ok: true }` for any HTTP 2xx, so
  HTTP 200 `{ ok: false }` was treated as accepted. Both form instances (hero and
  `#request-service`) then fired success tracking and redirected to `/thank-you` after a rejection.
- The weak email check accepted `a..b@domain.com`.
- The length-only phone check accepted `(123) 456-7890`.

QA asked for: strict accepted-body handling before any app-authored success, tracking or
redirect; a retryable inline error that keeps the visitor's values; shared canonical
email/NANP rules on both instances; and keeping the round-1 non-truncating country-code fix
and the existing phone error text. This round **supersedes** the round-1 claim that stricter
validation and accepted-response handling were out of scope.

## What changed

| File | Change |
| --- | --- |
| `src/lib/fields.ts` | New. Byte-identical copy of `lp-starter` `src/lib/fields.ts` at commit `7b27a71119effcdc62db40a0ae136865c345157e`, sha256 `d25400ba6ee08423f81f50a3dda98d6bd8d110952edfd99f0618799aeeedfe89`. Do not edit it here; update it only by re-copying from upstream. |
| `src/hooks/useMegaLeadForm.ts` | Validates with the same `isValidPhone`/`isValidEmail` (defense in depth). Sends `form_data.phone` as 10 national digits and `form_data.email` trimmed, with only the domain lowercased. Resolves only when the HTTP status is OK **and** the parsed body is a non-null, non-array object with `ok === true`. CONFIG, identifiers, endpoint, attribution/storage logic and payload keys are unchanged. |
| `src/components/LeadForm.tsx` | Uses the shared module for formatting and validation. The canonical submit pattern: `type="button"`, validate first, focus the first invalid field, then `form.requestSubmit()`. Success tracking and the redirect run only after an accepted result. On failure: the `role="alert"` error, values kept, in-flight lock released. Adds the canonical input attributes. The fallback phone and its period are kept together on one line in the error alert. |

Labels, options, field order, inline copy, classes, layout, event names, qualification
logic and the `/thank-you` destination are unchanged. The only new user-facing text is the
canonical `title` hover tooltips on the email field (the module's `EMAIL_ERROR`) and the
phone field (the authored phone error).

## Keyboard submission (round 3)

The exact-head org review of PR #9 at `0706efc1cf5faec673bb053c96b69ab399906b4f`
(CHANGES_REQUESTED, P1) found that both instances, hero and `#request-service`, could no
longer be submitted by pressing Enter in a field. The only button is `type="button"`, and a
form with no submit button and several text fields never submits implicitly. The round-2
evidence note "implicit Enter does not submit" described this defect and is **superseded**.

The submit pattern stays `type="button"`, validate first, then `requestSubmit()`. Pressing
Enter in First name, Last name, Email or Phone now prevents the default and runs the same
handler as the button click. Invalid input shows the errors, focuses the first one and
dispatches no native submit or lead request. The handler ignores Enter during IME
composition, held (repeated) Enter, modified Enter and every other key. Radio buttons are not
wired. The in-flight lock, the native `onSubmit` re-validation and the accepted-body/error
behavior are unchanged.

## Phone behavior

- Strip non-digits. If the result is 11 digits starting with `1`, drop the `1` (round-1 fix
  kept). Anything else non-NANP is left exactly as typed and rejected: a foreign country
  code, too many digits, an extension, or invalid characters. Input is never truncated and
  has no `maxLength`.
- Formatted for display as `(XXX) XXX-XXXX`.
- Valid only as 10 digits where the area code and exchange are `[2-9]XX`, neither is N11, and
  the number is not fictional `555-01XX`. The one exception is the mandated QA number
  `5555550100`.
- Error text stays the page's authored "Enter a valid 10-digit phone number" in both the UI
  and the hook. The copied module's `PHONE_ERROR` adds the word "US" and is not used.
- **Supersession:** the round-1 example `5125550123` still displays as `(512) 555-0123`, but it
  is a fictional 555-01XX number and is now **rejected** at submit. No exception was added to
  keep old fixtures passing. Ordinary valid controls for isolated tests: `4134123123`,
  `+1 (413) 412-3123`.
- **Wire supersession:** `form_data.phone` used to be the formatted display string, e.g.
  `(413) 412-3123`. It is now the 10 digits, e.g. `4134123123`. Any earlier claim about the
  phone's wire format is superseded.

## Email behavior

The email input uses the canonical `pattern`, `maxLength=254`, `inputMode="email"`,
`spellCheck=false`, `autoCapitalize="none"` and `title`, inside a `noValidate` form. An
address is valid only when it matches `EMAIL_REGEX`, is at most 254 characters overall, has a
local part of at most 64 characters, and every domain label is 63 characters or fewer. It is
sent trimmed, with only the domain lowercased.

## Accepted-response semantics

A lead counts as accepted only when the HTTP response is 2xx **and** the parsed JSON body is
an object with `ok === true`. All of these throw: `{ok:false}`, `{}`, `null`, arrays, invalid
or empty JSON, `{ok:"true"}`, `{ok:1}`, any non-2xx status and network failures. The form
then shows the inline alert with (737) 238-5558, keeps every value and lets the visitor retry.
App-authored events fire only after acceptance: `MegaTag.trackEvent("form_submit")`, then
dataLayer `form_submit`, `form_submission` and, for qualified leads, `qualified_lead`. Native
optimizer events tied to the form's `submit` event are inherited and are not app success
signals.

## Testing holds

No live, production or preview lead POST, test submit, call, replay, dispatch retry or canary
was made. No requests of any kind went to `lp-dashboard-one.vercel.app`. Verification used
local, transport-isolated fixtures only. An endpoint `ok`/`lead_sent:false` flag is not proof
of Ads suppression or ServiceTitan receipt. Safe resumption of live tests, stored-profile
autofill and the final ServiceTitan mapping receipt belong to the instrumentation follow-up.
