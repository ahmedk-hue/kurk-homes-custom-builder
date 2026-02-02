# SOP: Gated Resource Page (Step 2)

**ID:** SOP-LEADMAG-02
**Type:** Value Page
**Reference Implementation:** `src/pages/resources/CostGuide.tsx`

## 1. The Strategy: "The Payoff"
Delivering the promise immediately. No PDF download required (reduces friction).
**Core Objective**: Build authority + Upsell to Consultation.

## 2. Structural Blueprint
-   **Protection**:
    -   `useEffect` check: If `sessionStorage` key is missing -> Redirect to Opt-in.
-   **Meta**: `<Helmet><meta name="robots" content="noindex" /></Helmet>`.
-   **Content**:
    -   **Tables/Charts**: High-value data (e.g., Cost breakdown).
    -   **Visuals**: Photos of previous projects to reinforce quality.
    -   **Builder Info**: "Why this data matters" (Authority building).
-   **The Upsell (CTA)**:
    -   Bottom of page.
    -   "Want to apply this to your project?"
    -   Link: Go to `/booking` or `/application`.

## 3. Technical Requirements
-   **Responsive Tables**: Ensure data tables allow scrolling on mobile.

## Checklist
- [ ] Page is NoIndexed.
-   [ ] Gate logic redirects unauthorized users.
-   [ ] CTA points to the Qualification Funnel.
