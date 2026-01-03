import { useState, useEffect } from 'react'
import './criar-personagem.css'
import { racas } from '../../data/racas/racas.js'

import Anao from '../racas/anao.jsx'
import Elfo from '../racas/elfo.jsx'
import Halfling from '../racas/halfling.jsx'
import Humano from '../racas/humano.jsx'
import Draconato from '../racas/draconato.jsx'
import Gnomo from '../racas/gnomo.jsx'
import MeioElfo from '../racas/meio-elfo.jsx'
import MeioOrc from '../racas/meio-orc.jsx'
import Tiefling from '../racas/tiefling.jsx'

const paginasRacas = {
  anao: <Anao />,
  elfo: <Elfo />,
  halfling: <Halfling />,
  humano: <Humano />,
  draconato: <Draconato />,
  gnomo: <Gnomo />,
  'meio-elfo': <MeioElfo />,
  'meio-orc': <MeioOrc />,
  tiefling: <Tiefling />
}

export default function criarPersonagem() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')

  const [ordem, setOrdem] = useState('Neutro')
  const [moral, setMoral] = useState('Neutro')
  const alinhamento = `${ordem} ${moral}`

  const [raca, setRaca] = useState('')
  const [classe, setClasse] = useState('')
  const [antecedente, setAntecedente] = useState('')
  const [popup, setPopup] = useState(null)
  const [racaEmExibicao, setRacaEmExibicao] = useState(null)

  const [tooltip, setTooltip] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!popup) return
    const fechar = e => e.key === 'Escape' && setPopup(null)
    window.addEventListener('keydown', fechar)
    return () => window.removeEventListener('keydown', fechar)
  }, [popup])

  return (
    <div className="criar">
      <div className="criar-frame">
        <h1>Criar Personagem</h1>

        <div className="criar-bloco">
          <h2>Identidade</h2>

          <label>Nome</label>
          <input value={nome} onChange={e => setNome(e.target.value)} />

          <label>Idade</label>
          <input type="number" value={idade} onChange={e => setIdade(e.target.value)} />
<h2>Alinhamento</h2>

<div className="alinhamento-bloco">

  <div className="alinhamento-coluna">
    <label>Ordem</label>
    <div className="alinhamento-opcoes">
      {['Leal', 'Neutro', 'Caótico'].map(opcao => (
        <div
          key={opcao}
          className={`alinhamento-item ${ordem === opcao ? 'ativo' : ''}`}
          onClick={() => setOrdem(opcao)}
          onMouseEnter={e => {
            setTooltipPos({ x: e.clientX, y: e.clientY })
            const t = {
              Leal: 'Segue leis, tradição, honra e hierarquia.',
              Neutro: 'Busca equilíbrio, estabilidade e pragmatismo.',
              Caótico: 'Valoriza liberdade, mudança e autonomia.'
            }
            setTooltip(t[opcao])
          }}
          onMouseLeave={() => setTooltip(null)}
        >
          {opcao}
        </div>
      ))}
    </div>
  </div>

  <div className="alinhamento-coluna">
    <label>Moral</label>
    <div className="alinhamento-opcoes">
      {['Bom', 'Neutro', 'Mau'].map(opcao => (
        <div
          key={opcao}
          className={`alinhamento-item ${moral === opcao ? 'ativo' : ''}`}
          onClick={() => setMoral(opcao)}
          onMouseEnter={e => {
            setTooltipPos({ x: e.clientX, y: e.clientY })
            const t = {
              Bom: 'Age por compaixão, altruísmo e proteção dos outros.',
              Neutro: 'Age conforme a situação e o bom senso.',
              Mau: 'Busca poder, egoísmo ou destruição sem remorso.'
            }
            setTooltip(t[opcao])
          }}
          onMouseLeave={() => setTooltip(null)}
        >
          {opcao}
        </div>
      ))}
    </div>
  </div>

</div>



        </div>

        <div className="criar-bloco">
          <h2 className="titulo-clicavel" onClick={() => setPopup('racas')}>Raça</h2>
          <select value={raca} onChange={e => setRaca(e.target.value)}>
            <option value="">Selecione uma raça</option>
            {racas.map(r => <option key={r.id}>{r.nome}</option>)}
          </select>
        </div>

        <div className="criar-bloco">
          <h2 className="titulo-clicavel">Classe</h2>
          <select value={classe} onChange={e => setClasse(e.target.value)}>
            <option value="">Selecione uma classe</option>
            <option>Guerreiro</option><option>Mago</option><option>Ladino</option>
            <option>Clérigo</option><option>Paladino</option><option>Bárbaro</option>
            <option>Feiticeiro</option><option>Bruxo</option><option>Monge</option>
            <option>Druida</option><option>Patrulheiro</option><option>Bardo</option>
          </select>
        </div>

        <div className="criar-bloco">
          <h2 className="titulo-clicavel">Antecedente</h2>
          <select value={antecedente} onChange={e => setAntecedente(e.target.value)}>
            <option value="">Selecione um antecedente</option>
            <option>Acólito</option><option>Artesão da Guilda</option>
            <option>Charlatão</option><option>Criminoso</option>
            <option>Herói do Povo</option><option>Nobre</option>
            <option>Sábio</option><option>Soldado</option>
            <option>Eremita</option><option>Forasteiro</option><option>Marinheiro</option>
          </select>
        </div>

        <button className="criar-botao">Próximo</button>
      </div>

      {tooltip && (
        <div className="tooltip-alinhamento" style={{ top: tooltipPos.y + 14, left: tooltipPos.x + 14 }}>
          {tooltip}
        </div>
      )}
    </div>
  )
}
