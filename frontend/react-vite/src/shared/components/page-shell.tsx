import type { ReactNode } from 'react'

type PageShellProps = {
  title: string
  subtitle: string
  children: ReactNode
}

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <div className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-6 py-16">
      <header className="mb-8">
        <p className="text-sm font-medium tracking-wide text-muted uppercase">aner-boilerplates</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-3 text-muted">{subtitle}</p>
      </header>
      {children}
    </div>
  )
}
