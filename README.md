# Maneish Bisht: Portfolio

React + Vite single-page portfolio, ready for Vercel.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project**, import the repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click **Deploy**.

Or from the terminal: `npm i -g vercel && vercel`.

## Edit content
Everything (text, skills, projects, CI/CD repos, links) lives in `src/data.js`.
The photo is `public/profile.jpg`. Colors and fonts are at the top of `src/styles.css`.
Tabs can be linked directly, e.g. `/#cicd`.
