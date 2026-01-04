import { racas } from "../../data/racas/racas"
import RacaLayout from "../../components/racalayout"

export default function Elfo() {
  const entry = racas.find(r => r.id === "elfo")
  const raca = entry?.ref || entry

  if (!raca) return null

  return <RacaLayout raca={raca} />
}
