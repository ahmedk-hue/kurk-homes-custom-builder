# SOP: Deployment Protocol

**ID:** SOP-22
**Type:** Workflow
**Target:** Ongoing Updates & Launch
**Reference Implementation:** `Workflows/zero_error_push.md` (and inside Foundation Codebase)

## 1. The Strategy: "Compile Before Commit"
We never push broken code to main. The `main` branch is sacred—it represents the production state of the client's website.
**Core Rule**: If it doesn't build locally, it doesn't exist.

## 2. The Verification Workflow
Before *any* code is pushed to GitHub, you must run the **Zero Error Push** sequence.

### Step A: The Build Check
1.  Run `npm run build`.
2.  **Pass**: If the build succeeds, proceed.
3.  **Fail**: If the build errors (TypeScript issues, missing imports), you must STOP and fix them. Do not force the commit.

### Step B: The Push
Once the build is green:
1.  `git add .`
2.  `git commit -m "feat: [Description of change]"`
3.  `git push origin main`
4.  **Verify**: Retrieve the Commit Hash (`git rev-parse --short HEAD`). This is your **Deployment ID**. Provide it to the user to confirm the snapshot.

## 3. How to Execute (The Agent Way)
You do not need to memorize these commands. The project includes a pre-built workflow.
-   **Command**: Simply ask the agent to "Push updates" or type `/zero_error_push` (Use the `run_workflow` or `view_file` tool if available).
-   **Behavior**: The agent will automatically run the build, check the output, and only push if it is safe.

## Quality Assurance
- [ ] Has `npm run build` returned `exit code 0`?
- [ ] Is the commit message descriptive (e.g., "Updated Hero copy" vs "fix")?
