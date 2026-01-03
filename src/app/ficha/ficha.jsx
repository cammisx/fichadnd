import { useNavigate } from 'react-router-dom'
import { limparSessao } from '../../services/storage/session.js'

export default function ficha() {
  const navigate = useNavigate()

  function logout() {
    limparSessao()
    navigate('/')
  }

  return (
    <div>
      <h1>ficha do jogador</h1>
      <button onClick={logout}>sair</button>
    </div>
  )
}
