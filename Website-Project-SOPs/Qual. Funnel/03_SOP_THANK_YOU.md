# SOP: Thank You Page (Step 3)

**ID:** SOP-FUNNEL-03
**Type:** Confirmation
**Reference Implementation:** `src/pages/ThankYou.tsx`

## 1. The Strategy: "Certainty"
The user should close the tab knowing exactly what happens next.
**Core Objective**: Confirm the action and route traffic back to the brand.

## 2. Structural Blueprint
-   **Visual**: Large Green Checkmark (Universal success symbol).
-   **Headline**: "You're All Set!"
-   **Sub-text**: "We sent a calendar invite to [Email]."
-   **The "Loop Back"**:
    -   Don't let the session end.
    -   Provide buttons: "View Portfolio" or "Back to Home."

## 3. Technical Requirements
-   **Tracking**: Fire `fbq('track', 'Schedule')` on load.

## Checklist
-   [ ] Calendar invite mention is clear.
-   [ ] Tracking pixel fires correctly.
-   [ ] Links back to main site are functional.
