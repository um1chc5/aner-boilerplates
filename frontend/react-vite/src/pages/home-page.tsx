import { CounterPanel } from '@/features/example-counter'
import { PageShell } from '@/shared'

export function HomePage() {
  return (
    <PageShell
      title="Aner React Vite"
      subtitle="Vertical features, shared modules, thin pages."
    >
      <CounterPanel />
    </PageShell>
  )
}
