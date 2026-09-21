export type ExampleCounterApiHealth = {
  ok: boolean
}

export async function getExampleCounterHealth(): Promise<ExampleCounterApiHealth> {
  return { ok: true }
}
