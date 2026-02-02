# SOP: Analytics & Launch Protocol

**ID:** SOP-19
**Type:** Global Technical
**Reference Implementation:** `src/components/FunnelTracking.tsx`, `src/components/MetaPixel.tsx`, `src/pages/Sitemap.tsx`

## 1. The Strategy: "Blindness is Failure"
We cannot optimize what we do not measure. This SOP defines the "Eyes" of the website.

## 2. The Tracking Stack
Every website must launch with these three systems active:

### A. Meta Pixel (Facebook/Instagram)
-   **Implementation**: `MetaPixel.tsx` component.
-   **Function**: Listens to React Router location changes (`useLocation`) and fires `fbq('track', 'PageView')`.
-   **Requirement**: `window.fbq` must be initialized in `index.html`.

### B. CRM Tracking (LeadConnector/GoHighLevel)
-   **Implementation**: `FunnelTracking.tsx` component.
-   **Function**: Injects the `external-tracking.js` script with the Location ID.
-   **Why?**: This allows the CRM to see which pages a lead visited *before* they filled out a form (Attribution).

### C. Google Analytics (GA4)
-   **Implementation**: Standard G-Tag in `index.html`.

## 3. The Launch Checklist (Discoverability)

### A. The HTML Sitemap
-   **Page**: `/sitemap` (`src/pages/Sitemap.tsx`).
-   **Content**: A human-readable list of every page on the site, organized by category (Main, Services, Locations, Resources).
-   **Purpose**: Helps Googlebot crawl deep links that might be missed in the mega-menu.

### B. Robots.txt
-   **Allow**: Everything (Default).
-   **Disallow**: `/admin`, `*_template`, `/thank-you` (optional, to prevent skewing analytics if people refresh).

## 4. Verification
-   [ ] **Pixel Helper**: Use the Chrome Extension to verify `PageView` fires on route change.
-   [ ] **GHL Smart Script**: Verify the script tag is present in the DOM.
-   [ ] **Sitemap**: Verify `/sitemap` exists and links are valid.
