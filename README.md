# Gaurav Singh — Portfolio

Personal portfolio of **Gaurav Singh**, Full Stack Engineer (React.js · Next.js · Node.js · TypeScript) based in Mumbai.

Built with Next.js (App Router, static export) and TypeScript, deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All résumé content — summary, stats, experience, projects, skills and education — lives in [`data/resume.ts`](data/resume.ts). The résumé PDF is served from `public/Gaurav-Singh-Resume.pdf`.

Project screenshots live in `public/projects/` as `<shot>.jpg` (1440×900 desktop) and `<shot>-mobile.jpg` (phone); each project's `shot` field in `data/resume.ts` points at them.

## Deploy

Every push to `main` builds a static export and publishes it through GitHub Actions (`.github/workflows/deploy.yml`).
In the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions** once.
