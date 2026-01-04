import { racas } from "../../data/racas/racas"
import RacaLayout from "../../components/racalayout"

export default function MeioOrc() {
  const entry = racas.find(r => r.id === "meio_orc")
  const raca = entry?.ref || entry

  if (!raca) return null

  return <RacaLayout raca={raca} />
}
