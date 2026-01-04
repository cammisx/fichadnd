import { racas } from "../../data/racas/racas"
import RacaLayout from "../../components/racalayout"

export default function Draconato() {
  const raca = racas.find(r => r.id === "draconato").ref
  return <RacaLayout raca={raca} />
}
