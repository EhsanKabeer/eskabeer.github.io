# Portfolio Website

Personal portfolio (Vite + React). Original design from [Emulate Portfolio Website](https://www.figma.com/design/pQnQbFuZrpivXGsvTNBd8F/Emulate-Portfolio-Website).

## Running locally

```bash
npm i
npm run dev
```

## Deploy to GitHub Pages

You can host this site for free on GitHub Pages. Choose one of the two setups below.

### Option 1: User/org site (`username.github.io`)

Your site will be at `https://<username>.github.io`.

1. Create a repo named **`<username>.github.io`** (replace `<username>` with your GitHub username).
2. In **vite.config.ts**, set `base` to `'/'` (or remove the `base` line and the `GITHUB_PAGES` check so it defaults to `'/'`).
3. Push your code to the `main` branch of that repo.
4. On GitHub: **Settings → Pages**. Under "Build and deployment", set **Source** to **GitHub Actions** (do not create the workflow yet if it doesn’t exist).
5. Add the workflow file below (Option 3) and set the repo name in the workflow to `<username>.github.io` and the `base` in the "Set base for GitHub Pages" step to `''` (empty string), then push. The site will build and deploy on every push to `main`.

### Option 2: Project site (`username.github.io/Portfolio_website`)

Your site will be at `https://<username>.github.io/Portfolio_website`.

1. Create a repo (e.g. **Portfolio_website**) and push your code to `main`.
2. Keep **vite.config.ts** as is (or set `base: '/Portfolio_website/'` so it matches your repo name).
3. On GitHub: **Settings → Pages**. Set **Source** to **GitHub Actions**.
4. Add the workflow file below (Option 3). Use repo name `Portfolio_website` and base `'/Portfolio_website/'`. Push; the site will build and deploy on push to `main`.

### Option 3: GitHub Actions workflow

Create the file **`.github/workflows/deploy-pages.yml`** in your repo with the contents below. Replace `Portfolio_website` with your repo name if it’s different, and set `base` as in the comment.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      # For project site (e.g. username.github.io/Portfolio_website):
      - name: Set base for GitHub Pages
        run: echo "GITHUB_PAGES=true" >> $GITHUB_ENV

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**If you use a user/org site** (`username.github.io`): remove the step "Set base for GitHub Pages" and in **vite.config.ts** set `base: '/'` so the app doesn’t use a subpath.

After the first successful run, your site will be at the URL shown in the repo’s **Settings → Pages** (or under the "Environments" tab).

### Manual deploy (no Actions)

1. Build locally:
   ```bash
   npm run build
   ```
2. For a **project site**, set in **vite.config.ts**: `base: '/YourRepoName/'`, then run `npm run build` again.
3. Push the contents of the **`dist/`** folder to a branch named **`gh-pages`** (or use the **gh-pages** npm package).
4. On GitHub: **Settings → Pages**. Set **Source** to "Deploy from a branch", branch **gh-pages**, folder **/ (root)**.

---

**Summary**

| Site type              | Repo name             | Base in Vite        | URL                          |
|------------------------|------------------------|---------------------|------------------------------|
| User/org site          | `username.github.io`   | `'/'`               | `https://username.github.io` |
| Project site           | `Portfolio_website`    | `'/Portfolio_website/'` | `https://username.github.io/Portfolio_website` |
