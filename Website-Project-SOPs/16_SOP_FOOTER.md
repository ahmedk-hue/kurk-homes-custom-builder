# SOP: Creating the Footer

**ID:** SOP-16
**Type:** Global Component
**Reference Implementation:** `src/components/Footer.tsx`

## 1. The Strategy: "The Safety Net"
The Footer is the safety net for the confused user and the roadmap for the Google Bot.
**Core Objective**:
1.  **For Users**: "Where are they located?" / "How do I call?"
2.  **For Google**: "How do the pages relate?" (Internal Linking Silos).

## 2. Structural Blueprint

### Section 1: Brand Identity (Column 1)
**Purpose**: Trust anchor.
-   **Content**: Logo + "Serving [Region] since [Year]."
-   **Socials**: Live links to active profiles only.
-   **Accreditations**: BBB, NAHB, or Local Chamber logo.

### Section 2: Quick Links (Column 2)
**Purpose**: Navigation backup.
-   **Links**: Home, About, Portfolio, Contact.
-   **Rule**: Do not clutter this. Keep it to the top 5 basics.

### Section 3: The SEO Silo (Column 3 & 4)
**Purpose**: To pass link equity to deep pages.
-   **Services Column**: Lists every service page (New Construction, Remodels).
-   **Locations Column**: Lists every location landing page (Loveland, Fort Collins).
-   **Strategy**: This creates a "spiderweb" that ensures Google crawls your deep content on every page load.

### Section 4: Contact Info (Column 5)
**Purpose**: Risk reduction.
-   **Content**:
    -   Physical Address (Matches Google Business Profile exactly).
    -   Phone Number (Click-to-Call).
    -   Email.

### Section 5: The Legal Basement (Bottom Bar)
**Purpose**: Compliance.
-   **Links**: Privacy Policy, Sitemap.
-   **Copyright**: Dynamic Year.

## Checklist
- [ ] Address matches Google Maps exactly (formatting wise).
-   [ ] All service pages are linked in the Services column.
-   [ ] All location pages are linked in the Locations column.
-   [ ] Phone number is a clickable `tel:` link.
