import RacaLayout from "../../components/racalayout"
import { racas } from "../../data/racas-data/racas"

export default function Draconato() {
  const raca = racas.find(r => r.id === "draconato")
  return <RacaLayout raca={raca} />
}
