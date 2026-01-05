import { racas } from "../../data/racas-data/racas"
import RacaLayout from "../../components/racalayout"

export default function Tiefling() {
  const entry = racas.find(r => r.id === "tiefling")
  const raca = entry?.ref || entry

  if (!raca) return null

  return <RacaLayout raca={raca} />
}
