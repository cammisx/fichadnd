import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

export default function login() {
  const navigate = useNavigate()
  const [nick, setNick] = useState('')
  const [senha, setSenha] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!nick || !senha) {
      alert('preencha todos os campos')
      return
    }

    // por enquanto: autenticação local fake
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
const usuario = usuarios.find(u => u.nick === nick && u.senha === senha)

if (!usuario) {
  alert('usuário ou senha inválidos')
  return
}

localStorage.setItem('usuario_logado', nick)

if (usuario.tipo === 'mestre') {
  navigate('/mestre')
} else {
  navigate('/ficha')
}

  }

  return (
    <div className="login">
      <div className="login-frame">
        <h1>Entrar</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nick"
            value={nick}
            onChange={e => setNick(e.target.value)}
          />

          <input
            type="password"
            placeholder="senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  )
}
