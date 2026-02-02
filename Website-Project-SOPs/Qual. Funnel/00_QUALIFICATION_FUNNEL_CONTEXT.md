# Qualification Funnel: Context & Strategy

## The Objective
To filter out "Time Wasters" and only allow high-intent leads to book a call.
We do not want sales teams talking to people who are "Just price shopping" or have a budget of $50k for a custom home.

## The Flow
1.  **Traffic Source** (Ads/Organic) -> sends user to `/application`.
2.  **The Application** (Survey) -> Asks qualifying questions.
    -   *Adaptability*: Questions must be tailored to the niche (e.g., "Do you own land?" for New Build vs. "Do you have blueprints?" for Remodels).
    -   *Conditional Logic*: Logic should branch based on answers (e.g., If "Renovation" -> Ask "Current Home Value").
    -   *Filter*: If they select "Price Shopping," they are soft-disqualified.
    -   *Success*: Payload sent to CRM via Webhook.
3.  **The Booking Page** (`/booking`) -> Only shown *after* application.
    -   Embeds the calendar widget.
4.  **The Thank You Page** (`/thank-you`) -> Confirms the meeting.

## Data Standard
All funnel pages must include:
-   **FunnelHeader**: Simplified (No nav links to distract).
-   **FunnelFooter**: Minimum viable footer (Copyright/Privacy only).
-   **FunnelTracking**: FB Pixel / GTM events.
