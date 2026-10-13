<div align="center">

# Histology Quiz AI

**An AI-powered histology study app with labeled slides, image quizzes, exam practice, and an AI tutor.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)

</div>

---

## Overview

Histology Quiz AI helps students learn tissue structure through slide-first revision, an exam feedback loop, and focused tutor help. Students study labeled microscope slides, test themselves with image-based and written quizzes, track their progress, and ask an AI tutor when they get stuck.

## Features

- **Slide viewer** with labeled histology slides.
- **Study mode** with structured notes.
- **Quizzes:** multiple-choice exam practice and image-identification quizzes.
- **AI tutor** powered by OpenAI, with chat history.
- **Progress dashboard** showing quiz attempts and results.
- **Admin page** for managing content.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui, Framer Motion |
| Data | PostgreSQL, Drizzle ORM, TanStack Query, Zustand |
| AI | OpenAI |
| Charts | Recharts |

## Getting Started

### Prerequisites

- Node.js and npm
- A PostgreSQL database
- An OpenAI API key

### Installation

```bash
git clone https://github.com/RithyBondeth/Histology-Quiz-AI.git
cd Histology-Quiz-AI
npm install
npm run db:push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string |
| `OPENAI_API_KEY` | AI tutor |
| `OPENAI_MODEL` | Optional model override |

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run db:push` | Sync the database schema |
| `npm run db:generate` | Generate migrations |
| `npm run db:studio` | Open Drizzle Studio |

## Project Structure

```text
Histology-Quiz-AI/
├── app/
│   ├── slides/  study/  quiz/  image-quiz/  tutor/  dashboard/  admin/
│   └── api/                # image-quiz, progress, and tutor endpoints
├── components/             # Feature components and shadcn/ui primitives
├── lib/
│   ├── db/                 # Drizzle schema and client
│   └── *-data.ts(on)       # Quiz, study, and image-quiz content
└── public/slides/          # Histology slide images
```

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
