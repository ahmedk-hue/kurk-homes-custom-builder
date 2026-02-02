# Lead Magnet Funnel: Context & Strategy

## The Objective
To capture "Research Phase" leads who are not yet ready to apply but need information.
**The Exchange**: We give them high-value data (e.g., Cost Guide, Mistakes to Avoid) in exchange for their contact info.

## The Flow
1.  **Traffic Source** (Social Organic/Ads) -> sends user to `/resources/guide-name-optin`.
2.  **The Opt-In Page**:
    -   *Headline*: Hits the pain point ("Stop Guessing").
    -   *Mechanism*: Simple form (Name/Email/Phone).
    -   *Action*: POST webhook to CRM -> Set Session Storage Key -> Redirect.
3.  **The Gated Resource**:
    -   *Protection*: Checks Session Storage. Redirects to Opt-in if missing.
    -   *Format*: Web-based (Not a PDF). Better for SEO/Tracking and harder to share without opting in.
4.  **The CTA**: The resource page must end with a push to the *next* step (The Qualification Funnel).

## Data Standard
-   **Webhook**: Mandatory integration with LeadConnector.
-   **NoIndex**: The gated resource page must have `<meta name="robots" content="noindex" />`.
