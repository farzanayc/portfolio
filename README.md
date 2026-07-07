# UX Portfolio

A React + React Router portfolio site: home page with a case study grid, individual case
study pages, an about page, and a resume page with a timeline.

## Run it locally

```bash
npm install
npm start
```

Opens at http://localhost:3000.

## Edit your content

- `src/data/site.js` — your name, email, LinkedIn URL, resume URL
- `src/data/caseStudies.js` — your 4 (or more) case studies. Add an object to the array and
  a new page is created automatically at `/case-study/your-slug` — no new files needed.
- `src/pages/Resume.jsx` — the `experience` array for the timeline

## Push to GitHub

```bash
# from inside the portfolio-app folder
git init
git add .
git commit -m "Initial commit"

# create the repo on GitHub first (see below), then:
git branch -M main
git remote add origin https://github.com/farzanayc/portfolio.git
git push -u origin main
```

To create the repo on GitHub:
1. Go to github.com and click the **+** in the top right → **New repository**
2. Name it (e.g. `ux-portfolio`), leave it public or private, do **not** initialize with a
   README (you already have one) — then click **Create repository**
3. Copy the commands GitHub shows you under "…or push an existing repository from the
   command line" (matches the block above)

## Deploy

Once it's on GitHub, the fastest free hosting options are:
- **Vercel** — import the GitHub repo at vercel.com, it detects Create React App automatically
- **Netlify** — same flow at netlify.com, build command `npm run build`, publish directory `build`
- **GitHub Pages** — add the `gh-pages` package and a `homepage` field in `package.json` if
  you'd rather host it directly from the repo
