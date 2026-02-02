# SOP: Application Page (Step 1)

**ID:** SOP-FUNNEL-01
**Type:** Survey / Filter
**Reference Implementation:** `src/pages/Application.tsx` & `src/components/ApplicationSurvey.tsx`

## 1. The Strategy: "The Velvet Rope"
We frame the survey not as a "Form" but as an "Application." This psychological shift increases lead quality.
**Core Objective**: Gather data and disqualify bad fits *before* a human interacts.

## 2. Structural Blueprint
-   **Header**: `FunnelHeader` (No distraction).
-   **Hero**: "Rated 4.9/5" (Social Proof) + "Clarity Consultation" (The Offer).
-   **The Survey**:
    -   7 Steps (Progress Bar required).
    -   **Niche Adaptability**: Questions must match the business type (New Build = Land questions; Remodel = Existing Home questions).
    -   **Conditional Logic**: Use branching for context (e.g., IF "Land Secured" = No -> SHOW "Need help finding land?").
    -   **Disqualification Trigger**: If user selects "I'm mostly price shopping" -> Show "We might not be the best fit."

## 3. Data Integration (Critical)
**Webhook**: Must POST to LeadConnector (GoHighLevel).

### Payload Structure
```json
{
  "client": "Homestead Home Builders",
  "source": "Partner Application",
  "timestamp": "ISO String",
  "is_qualified": true,
  "contact": {
    "name": "Full Name",
    "email": "user@email.com",
    "phone": "555-555-5555"
  },
  "sales_note": "Readable summary for the sales rep...",
  "project": {
    "totalBudget": 1000000,
    "landOwned": true,
    "timeline": "6-12 months",
    "type": "Custom Build"
  }
}
```

## Checklist
- [ ] Progress Bar is visible and accurate.
-   [ ] Disqualification logic is active (stops the webhook).
-   [ ] Success redirects to `/booking` with URL parameters (`?email=...`).
