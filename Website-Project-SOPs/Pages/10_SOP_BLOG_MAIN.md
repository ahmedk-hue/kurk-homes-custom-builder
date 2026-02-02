# SOP: Creating the Blog Main Page

**ID:** SOP-10
**Type:** Resource Hub
**Reference Implementation:** `src/pages/Blog.tsx`

## 1. The Strategy: "The Resource Library"
Most builders have a "News" page with outdated "Company Picnic 2019" posts.
**Core Objective**: Authority.
**The Insight**: We do not write "News." We write **Guides**.
The Blog Main Page is not a chronological feed; it is a searchable database of answers to the client's anxieties.

## 2. Structural Blueprint

### Section 1: The Header (Positioning)
**Purpose**: Define the value proposition immediately.
-   **Title**: "Resources & Insights" (Avoid "Blog" if possible, it sounds cheap).
-   **Subtitle**: "Expert advice on land, design, and construction..."

### Section 2: The Search/Filter Interface
**Purpose**: Help the user find *their* problem.
-   **Components**:
    -   **Search Bar**: Prominent.
    -   **Categories**: "Cost," "Zoning," "Design," "Process."
-   *Why?* A user looking for "Tap Fees" doesn't care about "Kitchen Trends."

### Section 3: The Grid (The Content)
**Purpose**: scannable value.
-   **Card Anatomy**:
    1.  **Image**: High-quality structural or finished work.
    2.  **Badge**: Category (e.g., "Cost Guide").
    3.  **Metadata**: "5 min read" (Respect their time).
    4.  **Title**: Benefit-driven (e.g., "How to Estimate Tap Fees," not "Tap Fees 101").
    5.  **Excerpt**: The "Hook."

### Section 4: The Placeholder/Call-to-Action
**Purpose**: If the library is small, promise more value.
-   **Strategy**: "New guides published monthly. Subscribe for updates."

## Checklist
- [ ] Page Title is "Resources" or "Insights," not just "Blog."
-   [ ] Search bar is present (even if visual-only for MVP).
-   [ ] Post cards display "Read Time."
-   [ ] Images are consistent in aspect ratio.
