# aner-boilerplates

Frontend starters that share one layout: **vertical features**, **shared** modules, and thin app shells.

| Path | Stack |
| --- | --- |
| [`frontend/nextjs`](./frontend/nextjs) | Next.js App Router + React + TypeScript + Tailwind |
| [`frontend/react-vite`](./frontend/react-vite) | Vite + React + TypeScript + Tailwind + Zustand + Vitest |

Convention: [`docs/project-convention.md`](./docs/project-convention.md).

## Use a starter

Copy one folder (or clone and delete the other). Then:

```bash
cd frontend/react-vite   # or frontend/nextjs
pnpm install
pnpm dev
```

Create a feature:

```bash
pnpm create:feature merchant-payment
```

## What stays the same

- Domain code lives in `src/features/<name>/`.
- Cross-cutting code lives in `src/shared/`.
- Public surface is `index.ts`. Features do not import another feature’s internals.
- Start with `*.store.ts` / `*.type.ts` / `*.api.ts` files. Promote to `stores/` / `types/` / `apis/` only when a kind grows past two files.
- Add extra file kinds (`*.db.ts`, nested `components/`) only when that module needs them.

Stack-specific docs and generators live inside each template.
