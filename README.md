# SarahSpeaksPolicy.com

Personal policy portfolio site for Sarah Pemberton Greenway.
Built with **Astro** (static site) + **Sanity** (headless CMS) + **GitHub Pages** (hosting).

---

## How it Works

1. Sarah logs into **Sanity Studio** and edits/publishes content
2. Sanity fires a **webhook** to GitHub
3. **GitHub Actions** rebuilds the site automatically (~60 seconds)
4. GitHub Pages serves the updated static site

**Sarah never needs to touch code or git.**

---

## Initial Setup (one-time, done by you)

### 1. Create a Sanity Project

```bash
cd sanity
npm install
npx sanity init
# Follow prompts — choose "Clean project with no predefined schemas"
# Note the project ID it gives you
```

### 2. Deploy the Sanity Studio

```bash
cd sanity
# Update sanity.config.ts with your project ID
npx sanity deploy
# Choose a studio URL e.g. sarahspeakspolicy.sanity.studio
```

Grant Sarah editor access at: https://www.sanity.io/manage → your project → Members

### 3. Get a Sanity API Token

Sanity dashboard → your project → API → Tokens → Add API token
- Label: "GitHub Actions"
- Permissions: **Viewer** (read-only is enough for builds)

### 4. Add GitHub Secrets

In your GitHub repo → Settings → Secrets and variables → Actions → New repository secret:

| Secret name | Value |
|---|---|
| `SANITY_PROJECT_ID` | Your Sanity project ID |
| `SANITY_DATASET` | `production` |
| `SANITY_API_TOKEN` | The token from step 3 |

### 5. Enable GitHub Pages

Repo → Settings → Pages → Source: **GitHub Actions**

### 6. Set Up the Sanity Webhook

Sanity dashboard → your project → API → Webhooks → Add webhook:
- URL: `https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/dispatches`
- HTTP method: POST
- Trigger on: Publish
- Headers:
  - `Authorization: token YOUR_GITHUB_PAT`
  - `Accept: application/vnd.github.v3+json`
- Payload:
  ```json
  {"event_type": "sanity-update"}
  ```

For the GitHub PAT: GitHub → Settings → Developer settings → Personal access tokens → Fine-grained token with `repo` → `actions` write permission.

### 7. Contact Form

The contact form uses [Formspree](https://formspree.io) (free tier = 50 submissions/month).
Sign up, create a form, and replace `YOUR_FORM_ID` in `src/pages/index.astro`.

### 8. Local Development

```bash
# Root — Astro site
npm install
cp .env.example .env.local
# Fill in your Sanity credentials
npm run dev
```

---

## Content Sarah Can Edit in Sanity

| Section | What she can change |
|---|---|
| **Hero Banner** | Headline, subheading, button text |
| **About Sarah** | Bio text, headshot photo |
| **Focus Areas** | Titles, descriptions, order |
| **Blog Posts** | Write/edit posts with rich text, add categories |

---

## Tech Stack

- **Astro 4** — static site generator
- **Sanity v3** — headless CMS with visual Studio editor
- **@portabletext/to-html** — renders Sanity rich text
- **GitHub Actions** — CI/CD pipeline
- **GitHub Pages** — free static hosting
- **Formspree** — contact form handling

---

## Adding a Custom Domain (sarahspeakspolicy.com)

1. Repo → Settings → Pages → Custom domain → enter `sarahspeakspolicy.com`
2. At your DNS provider, add:
   - `A` records pointing to GitHub Pages IPs (185.199.108-111.153)
   - Or a `CNAME` for `www` pointing to `YOUR_USERNAME.github.io`
3. Check "Enforce HTTPS" once DNS propagates
