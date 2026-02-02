# SOP: Creating Standard Pages (About, Careers, Contact)

**ID:** SOP-03
**Type:** Core Pages
**Reference Implementation:** `src/pages/About.tsx`, `src/pages/Contact.tsx`

## 1. About Us: The "Trust" Page
This page is often the 2nd most visited on the site. It must sell the **team** and the **process**.
-   **Structure**:
    1.  **Founder's Note**: A personal message from the owner.
    2.  **Team Grid**: Professional headshots (high quality).
    3.  **Values**: "Stewardship", "Transparency", "Craftsmanship".
    4.  **Timeline**: "Est. 1986" - show longevity.

## 2. Contact Page: The "Action" Center
-   **Layout**: Split screen. Form on one side, Info on the other.
-   **Form**: Must use the standard `ContactForm` component (integrates with CRM).
-   **Info**: Display Phone, Email, and physical address with a mini-map.
-   **Expectations**: Explicitly state: "We reply within 24 hours."

## 3. Careers Page: The "Culture" Sell
-   **Hero**: "Build Your Legacy with Us."
-   **Benefits**: Health, 401k, etc.
-   **Job Listings**: Use clear titles ("Lead Superintendent", "Project Manager").
-   **CTA**: "Apply Now" (links to `Application` page or email).

## Checklist
- [ ] About page has real photos (no stock photos of people).
- [ ] Contact form is tested and routing to the CRM.
- [ ] Address matches the Google Business Profile exactly.
