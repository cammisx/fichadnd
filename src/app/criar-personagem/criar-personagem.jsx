import { useState, useEffect } from 'react'
import './criar-personagem.css'
import { racas } from '../../data/racas/racas.js'
import { classes } from '../../data/classes/classes.js'
import Anao from '../racas/anao.jsx'
import Elfo from '../racas/elfo.jsx'
import Halfling from '../racas/halfling.jsx'
import Humano from '../racas/humano.jsx'
import Draconato from '../racas/draconato.jsx'
import Gnomo from '../racas/gnomo.jsx'
import MeioElfo from '../racas/meio-elfo.jsx'
import MeioOrc from '../racas/meio-orc.jsx'
import Tiefling from '../racas/tiefling.jsx'
import Barbaro from '../classes/barbaro.jsx'
import Bardo from '../classes/bardo.jsx'
import Bruxo from '../classes/bruxo.jsx'
import Clerigo from '../classes/clerigo.jsx'
import Druida from '../classes/druida.jsx'
import Feiticeiro from '../classes/feiticeiro.jsx'
import Guerreiro from '../classes/guerreiro.jsx'
import Ladino from '../classes/ladino.jsx'
import Mago from '../classes/mago.jsx'
import Monge from '../classes/monge.jsx'
import Paladino from '../classes/paladino.jsx'
import Patrulheiro from '../classes/patrulheiro.jsx'


const paginasRacas = {
  anao: <Anao />,
  elfo: <Elfo />,
  halfling: <Halfling />,
  humano: <Humano />,
  draconato: <Draconato />,
  gnomo: <Gnomo />,
  meioelfo: <MeioElfo />,
  meioorc: <MeioOrc />,
  tiefling: <Tiefling />
}
const paginasClasses = {
  barbaro: <Barbaro />,
  bardo: <Bardo />,
  bruxo: <Bruxo />,
  clerigo: <Clerigo />,
  druida: <Druida />,
  feiticeiro: <Feiticeiro />,
  guerreiro: <Guerreiro />,
  ladino: <Ladino />,
  mago: <Mago />,
  monge: <Monge />,
  paladino: <Paladino />,
  patrulheiro: <Patrulheiro />
}

export default function criarPersonagem() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')

  const [ordem, setOrdem] = useState('Neutro')
  const [moral, setMoral] = useState('Neutro')

  const [raca, setRaca] = useState('')
  const [classe, setClasse] = useState('')
  const [antecedente, setAntecedente] = useState('')
  const [popup, setPopup] = useState(null)
  const [racaEmExibicao, setRacaEmExibicao] = useState(null)
  const [tooltip, setTooltip] = useState('')
const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
const [classeEmExibicao, setClasseEmExibicao] = useState(null)


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
               {['Leal', 'Neutro', 'Caótico'].map(o => (
  <div
    key={o}
    className={`alinhamento-item ${ordem === o ? 'ativo' : ''}`}
    onClick={() => setOrdem(o)}
    onMouseMove={e => {
      setTooltipPos({ x: e.clientX, y: e.clientY })
      const textos = {
        Leal: 'Segue leis, tradição, honra e hierarquia.',
        Neutro: 'Busca equilíbrio, pragmatismo e estabilidade.',
        Caótico: 'Valoriza liberdade, mudança e autonomia.'
      }
      setTooltip(textos[o])
    }}
    onMouseLeave={() => setTooltip('')}
  >
    {o}
  </div>
))}

              </div>
            </div>

            <div className="alinhamento-coluna">
              <label>Moral</label>
              <div className="alinhamento-opcoes">
               {['Bom', 'Neutro', 'Mau'].map(m => (
  <div
    key={m}
    className={`alinhamento-item ${moral === m ? 'ativo' : ''}`}
    onClick={() => setMoral(m)}
    onMouseMove={e => {
      setTooltipPos({ x: e.clientX, y: e.clientY })
      const textos = {
        Bom: 'Age por compaixão, altruísmo e proteção dos outros.',
        Neutro: 'Age conforme a situação e o bom senso.',
        Mau: 'Busca poder, egoísmo e destruição sem remorso.'
      }
      setTooltip(textos[m])
    }}
    onMouseLeave={() => setTooltip('')}
  >
    {m}
  </div>
))}

              </div>
            </div>
          </div>
        </div>

        <div className="criar-bloco">
          <h2 className="titulo-clicavel" onClick={() => setPopup('racas')}>
            Raça
          </h2>

          <select value={raca} onChange={e => setRaca(e.target.value)}>
            <option value="">Selecione uma raça</option>
            {racas.map(r => <option key={r.id}>{r.nome}</option>)}
          </select>
        </div>

        <div className="criar-bloco">
          <h2 className="titulo-clicavel" onClick={() => setPopup('classes')}>
  Classe
