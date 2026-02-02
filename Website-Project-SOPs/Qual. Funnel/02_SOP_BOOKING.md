# SOP: Booking Page (Step 2)

**ID:** SOP-FUNNEL-02
**Type:** Scheduler
**Reference Implementation:** `src/pages/Booking.tsx`

## 1. The Strategy: "Strike While Hot"
The user just invested 3 minutes filling out an application. They are ready to commit.
**Core Objective**: Get a time on the calendar immediately.

## 2. Structural Blueprint
-   **Hero**: "Application Received" (Validation).
-   **Value Stack**: Remind them *why* they are booking (e.g., "Review Project Goals," "Feasibility Check").
-   **The Widget**:
    -   Embed Source: LeadConnector (GoHighLevel) or Calendly.
    -   **iframe settings**: `scrolling="no"` to prevent double scrollbars.

## 3. Technical Requirements
-   **URL Params**: The page should read `?email=` from the URL (passed from Application) and pre-fill the widget if valid.
-   **Tracking**: Fire `fbq('track', 'Lead')` on load (since they came from the Application).

## Checklist
-   [ ] Widget loads correctly on mobile.
-   [ ] "Application Received" banner is visible.
-   [ ] Redirects to `/thank-you` upon successful booking (configured in the widget settings).
