import { useNavigate } from 'react-router-dom'
import { limparSessao } from '../../services/storage/session.js'

export default function mestre() {
  const navigate = useNavigate()

  function logout() {
    limparSessao()
    navigate('/')
  }

  return (
    <div>
      <h1>painel do mestre</h1>
      <button onClick={logout}>sair</button>
    </div>
  )
}
