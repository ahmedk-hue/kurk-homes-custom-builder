# SOP: SEO Strategy & Technical Standards

**ID:** SOP-05
**Type:** Global Standard
**Reference Component:** `src/components/SEO.tsx`

## 1. The Strategy: "Programmatic Foundation"
We do not rely on "plugins" like WordPress. We rely on **Code**.
Our SEO strategy is built into the React architecture using `react-helmet-async`.

## 2. Technical Requirements

### A. The `<SEO />` Component
Every page MUST implement this component.
```tsx
<SEO
    title="[Primary Keyword] | [Secondary Keyword] - [Brand]"
    description="[Action verb] + [Keyword] + [Location]. [Value Prop]."
    canonical="https://homesteadhomebuilders.com/..."
    image="/og-image.jpg"
/>
```

### B. Schema.org (JSON-LD)
We manually inject JSON-LD into the head.
-   **Root (`/`)**: `LocalBusiness` or `Organization`.
-   **Service Pages**: `Service` or `Product`.
-   **Review Pages**: `AggregateRating`.
-   **Location Pages**: `LocalBusiness` (with specific `areaServed`).

### C. URL Structure
-   **Services**: `/services/[service-slug]` (e.g., `/services/new-construction`)
-   **Locations**: `/locations/[city-slug]` (e.g., `/locations/loveland`)
-   **Blog**: `/blog/[post-slug]`
-   **Portfolio**: `/portfolio/[project-slug]`
*Do not use camelCase in URLs. Use kebab-case.*

## 3. Performance Core Web Vitals
-   **LCP (Largest Contentful Paint)**: Hero images must be preloaded or optimized (WebP).
-   **CLS (Cumulative Layout Shift)**: All images must have explicit width/height class names.
-   **Lazy Loading**: Components below the fold should specific `loading="lazy"` on images.

## Checklist
- [ ] Title tags are under 60 characters.
- [ ] Meta descriptions are under 160 characters.
- [ ] Canonical tags are self-referencing.
- [ ] JSON-LD is validated using Google's Rich Results Test.
