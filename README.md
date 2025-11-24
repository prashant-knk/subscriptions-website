# Kala & Kriti Marketing Website

A lightweight marketing site that promotes the capabilities of the `subscriptions-web` dashboard. This static module lives alongside the dashboard assets and can be deployed to any static host (GitHub Pages, Netlify, Vercel, S3 + CloudFront, etc.).

## Structure

```
subscriptions-website/
├── assets/
│   └── logo.png            # reused logo from the dashboard
├── index.html              # landing page with sections & CTAs
├── styles.css              # shared styling + responsive layout
├── script.js               # minor interactions (smooth scroll, metric counter)
└── README.md
```

## Development

No build step is required. Open `index.html` in a browser or serve the folder locally:

```bash
cd subscriptions-website
python3 -m http.server 4173
```

Then visit [http://localhost:4173](http://localhost:4173).

## Integration Points

- **Dashboard demo links** – Buttons link directly to `subscriptions-web/home.html` and auth flows so prospects can jump into the actual product.
- **Shared visual language** – Typography, spacing and palette mirror the Tailwind styles used inside the dashboard, ensuring continuity.
- **API-ready copy** – Sections describe how user-service, subscription-service, reminder service and ai-agent map to buyer benefits.

Feel free to extend this module with analytics, CMS hooks or deployment workflows that match your team’s stack.
