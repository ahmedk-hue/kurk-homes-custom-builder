# SOP: Creating a Portfolio Case Study

**ID:** SOP-04
**Type:** Portfolio Detail
**Reference Implementation:** `src/pages/portfolio/ProjectDetail.tsx`

## 1. The Strategy: "The Hero's Journey"
A portfolio page is not a gallery; it is a story.
Most builders just post photos. We post **narratives**.
**Core Objective**: The user should not just see a "pretty house." They should feel the *relief* of a complex project handled well.

### The Characters
-   **The Hero**: The Client (e.g., "The Johnsons").
-   **The Guide**: The Builder (Us).
-   **The Villain**: The Obstacle (e.g., "Steep Slope," "Strict HOA," "Tight Deadline").

## 2. Structural Blueprint (The "Must-Haves")

### Section 1: The Context (Sidebar Stats)
**Purpose**: Immediate quantitative proof.
-   **Strategy**: Don't make them hunt for the numbers.
-   **Required Specs**:
    -   Square Footage (Scope).
    -   Duration (Efficiency).
    -   Bed/Bath Count (Scale).
    -   Location (Relevance).

### Section 2: The Setup (Meet the Hero)
**Purpose**: Human connection.
-   **Content**: A brief bio of the client and *why* they wanted to build.
-   **The Motivation**: "They wanted a forever home for their grandkids..."

### Section 3: The Conflict (The Challenge)
**Purpose**: To raise the stakes. Without a problem, there is no value in the solution.
-   **Strategy**: Be specific about the pain.
    -   *Weak*: "It challenged us."
    -   *Strong*: "The lot had a 15% grade and required 4-foot caissons to reach bedrock."

### Section 4: The Climax (The Build)
**Purpose**: To show competence in action.
-   **Visuals**: Use "In Progress" photos here. Show the rebar, the framing, the mud.
-   **Narrative**: Explain *how* we defeated the "Villain" (e.g., "Our engineering team modified the foundation plan...").

### Section 5: The Resolution (Move-In & Review)
**Purpose**: Emotional payoff.
-   **Component**: `Quote` block.
-   **Content**: The client's words *after* the stress is over. "We were worried about X, but Homestead did Y."
-   **Video**: If available, a "Move-In Day" reaction is gold.

### Section 6: The Reward (Finished Gallery)
**Purpose**: The "Eye Candy."
-   **Strategy**: Now that we've earned their respect with the story, we dazzle them with the finish.
-   **Layout**: High-res, masonry grid.

## Checklist
- [ ] Stats block is complete and accurate.
-   [ ] The "Villain" (Challenge) is clearly defined.
-   [ ] Includes at least 2 "Construction/In-Progress" photos.
-   [ ] Ends with a direct quote from the client.
