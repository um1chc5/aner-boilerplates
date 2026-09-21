# Vertical / shared convention

Shared layout for every starter in this repo. Stack-specific notes live next to each template (`frontend/nextjs/docs`, `frontend/react-vite/docs`).

## Goals

- Keep domain logic inside a vertical **feature** (module).
- Keep cross-cutting, domain-agnostic code in **shared**.
- Start with files; promote to folders when a kind of module grows.

## Layout

```txt
src/
  features/<feature>/
    index.ts                 # public barrel only
    *.type|lib|store|api|db.ts
    components/              # UI; nest kebab-case folders when a parent has children
    hooks/                   # optional
    test/                    # *.test.ts for this feature
    # If one kind grows past two files, promote:
    apis/
    types/
    stores/
    libs/
  shared/
    components/
    hooks/
    apis/
    types/
    libs/
    stores/
```

Pages / app shells stay thin: they compose features. They do not own a giant state bag.

## Files vs folders

Default to a **single file** per kind at the feature root:

- `library.store.ts`
- `library.type.ts`
- `library.api.ts`

Add extra suffixes when the module needs them (`*.db.ts`, `*.search.ts`). Do not invent a folder until you have a reason.

Promote to a folder when you have **more than two files of that kind**, or a clear split:

- `stores/library.store.ts` + `stores/library-ui.store.ts`
- `apis/books.api.ts` + `apis/covers.api.ts`

`shared/` uses `apis/`, `types/`, `libs/`, `stores/`, `components/`, `hooks/` as the default organization because those modules are already cross-cutting.

## Naming

- **kebab-case** for folders and files (`reader-page.tsx`, `library.store.ts`).
- Suffixes: `.api.ts` / `.type.ts` / `.lib.ts` / `.store.ts` / `.db.ts`.
- Component files are kebab-case. Co-locate CSS next to the TSX.

## Import boundaries

- Features import `shared` or another feature’s **`index.ts`**.
- Never deep-import another feature’s internals.
- Barrel `index.ts` only at public boundaries (feature root, shared folders you intend to export).

```ts
// Good
import { useLibraryStore } from '@/features/library'
import { cn } from '@/shared'

// Avoid
import { useLibraryStore } from '@/features/library/library.store'
```

## State

Prefer a store (Zustand in the Vite starter) over prop-drilling for cross-component feature state.

Select inside the child that needs the data. Do not select in a parent and pass it down.

```tsx
// Avoid: parent selects + drills
const count = useExampleCounterStore((s) => s.count)
return <CounterPanel count={count} />

// Prefer: child selects
function CounterPanel() {
  const count = useExampleCounterStore((s) => s.count)
  return <p>{count}</p>
}
```

Pass props only for local ownership or a presentational leaf.

## Generator

Each starter exposes `pnpm create:feature <kebab-name>`. It scaffolds the single-file layout plus `components/`, `hooks/`, and (Vite) `test/`.
