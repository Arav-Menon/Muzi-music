# Muzi 🎵

**Muzi** is a real-time, collaborative music room application where users can create or join rooms, queue songs, and vote on what plays next. Designed for college events, group hangouts, or online jam sessions — Muzi makes collective music listening fun and democratic.

---

## 🔥 Features

- 🎧 **Create and host your own music room**
- 🧑‍🤝‍🧑 **Join rooms via a unique code**
- 📻 **Spotify & YouTube integration**
- 🗳️ **Vote for the next track in real-time**
- 📜 Live queue + currently playing song display
- 🔒 Private or public rooms with optional passwords

---

## 🧱 Tech Stack

- **Frontend**: Next.js, Tailwind CSS, ShadCN
- **Backend**: Node.js, WebSockets, Redis (pub/sub)
- **Database**: PostgreSQL + Prisma
- **Auth**: JWT, Google OAuth, Spotify OAuth
- **Dev Setup**: Monorepo using Turborepo
- **DevOps**: Docker, CI/CD (Planned), Vercel Remote Caching

---

## 🏗️ Monorepo Structure (Turborepo + PNPM)

This repo uses [Turborepo](https://turborepo.org) with `pnpm` workspaces to manage a scalable monorepo.

### Apps & Packages

- `web`: Main Next.js frontend for the music app
- `docs`: Placeholder documentation site (Next.js)
- `@repo/ui`: Shared React UI components
- `@repo/typescript-config`: Shared TSConfig
- `@repo/eslint-config`: Shared ESLint + Prettier config

All code is written in **TypeScript**.

---

## 🛠️ Development

```bash
pnpm install
pnpm dev
