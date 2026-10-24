# Veda Infrastructure Website

React + Vite + React Router.

## Run

```bash
npm install     # first time only
npm run dev     # local dev server (opens in the browser)
npm run build   # production build into dist/
npm run preview # preview the production build
```

## Structure

```
public/images/            all photos and logos (served as /images/...)
src/
  main.jsx                app entry + router
  App.jsx                 route table
  pages/                  one file per page: Home, About, Strength, Projects, Services, Contact, NotFound
  components/
    layout/               Header, Footer, Preloader, FloatingActions, Layout (+ layout.css)
    common/               reusable pieces: PageHero, SectionHead, Counter, Lightbox, ProjectCard… (+ common.css)
    sections/             page sections: Hero, AboutIntro, Expertise, FleetShowcase, PlantTabs… (+ sections.css)
  data/                   all text content: company.js, projects.js, services.js, fleet.js
  hooks/                  useReveal (scroll animations), useInterval
  styles/global.css       brand colours, typography, buttons
```

To change wording, phone numbers, projects or services, edit the files in `src/data/`.

## Deploying

The site uses normal URLs (`/about`, `/projects`), so the host must send every path to `index.html`.
On Netlify add a `_redirects` file with `/* /index.html 200`; on Vercel this works by default.
