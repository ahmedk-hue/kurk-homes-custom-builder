# SOP: Creating the Header

**ID:** SOP-17
**Type:** Global Component
**Reference Implementation:** `src/components/Header.tsx`

## 1. The Strategy: "The Compass"
The header is not just a menu; it is the primary conversion filter.
**Core Objective**:
1.  **Desktop**: Guide the user to deep content (Services/Locations) without clicking.
2.  **Mobile**: A frictionless path to "Contact."

## 2. Structural Blueprint

### Section 1: Desktop Navigation
**Purpose**: Information Architecture.
-   **Layout**: Logo Left | Links Center | CTA Right.
-   **Hover Menus (Mega-Menus)**:
    -   **Services**: Must list *all* specific services (e.g., "Basements," "Additions").
    -   **Locations**: Must list high-priority cities.
    -   *Why?* Reduces clicks. A user can go straight to "Loveland New Construction" from the Home page.
-   **The CTA Button**: High contrast (Primary Color). Text = "Start Feasibility Study" or "Request Consultation."

### Section 2: Mobile Navigation (The Critical Path)
**Purpose**: Thumb-friendly UX.
-   **The Toggle**: Standard Hamburger Icon (Right aligned).
-   **The Overlay**:
    -   **Layout**: **Full Screen** (Fixed `inset-0`). Covers the entire viewport to remove distractions.
    -   **Animation**: Smooth slide-in from right.
    -   **Submenus**: Accordion style (Click to expand). Do *not* make parent links clickable if they have children; they must toggle the submenu.
-   **The Mobile CTA Stack**:
    -   At the bottom of the open menu, place TWO buttons:
        1.  **Primary**: "Book Consultation" (Form).
        2.  **Secondary**: "Call Now" (Direct `tel:` link).
    -   *Why?* Mobile users often just want to talk.

### Section 3: Behavior
**Purpose**: Usability.
-   **Sticky**: Header should remain fixed at the top of the viewport (`z-50`).
-   **Transparency**: Optional for Home Page hero, but white background is preferred for readability on internal pages.

## Checklist
- [ ] **Mobile Menu**: "Call Now" button is visible when menu is open.
-   [ ] **Desktop**: "Services" dropdown activates on hover (not click).
-   [ ] **Logo**: Links back to Home (`/`).
-   [ ] **Z-Index**: Header is always above other content (minimum `z-50`).
