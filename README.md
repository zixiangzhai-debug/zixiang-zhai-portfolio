# Architecture Portfolio Site (Starter)

This is a clean, job-friendly portfolio starter built with **Next.js + Tailwind CSS**.

## Quick start
1) Install Node.js (LTS).
2) In this folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize
- Update your name + links:
  - `components/Nav.tsx`
  - `components/Footer.tsx`
  - `app/page.tsx`
- Edit projects list:
  - `data/projects.ts`
- Add images:
  - Put images under `public/images/...`
  - Reference them in `data/projects.ts` (e.g. `/images/shelter/cover.jpg`)
- Add your PDF:
  - Put `cv.pdf` in `public/` so it becomes `/cv.pdf`

## Deploy (Vercel)
1) Push this folder to GitHub.
2) Import the repo in Vercel.
3) Deploy.

Build command: `npm run build`
Output: Next.js default.
