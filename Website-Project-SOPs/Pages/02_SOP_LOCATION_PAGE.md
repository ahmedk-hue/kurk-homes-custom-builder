# SOP: Creating a Hyper-Local Location Page

**ID:** SOP-02
**Type:** Location Page (e.g., Loveland, Fort Collins, Windsor)
**Reference Implementation:** `src/pages/locations/Loveland.tsx`

## 1. The Strategy: "The Local Expert"
A location page is not just a keyword dump. It is a proof of "Boots on the Ground."
**Core Objective**: Prove to the user (and Google) that we don't just "serve" this area—we *know* it better than they do.
**The Test**: If you can swap the city name with another and the content still makes sense, you have **FAILED**.

## 2. Structural Blueprint (The "Must-Haves")

### Section 1: The Local Hero (Positioning)
**Purpose**: Confirm we are here.
-   **Headline**: `[Builder Name] + [City]` (e.g., "Homestead Home Builders - Loveland").
-   **Sub-headline**: Connects the brand to local geography (e.g., "From Boyd Lake to Downtown...").
-   **Requirement**: Use an image *of that city* (not a generic house). Landmarks work best.

### Section 2: The Relevance Layer (Specific Challenges)
**Purpose**: To answer "Do you know *my* problems?"
-   **Strategy**: Cite specific, non-obvious local building constraints.
-   **The 3 Vectors**:
    1.  **Soil**: Mention specific geological formations (e.g., "Bentonite Clay," "Pierre Shale").
    2.  **Water**: Name the specific water district (e.g., "FCLWD vs. City Utilities").
    3.  **Code**: Cite specific local amendments (e.g., "130 MPH Wind Load," "Wildfire Interface Zone").

### Section 3: The Proof Layer (Project Radius)
**Purpose**: "Show me you've built here before."
-   **Component**: `RelatedProjects`.
-   **Constraint**: Use the `limit` prop to show only relevant work.
-   **Map**: Embed a Google Map centered on the city.
    -   *Pro Tip*: Add "Directions" text that references local highways (e.g., "Just west of I-25 via Hwy 34").

### Section 4: The Data Layer (Local FAQ)
**Purpose**: Rank for "Cost to build in [City]".
-   **Strategy**: Be hyper-specific.
-   **Key Questions**:
    -   "What are the tap fees in [City]?" (Give a real number range).
    -   "Are ADUs allowed in [Neighborhood]?"
    -   "How long is the permit queue in [County]?"

### Section 5: The Funnel (Local Cost Guide)
**Purpose**: Capture early-stage research traffic.
-   **Offer**: "Download the [City] Cost Guide."
-   **Value Prop**: "Includes 2025 Tap Fee Estimates for [Water District]."
-   *Why?* Generic guides get ignored. Local data gets downloaded.

## Checklist
- [ ] Hero image is recognizable as the specific city.
-   [ ] "Relevance" section mentions at least 3 concrete local nouns (Soil, Water, Code).
-   [ ] Map directions reference local landmarks.
-   [ ] FAQ answers specific zoning/cost questions.
