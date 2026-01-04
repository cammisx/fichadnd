import { racas } from "../../data/racas/racas"
import RacaLayout from "../../components/racalayout"

export default function Anao() {
  const raca = racas.find(r => r.id === "anao").ref
  return <RacaLayout raca={raca} />
}
