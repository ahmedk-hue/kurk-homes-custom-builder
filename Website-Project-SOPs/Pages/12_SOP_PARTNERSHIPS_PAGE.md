# SOP: Creating the Partnerships Page

**ID:** SOP-12
**Type:** B2B LandPage
**Reference Implementation:** `src/pages/Partners.tsx`

## 1. The Strategy: "The Ecosystem of Trust"
High-end custom homes are a team sport.
**Core Objective**: Position the builder as the "Hub" of a professional ecosystem.
**The Insight**: B2B partners (Realtors, Architects) have been burned by builders who cut them out or ruin their reputation. This page must offer *safety*.

## 2. Structural Blueprint

### Section 1: The Realtor Pitch (Commission Security)
**Purpose**: To get land leads before they hit Zillow.
-   **Pain Point**: "The builder will steal my client."
-   **The Promise**: Explicitly state "Commission Protection" (even on build-on-your-lot).
-   **CTA**: "Register a Client."

### Section 2: The Architect Pitch (Design Integrity)
**Purpose**: To get referrals from high-end designers.
-   **Pain Point**: "The builder will 'Value Engineer' my design into garbage."
-   **The Promise**: "We build to Intent." We respect the details.

### Section 3: The Subcontractor Pitch (Payment Reliability)
**Purpose**: To attract the best talent.
-   **Pain Point**: "Slow pay / Messy sites."
-   **The Promise**: "Clean sites. Fast Pay."

### Section 4: The Universal Application (The Form)
**Purpose**: One entry point for all relationships.
-   **Fields**:
    -   Name/Contact.
    -   **Partner Type Dropdown** (Realtor, Architect, Trade, Vendor).
    -   "How can we help?"
-   **Integration**: Ensure this form routes to the correct CRM pipeline.

## Checklist
- [ ] Explicitly mentions "Commission Protection" for realtors.
-   [ ] Explicitly mentions "Fast Payment" for trades.
-   [ ] Uses a dedicated form (or specific dropdown option) for partners, separate from the main "Contact Us" form.
