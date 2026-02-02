# SOP: New Project Setup

**ID:** SOP-20
**Type:** Workflow
**Target:** New Client Website

## 1. The Strategy: "Clone & Clean"
Do not reinvent the wheel. The `template-website` is the Golden Code. We treat it as the seed for every new project.
**Core Objective**: Deploy a new, production-ready website foundation in <15 minutes.

## 2. The Setup Checklist

### Phase 0: Data Collection (The Dossier)
1.  **Create the Dossier**:
    -   Copy `Website-Project-SOPs/21_CLIENT_DOSSIER_TEMPLATE.md` to the **Root** of the new project folder.
    -   Rename it to `CLIENT_DOSSIER.md`.
2.  **Fill It Out**:
    -   Complete every section. This is the **Source of Truth** for the AI Agent.
    -   *Why?* The AI will read this file to automatically configure `site.ts`, colors, and pages.

### Phase 1: Cloning & Initialization
1.  **Source Logic**:
    -   We use the **Foundation Codebase** located in `Website-Project-SOPs/Foundation_Codebase`.
    -   **CRITICAL**: This is a *structural* skeleton. Do NOT clone the "Homestead" brand identity. You are cloning the engine, not the paint job.

2.  **Create Local Folder**:
    ```bash
    mkdir "Client-Name-Website"
    cd "Client-Name-Website"
    ```

3.  **Pull Foundation**:
    -   Copy all files from `Website-Project-SOPs/Foundation_Codebase` into this new folder.
    -   (The Foundation Codebase already has `.git` removed, but verify it is clean).

4.  **Initialize New Repo**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit from Foundation Codebase"
    gh repo create "Client-Name-Website" --private --source=. --push
    ```

### Phase 2: Configuration (The Brain Transplant)
1.  **Package.json**:
    -   Update `name` to `client-name-website`. (e.g., `homestead-home-builders-website`)
    -   Reset `version` to `0.1.0`.
2.  **Site Config** (`src/config/site.ts`):
    -   **Action**: This file controls 80% of the site's identity.
    -   Update: Name, Description, Phone, Email, Address, Social Links.
    -   Update: Service Areas (Cities).
3.  **Manifest** (`public/manifest.json`):
    -   Update `short_name` and `name` for PWA installation.
4.  **Index.html**:
    -   Update the `<title>` tag fallback.
5.  **Configure Webhooks** (Critical):
    -   **Source**: Get URLs from `CLIENT_DOSSIER.md`.
    -   **Target 1 (Application)**: Update `src/components/ApplicationSurvey.tsx`.
    -   **Target 2 (Lead Magnet)**: Update `src/pages/resources/CostGuideOptIn.tsx`.
    -   **Target 3 (Contact)**: Update `src/pages/Contact.tsx`.
    -   *Action*: Replace the hardcoded `fetch` URL with the client's specific webhook.

### Phase 3: The Asset Swap
1.  **Favicon/Logo**: Replace `public/logo.png` and `public/favicon.ico`.
2.  **Images**: Delete placeholder project images in `public/images/`.

### Phase 4: Launch & Deployment
1.  **Install Dependencies**: `npm install`.
2.  **Dev Run**: `npm run dev` to verify the site loads with the new config.
3.  **Deployment (The Agent Way)**:
    -   The project comes with a built-in workflow: `/zero_error_push`.
    -   To push code, simply tell the agent: *"Push the changes."* or run the slash command.
    -   This will automatically build, verify, commit, and push to GitHub.
4.  **Connect to Vercel**: Connect the new GitHub Repo to Vercel/Netlify for live production.

## Quality Assurance
- [ ] `site.ts` is fully updated (No "Homestead" leftovers).
-   [ ] Contact forms submit to the correct Webhook URL (Update in `src/pages/Contact.tsx`).
-   [ ] Analytics IDs in `FunnelTracking.tsx` and `MetaPixel.tsx` are updated or cleared.
