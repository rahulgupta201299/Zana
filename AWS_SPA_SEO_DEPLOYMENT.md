# AWS SPA SEO Deployment

This React app uses client-side routing, so AWS must not answer deep links with
404. URLs such as `/bike-accessories/zana/bike/tvs/apache-rtx-300/...` must be
served as HTML with HTTP 200 before React hydrates.

## Build Output

Run the production build with the public domain:

```bash
APP_DOMAIN_URL=https://www.zanamotorcycles.com npm run build
```

The build creates:

- `dist/index.html` for the app shell.
- `dist/<route>/index.html` for every URL found in `dist/sitemap.xml`.
- `dist/robots.txt` and `dist/sitemap.xml`.

Make sure production has API access while building, otherwise product and bike
detail pages cannot be added to the sitemap and static route HTML will not be
generated for them.

## AWS Amplify Hosting

In Amplify Console, open **Hosting > Rewrites and redirects** and add the rule
from `aws/amplify-rewrites.json`.

The important parts are:

- Source: `</^[^.]+$|\.(?!(css|gif|ico|jpg|jpeg|js|png|txt|svg|woff|woff2|ttf|map|json|webp|xml)$)([^.]+$)/>`
- Target: `/index.html`
- Status: `200`

Use `200`, not `301`, `302`, or `404`. A 200 rewrite keeps the requested URL in
place and serves the app HTML instead of returning a crawler-visible 404.

## S3 + CloudFront

Prefer CloudFront in front of S3 for this app.

1. Upload the complete `dist/` folder contents to the bucket root.
2. Set CloudFront default root object to `index.html`.
3. Add the CloudFront Function in `aws/cloudfront-spa-rewrite-function.js` to
   the viewer request event.
4. Configure CloudFront custom error responses:
   - HTTP error code: `403`, response page path: `/index.html`, response code: `200`
   - HTTP error code: `404`, response page path: `/index.html`, response code: `200`
5. Invalidate CloudFront after deployment.

The function rewrites extensionless routes to their generated static HTML file,
for example:

```text
/bike-accessories/zana/bike/tvs/apache-rtx-300/69bea3e...
-> /bike-accessories/zana/bike/tvs/apache-rtx-300/69bea3e.../index.html
```

If a route was not generated, the custom error response still falls back to
`/index.html` with status 200 so React Router can render the page.

## S3 Website Endpoint Without CloudFront

S3 static website hosting can use `index.html` as the index document, but using
only S3 for SPA fallback is weaker for SEO because missing keys can still be
reported as 404. Use CloudFront custom error responses if Google Ads/Search must
see deep links as HTTP 200.
