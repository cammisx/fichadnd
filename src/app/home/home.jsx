import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './home.css'


export default function home() {
  const navigate = useNavigate()
useEffect(() => {
  const nick = localStorage.getItem('usuario_logado')
  if (!nick) return

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
  const usuario = usuarios.find(u => u.nick === nick)

  if (!usuario) return

  if (usuario.tipo === 'mestre') {
    navigate('/mestre')
  } else {
    navigate('/ficha')
  }
}, [])

  return (
    <div className="home">
      <div className="home-frame">
        <h1 className="home-title">Ficha de Personagem</h1>
        <p className="home-subtitle">Sua aventura começa aqui</p>

        <div className="home-actions">
          <button onClick={() => navigate('/login')}>entrar</button>
          <button onClick={() => navigate('/registrar')}>criar conta</button>
        </div>
      </div>
    </div>
  )
}
