# SOP: Opt-In Page (Step 1)

**ID:** SOP-LEADMAG-01
**Type:** Landing Page
**Reference Implementation:** `src/pages/resources/CostGuideOptIn.tsx`

## 1. The Strategy: "The Gatekeeper"
The goal is to monetize traffic with contact info.
**Core Objective**: High conversion rate (>20%).

## 2. Structural Blueprint
-   **Layout**: Split Screen preferred (Desktop) / Stacked (Mobile).
-   **Left Side (The Hook)**:
    -   **Headline**: Promise a specific outcome or solve a mystery ("Know the Real Cost").
    -   **Bullets**: 3-4 "Teasers" of what's inside (e.g., "Hidden Soft Costs Revealed").
    -   **Social Proof**: "Downloaded by 500+ homeowners."
-   **Right Side (The Gate)**:
    -   **Form**: First Name, Email, Phone (Optional but recommended for SMS nurturing), Project Status (Market research).
    -   **Button**: Action-oriented ("Unlock the Guide" vs "Submit").

## 3. Technical Requirements
-   **Webhook**: POST payload to LeadConnector.
    -   *Payload*: `{ client, source: "Cost Guide Opt-in", contact: { ... } }`
-   **Session Storage**: On success, set `sessionStorage.setItem('unlocked_[guide_name]', 'true')`.
-   **Redirect**: Go to the Gated Resource Page immediately.

## Checklist
- [ ] Headline addresses a curiosity gap or pain point.
-   [ ] Form submits to Webhook.
-   [ ] Session Key is set upon success.
