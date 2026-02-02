# SOP: Creating the Portfolio Main Page

**ID:** SOP-07
**Type:** Portfolio Hub
**Reference Implementation:** `src/pages/Portfolio.tsx`

## 1. The Strategy: "The Showroom"
The main portfolio page has two distinct jobs:
1.  **Stop the Scroller**: Use high-impact "Deep Dives" to hook the user into a narrative.
2.  **Satisfy the Browser**: Provide a visually rich "Gallery" for those just looking for style inspiration.

**Core Objective**: Do not overwhelm. Curate the experience.
*   *Bad*: A dump of 100 images with no context.
*   *Good*: A curated list of 3-5 "Case Studies" followed by a filterable gallery.

## 2. Structural Blueprint

### Section 1: The Page Header
**Purpose**: Clean entry.
-   **Title**: "Our Work" or "Portfolio" (Keep it standard).
-   **Subtitle**: "From concept to completion..." (Set the tone of craftsmanship).
-   **Background**: High-quality texture or understated hero image. Do not compete with the project images below.

### Section 2: Featured Deep Dives (The Hook)
**Purpose**: To sell the "Process" through the "Outcome".
-   **Component**: `PremiumPortfolio` (reused from Home, but can show more).
-   **Strategy**: Select your top 3-5 projects that have the best "Hero's Journey" (see SOP-04).
-   **Visuals**: Large, cinematic cards. Focus on the transformation.
-   **Action**: "View Case Study" -> Leads to `ProjectDetail`.

### Section 3: The Visual Gallery (The Browse)
**Purpose**: To allow the user to dream.
-   **Component**: `PortfolioGallery`.
-   **Layout**: Masonry grid (Pinterest style).
-   **UX Requirement**:
    -   **Filtering**: By Room (Kitchen, Bath, Exterior) or Style (Modern, Traditional).
    -   **Lightbox**: user must be able to view full-screen images without leaving the page.
    -   **Performance**: ALL images must be lazy-loaded.

## Checklist
- [ ] Section 1 clearly separates "Case Studies" from the general "Gallery".
-   [ ] At least 3 "featured" projects are highlighted.
-   [ ] Gallery has a masonry layout to handle different aspect ratios.
-   [ ] SEO Title includes "Custom Home Portfolio" (or relevant primary keyword).
