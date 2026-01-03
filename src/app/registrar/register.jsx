import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { criarUsuario, gerarMesaParaMestre, buscarMesaPorCodigo } from '../../services/storage/storage.js'
import './register.css'

export default function register() {
  const navigate = useNavigate()
  const [nick, setNick] = useState('')
  const [senha, setSenha] = useState('')
  const [tipo, setTipo] = useState('mestre')
  const [codigoMesa, setCodigoMesa] = useState('')
  const [nomeMesa, setNomeMesa] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!nick || !senha) {
      alert('preencha todos os campos')
      return
    }

    if (tipo === 'mestre' && !nomeMesa) {
      alert('informe o nome da mesa')
      return
    }

    if (tipo === 'player' && !codigoMesa) {
      alert('informe o código da mesa')
      return
    }

    if (tipo === 'mestre') {
      const mesa = gerarMesaParaMestre(nomeMesa, nick)

      criarUsuario({ nick, senha, tipo, mesaId: mesa.id })
      localStorage.setItem('usuario_logado', nick)

      alert(`Mesa criada! Código da mesa: ${mesa.codigo}`)
      navigate('/mestre')
    } else {
      const mesa = buscarMesaPorCodigo(codigoMesa)

      if (!mesa) {
        alert('mesa não encontrada')
        return
      }

      mesa.jogadores.push(nick)
      localStorage.setItem('mesas', JSON.stringify(
        JSON.parse(localStorage.getItem('mesas')).map(m => m.id === mesa.id ? mesa : m)
      ))

      criarUsuario({ nick, senha, tipo, mesaId: mesa.id })
      localStorage.setItem('usuario_logado', nick)

      navigate('/ficha')
    }
  }

  return (
    <div className="register">
      <div className="register-frame">
        <h1>Criar Conta</h1>

        <form onSubmit={handleSubmit}>
          <input placeholder="Nick" value={nick} onChange={e => setNick(e.target.value)} />
          <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />

          <div className="register-type">
            <label>
              <input type="radio" checked={tipo === 'mestre'} onChange={() => setTipo('mestre')} />
              Sou Mestre
            </label>

            <label>
              <input type="radio" checked={tipo === 'player'} onChange={() => setTipo('player')} />
              Sou Player
            </label>
          </div>

          {tipo === 'mestre' && (
            <input placeholder="Nome da Mesa" value={nomeMesa} onChange={e => setNomeMesa(e.target.value)} />
          )}

          {tipo === 'player' && (
            <input placeholder="Código da Mesa" value={codigoMesa} onChange={e => setCodigoMesa(e.target.value)} />
          )}

          <button>Criar Conta</button>
        </form>
      </div>
    </div>
  )
}
