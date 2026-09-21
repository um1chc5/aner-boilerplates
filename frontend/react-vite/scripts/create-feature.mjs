#!/usr/bin/env node

import { mkdir, access, writeFile } from 'node:fs/promises'
import path from 'node:path'

const featureName = process.argv[2]
const cwd = process.cwd()

if (!featureName) {
  console.error('Usage: pnpm create:feature <feature-name>')
  process.exit(1)
}

const kebabCasePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
if (!kebabCasePattern.test(featureName)) {
  console.error('Feature name must be kebab-case, e.g. merchant-payment.')
  process.exit(1)
}

const featureRoot = path.join(cwd, 'src', 'features', featureName)
const pascalName = toPascalCase(featureName)

try {
  await access(featureRoot)
  console.error(`Feature '${featureName}' already exists.`)
  process.exit(1)
} catch {
  // feature does not exist, continue scaffolding
}

await mkdir(path.join(featureRoot, 'components'), { recursive: true })
await mkdir(path.join(featureRoot, 'hooks'), { recursive: true })
await mkdir(path.join(featureRoot, 'test'), { recursive: true })

const apiFileName = `${featureName}.api.ts`
const typeFileName = `${featureName}.type.ts`
const libFileName = `${featureName}.lib.ts`
const storeFileName = `${featureName}.store.ts`

await writeFile(
  path.join(featureRoot, apiFileName),
  [
    `export type ${pascalName}ApiHealth = {`,
    '  ok: boolean',
    '}',
    '',
    `export async function get${pascalName}Health(): Promise<${pascalName}ApiHealth> {`,
    '  return { ok: true }',
    '}',
    '',
  ].join('\n'),
)

await writeFile(
  path.join(featureRoot, typeFileName),
  [
    `export type ${pascalName} = {`,
    '  id: string',
    '  name: string',
    '}',
    '',
  ].join('\n'),
)

await writeFile(
  path.join(featureRoot, libFileName),
  [
    `export function normalize${pascalName}Name(value: string): string {`,
    '  return value.trim().toLowerCase()',
    '}',
    '',
  ].join('\n'),
)

await writeFile(
  path.join(featureRoot, storeFileName),
  [
    "import { create } from 'zustand'",
    '',
    `type ${pascalName}State = {`,
    '  isReady: boolean',
    '  setReady: (isReady: boolean) => void',
    '}',
    '',
    `export const use${pascalName}Store = create<${pascalName}State>((set) => ({`,
    '  isReady: false,',
    '  setReady: (isReady) => set({ isReady }),',
    '}))',
    '',
  ].join('\n'),
)

await writeFile(
  path.join(featureRoot, 'index.ts'),
  [
    `export type { ${pascalName} } from './${featureName}.type'`,
    `export { normalize${pascalName}Name } from './${featureName}.lib'`,
    `export { use${pascalName}Store } from './${featureName}.store'`,
    `export { get${pascalName}Health, type ${pascalName}ApiHealth } from './${featureName}.api'`,
    '',
  ].join('\n'),
)

console.log(`Created feature scaffold: src/features/${featureName}`)

function toPascalCase(value) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}
