# aner-react-vite

Vite + React + TypeScript starter from [aner-boilerplates](https://github.com/um1chc5/aner-boilerplates). Vertical features, `shared` modules, thin pages.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- Zustand
- Vitest
- pnpm
- oxlint

## Getting started

```bash
pnpm install
pnpm dev
```

Create a feature:

```bash
pnpm create:feature merchant-payment
```

## Convention

Repo-wide layout: [`../../docs/project-convention.md`](../../docs/project-convention.md). Vite notes: [`docs/project-convention.md`](./docs/project-convention.md).

- Domain code: `src/features/<name>/`
- Cross-cutting: `src/shared/`
- Public surface: `index.ts` (import another feature only through its barrel)
- Single `*.store.ts` / `*.type.ts` / `*.api.ts` until more than two of that kind, then promote to a folder
- Tests: `src/features/<name>/test/`

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Vite dev server |
| `pnpm build` | typecheck + production build |
| `pnpm preview` | preview the production build |
| `pnpm test` | Vitest (run once) |
| `pnpm typecheck` | `tsc -b` |
| `pnpm lint` | oxlint |
| `pnpm create:feature` | scaffold a kebab-case feature |