</h2>


          <select value={classe} onChange={e => setClasse(e.target.value)}>
            <option value="">Selecione uma classe</option>
            <option>Guerreiro</option>
            <option>Mago</option>
            <option>Ladino</option>
            <option>Clérigo</option>
            <option>Paladino</option>
            <option>Bárbaro</option>
            <option>Feiticeiro</option>
            <option>Bruxo</option>
            <option>Monge</option>
            <option>Druida</option>
            <option>Patrulheiro</option>
            <option>Bardo</option>
          </select>
        </div>

        <div className="criar-bloco">
          <h2 className="titulo-clicavel">Antecedente</h2>
          <select value={antecedente} onChange={e => setAntecedente(e.target.value)}>
            <option value="">Selecione um antecedente</option>
            <option>Acólito</option>
            <option>Artesão da Guilda</option>
            <option>Charlatão</option>
            <option>Criminoso</option>
            <option>Herói do Povo</option>
            <option>Nobre</option>
            <option>Sábio</option>
            <option>Soldado</option>
            <option>Eremita</option>
            <option>Forasteiro</option>
            <option>Marinheiro</option>
          </select>
        </div>

        <button className="criar-botao">Próximo</button>
      </div>

      {popup === 'racas' && (
        <div className="popup-overlay" onClick={() => { setPopup(null); setRacaEmExibicao(null) }}>
          <div className="popup-conteudo" onClick={e => e.stopPropagation()}>

            <button className="popup-fechar" onClick={() => { setPopup(null); setRacaEmExibicao(null) }}>×</button>

            {!racaEmExibicao && (
              <>
                <h2>Raças</h2>
                <div className="lista-racas">
                  {racas.map(r => (
                    <div key={r.id} className="item-raca" onClick={() => setRacaEmExibicao(r)}>
                      {r.nome}
                    </div>
                  ))}
                </div>
              </>
            )}

            {racaEmExibicao && (
              <>
                <h2>{racaEmExibicao.nome}</h2>
                {paginasRacas[
  racaEmExibicao.id
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z]/g, '')
]}

                <button className="botao-popup-voltar" onClick={() => setRacaEmExibicao(null)}>← Voltar</button>
              </>
            )}

          </div>
        </div>
      )}
      {tooltip && (
  <div
    className="tooltip-alinhamento"
    style={{ top: tooltipPos.y + 16, left: tooltipPos.x + 16 }}
  >
    {tooltip}
  </div>
)}
{popup === 'classes' && (
  <div className="popup-overlay" onClick={() => { setPopup(null); setClasseEmExibicao(null) }}>
    <div className="popup-conteudo" onClick={e => e.stopPropagation()}>

      <button className="popup-fechar" onClick={() => { setPopup(null); setClasseEmExibicao(null) }}>×</button>

      {!classeEmExibicao && (
        <>
          <h2>Classes</h2>

          <div className="lista-racas">
            {classes.map(c => (
              <div
                key={c.id}
                className="item-raca"
                onClick={() => setClasseEmExibicao(c)}
              >
                {c.nome}
              </div>
            ))}
          </div>
        </>
      )}

      {classeEmExibicao && (
        <>
          <h2>{classeEmExibicao.nome}</h2>
          {paginasClasses[classeEmExibicao.id]}
          <button className="botao-popup-voltar" onClick={() => setClasseEmExibicao(null)}>
            ← Voltar
          </button>
        </>
      )}

    </div>
  </div>
)}


    </div>
  )
}
