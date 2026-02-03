# Netlify Auto-deploy Setup

I prepared an automated deploy workflow that will create (if needed) and deploy to a Netlify site named `iltalinvibes`.

## What you need to do (small, one-time steps)
1. Create a **Netlify Personal Access Token**:
   - Go to https://app.netlify.com/user/applications#personal-access-tokens and create a token. Copy it.
2. Add the token to your GitHub repo secrets:
   - Repo → Settings → Secrets and variables → Actions → New repository secret
   - Name: `NETLIFY_AUTH_TOKEN`, Value: *your token*
3. (Optional) If you already have a site and want to use its ID instead of a name, add `NETLIFY_SITE_ID` secret.

## How the workflow works
- On each push to `main` the workflow:
  - Installs dependencies and builds the Next.js app
  - Uses `npx netlify sites:create` to create the site `iltalinvibes` if it doesn't exist
  - Runs `npx netlify build` (so `@netlify/plugin-nextjs` runs and produces `.netlify/output`)
  - Deploys `.netlify/output` to Netlify production

## After you add the secret
- Push to `main` (or wait for next push). The workflow `Deploy to Netlify` will run and show the site URL in the job logs.
- If the site name `iltalinvibes` is taken, the workflow will attempt to create a site and may fail — then either choose a different name or add `NETLIFY_SITE_ID`.

---
If you want, I can also:
- Create a short GitHub Action that automatically adds the `NETLIFY_AUTH_TOKEN` (requires your GitHub PAT) — I recommend adding the secret manually for safety.
- Configure DNS or Let's Encrypt once the site is created.
