# SOP: Creating the Privacy Policy

**ID:** SOP-15
**Type:** Compliance Page
**Reference Implementation:** `src/pages/PrivacyPolicy.tsx`

## 1. The Strategy: "The Trust Vault"
While legally required, this page is also a trust signal.
**Core Objective**: Reassure the user that their data (phone/email) won't be sold to spammers.
**The Insight**: High-net-worth clients value privacy. A clear, readable policy demonstrates professional maturity.

## 2. Structural Blueprint

### Section 1: The Header
**Purpose**: Standard identification.
-   **Title**: "Privacy Policy."
-   **Last Updated**: **CRITICAL**. Must be a visible date (e.g., "Last Updated: January 1, 2025").

### Section 2: Data Collection (The "What")
**Purpose**: Transparency.
-   **Explicitly List**:
    -   Personal Info (Name, Email, Phone from forms).
    -   Project Info (Address, Budget).
    -   Technical Data (Cookies/Analytics).

### Section 3: Data Usage (The "Why")
**Purpose**: Justification.
-   **Key Clause**: "We use this to provide the services you requested (e.g., Cost Guide)."
-   **Marketing**: "To notify you about services" (Consent to email).

### Section 4: The "No Sale" Clause
**Purpose**: The most important trust builder.
-   **Requirement**: Explicitly state: "We do **not** sell, trade, or rent your personal identification information."

### Section 5: Third Parties & Links
**Purpose**: Liability limitation.
-   **Disclaimer**: We are not responsible for linked sites (e.g., Houzz, Instagram).

### Section 6: Contact Info
**Purpose**: Recourse.
-   **Requirement**: Physical Address, Email, and Phone Number must be listed.

## Checklist
- [ ] META TAG: `noindex` is recommended (optional, but prevents it from showing in search snippets instead of value pages).
-   [ ] "Last Updated" date is within the last 12 months.
-   [ ] "No Sell" clause is bolded or prominent.
-   [ ] Contact information matches the Footer.
