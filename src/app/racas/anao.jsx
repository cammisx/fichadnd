import { racas } from "../../data/racas-data/racas"
import RacaLayout from "../../components/racalayout"

export default function Anao({ raca }) {
  if (!raca) return null

  return <RacaLayout raca={raca} />
}

