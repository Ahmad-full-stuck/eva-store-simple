# Eva Store — Temporary notice Worker

This isolated Worker displays a full-screen bilingual 503 maintenance notice.

- Worker name: `eva-store-maintenance`
- Expected URL: `https://eva-store-maintenance.eva-store.workers.dev/`
- Source: `worker.js`
- Config: `wrangler.jsonc`

The existing `www.eva-store.workers.dev` storefront Worker is intentionally not changed.
The GitHub Pages storefront in `eva-store-simple` remains a separate deployment.

To publish future changes from this folder, use Wrangler with the included config:
`npx wrangler deploy --config wrangler.jsonc`
