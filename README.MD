# CoolHook

Service to trigger Coolify webhooks via URL parameters. Useful when you can only call a callback by URL (e.g. Netlify-style).

[Official Coolify webhook docs](https://coolify.io/docs/api-reference/api/operations/deploy-by-tag-or-uuid)

## Install

1. Create a Coolify project for CoolHook.
2. Add a resource (public Git repo) with this repository.
3. Configure the project:
   - **Start:** `npm run start`
   - **Port:** 3000
4. Add environment variables (see `.env-example`):
   - `COOLIFY_DOMAIN` — your Coolify domain
   - `API_TOKEN` — Coolify API token
   - `ENABLED_METHODS` — allowed methods (e.g. `GET,POST`)
   - `USE_HTTPS` — use HTTPS for the request (default `true`)
5. Disable health checks (it’s a service).
6. Deploy.

## Usage

Call the deploy endpoint with your app UUID. Use the same HTTP methods you enabled in `ENABLED_METHODS` (e.g. GET or POST).

**URL format:**

```
https://coolhook.yourdomain.com/deploy?uuid=<YOUR_APP_UUID>
```

**Query parameters:**

| Param   | Required | Description                    |
|---------|----------|--------------------------------|
| `uuid`  | Yes      | Your Coolify application UUID |
| `force` | No       | Force redeploy                |
| `tag`   | No       | Deploy a specific tag          |
| `pr`    | No       | Deploy a pull request          |

**Example (GET):**

```
https://coolhook.yourdomain.com/deploy?uuid=123d4567a800kc
```

You can find your app UUID in Coolify: open your application → **Webhooks** in the sidebar.

