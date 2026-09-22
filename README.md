# Aizar Rahima Suprayitno — Portfolio

Personal portfolio site built with Nuxt 4, Vue 3, and Tailwind CSS. Showcases work experience, projects, skills, and education, with scroll-triggered animations powered by `@vueuse/motion`.

## Tech Stack

- [Nuxt 4](https://nuxt.com/) (Vue 3, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [@vueuse/motion](https://motion.vueuse.org/) for scroll-reveal animations
- Content sourced from local JSON files (`app/content/`) — no CMS/backend
- Deployed as a static site (`nitro.preset: vercel-static`) on Vercel

## Project Structure

```
app/
├── app.vue                  # Root component, renders <NuxtPage />
├── assets/css/main.css      # Tailwind entry point
├── components/
│   ├── layout/               # NavBar, Footer
│   ├── sections/              # Hero, AboutMe, WorkHistory, Projects, etc.
│   └── ui/                   # Reusable pieces: ProjectCard, TimelineCard, StatCard, Pill
├── content/                  # Profile, projects, skills, work history, stats (JSON)
└── pages/index.vue           # Assembles all sections
```

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Runs the dev server at `http://localhost:3000`.

## Build & Preview

```bash
npm run generate   # static build (matches production/Vercel output)
npm run preview    # preview the production build locally
```

## Type Checking

```bash
npx nuxt typecheck
```

## Editing Content

Update the JSON files in `app/content/` to change profile info, work history, projects, skills, or stats — no component code changes needed for content updates.
