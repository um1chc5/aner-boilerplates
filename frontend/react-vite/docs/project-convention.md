# React Vite — project convention

Shared layout (features vs `shared`, files vs folders, import boundaries) is documented at the repo root:

[`../../../docs/project-convention.md`](../../../docs/project-convention.md)

## Stack notes

- **pnpm** only (`pnpm install` / `pnpm dev` / `pnpm test`).
- **Zustand** for feature and shared client state. Select inside the child that needs the data; do not select in a parent and drill.
- **Vitest** tests live in each feature’s `test/` (`*.test.ts`). Prefer that over tests next to every source file at the feature root.
- Scaffold with `pnpm create:feature <kebab-name>`: single-file `*.api.ts` / `*.type.ts` / `*.lib.ts` / `*.store.ts` at the feature root (not `stores/` until you have more than two of that kind), plus `components/`, `hooks/`, and `test/`.
