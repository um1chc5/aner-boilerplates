import { formatCountLabel } from '../example-counter.lib'
import { useExampleCounterStore } from '../example-counter.store'

export function CounterPanel() {
  const count = useExampleCounterStore((state) => state.count)
  const increment = useExampleCounterStore((state) => state.increment)
  const decrement = useExampleCounterStore((state) => state.decrement)
  const reset = useExampleCounterStore((state) => state.reset)

  return (
    <section className="rounded-2xl border border-line bg-card p-6 shadow-sm">
      <p className="text-sm text-muted">example-counter</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight">{formatCountLabel(count)}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg"
          onClick={increment}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded-full border border-line px-4 py-2 text-sm font-medium"
          onClick={decrement}
        >
          Remove
        </button>
        <button
          type="button"
          className="rounded-full border border-line px-4 py-2 text-sm font-medium"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </section>
  )
}
