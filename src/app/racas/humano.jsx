import { racas } from "../../data/racas/racas"
import RacaLayout from "../../components/racalayout"

export default function Humano() {
  const entry = racas.find(r => r.id === "humano")
  const raca = entry?.ref || entry

  if (!raca) return null

  return <RacaLayout raca={raca} />
}
