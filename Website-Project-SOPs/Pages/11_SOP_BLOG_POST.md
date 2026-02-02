# SOP: Creating a Blog Post

**ID:** SOP-11
**Type:** Article / Guide
**Reference Implementation:** `src/pages/blog/BlogPost.tsx`

## 1. The Strategy: "Answer First" (Google's SGE Standard)
Users are impatient. Google prefers direct answers.
**Core Objective**: Give the answer immediately, then explain existing nuances.
**The Rule**: Do not bury the lead. The first 300 pixels must contain the answer to the user's query.

## 2. Structural Blueprint

### Section 1: The "Answer Box"
**Purpose**: Win the Google Snippet and satisfy the user instantly.
-   **Component**: `AnswerBox`.
-   **Content**: A 2-3 sentence direct summary of the solution.
    -   *Query*: "Cost to build in Loveland?"
    -   *Answer Box*: "Custom builds in Loveland range from $300-$450/sq ft. Costs are driven by..."

### Section 2: The Video Embed (Hybrid Content)
**Purpose**: Increase "Time on Page" (Dwell Time).
-   **Placement**: Above the fold, if possible.
-   **Source**: YouTube walkthrough or Loom explanation.

### Section 3: The Sidebar (The Persistent Salesman)
**Purpose**: Capture the lead while they read.
-   **Component**: Sticky Widget (Follows the scroll).
-   **Offer**: Must be relevant to the *topic*, not generic.
    -   *If reading about Land*: Offer "Feasibility Study."
    -   *If reading about Design*: Offer "Lookbook."
-   **CTA button**: High contrast.

### Section 4: The Internal Bridge (Bottom)
**Purpose**: Keep them on the site.
-   **Strategy**: Never let a user hit a "dead end."
-   **Links**:
    -   "Book Consultation" (Hard).
    -   "View Portfolio" (Soft).

### Section 5: The Schema
**Purpose**: Technical SEO.
-   **Component**: `BlogSchema` (JSON-LD).
-   **Required Fields**: Headline, Date, Author, Image.

## Checklist
- [ ] **Answer Box** is the very first content element.
-   [ ] Sidebar CTA is Sticky and relevant to the post topic.
-   [ ] Table of Contents is present for navigation.
-   [ ] Includes explicit `h2` and `h3` hierarchy for readability.
