# AWS Amplify — SPA Rewrite Rule Setup

This app is a React Single Page Application (SPA). Without this rewrite rule,
direct navigation to any deep path (e.g. `/zana/bikes/all`, `/product/...`) returns
HTTP 404 because Amplify looks for a file that doesn't exist.

## Why the JSON file alone doesn't work

`aws/amplify-rewrites.json` is a **reference document only**. Amplify does NOT
automatically pick it up from the repository. The rule must be applied manually
in the Amplify Console.

---

## Steps to Apply the Rewrite Rule

1. Open the [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Select your Zana app
3. In the left sidebar, click **App settings → Rewrites and redirects**
4. Click **Edit**
5. Delete any existing rules that conflict (e.g. incorrect 404 catch-alls)
6. Add the following rule:

| Source address | Target address | Type |
|---|---|---|
| `</^[^.]+$\|\.(?!(css\|gif\|ico\|jpg\|jpeg\|js\|png\|txt\|svg\|woff\|woff2\|ttf\|map\|json\|webp\|xml)$)([^.]+$)/>` | `/index.html` | `200 (Rewrite)` |

7. Click **Save**
8. **Redeploy** the app (or trigger a new build) for the rule to take effect

---

## JSON Equivalent (for reference / IaC)

```json
[
  {
    "source": "</^[^.]+$|\\.(?!(css|gif|ico|jpg|jpeg|js|png|txt|svg|woff|woff2|ttf|map|json|webp|xml)$)([^.]+$)/>",
    "status": "200",
    "target": "/index.html",
    "condition": null
  }
]
```

---

## What this rule does

- **Matches**: Any URL that does not contain a file extension (e.g. `/zana/bikes/all`,
  `/product/crash-guard/zana/abc123`) OR has an extension that is NOT in the allowlist
- **Serves**: `/index.html` with HTTP **200 OK**
- **Result**: React Router handles the routing client-side; Google/Bing get HTTP 200
  instead of 404

---

## Verification

After applying, test these URLs and confirm they return HTTP 200:
- `/zana/bikes/all`
- `/zpro/bikes/all`
- `/zana/bikes/royal-enfield`
- `/product-catalog/all`
- Any other deep path

Use `curl -I https://your-domain.com/zana/bikes/all` to check the status code.

---

## Google Search Console

After fixing the 404:
1. Open [Google Search Console](https://search.google.com/search-console)
2. Go to **URL Inspection** → enter `https://your-domain.com/zana/bikes/all`
3. Click **Request Indexing**
4. Repeat for `/zpro/bikes/all` and any other affected URLs
5. Submit the updated sitemap via **Sitemaps → Add/test sitemap**
