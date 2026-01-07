import { useState, useEffect } from 'react'
import './criar-personagem.css'
import { racas } from '../../data/racas-data/racas.js'
import { classes } from '../../data/classes-data/classes.js'
import ClassLayout from '../../components/classlayout.jsx'
import AntecedenteLayout from "../../components/antecedentelayout.jsx"
import SeparadorGrimorio from "../../components/SeparadorGrimorio.jsx"


import Anao from '../racas/anao.jsx'
import Elfo from '../racas/elfo.jsx'
import Halfling from '../racas/halfling.jsx'
import Humano from '../racas/humano.jsx'
import Draconato from '../racas/draconato.jsx'
import Gnomo from '../racas/gnomo.jsx'
import MeioElfo from '../racas/meio-elfo.jsx'
import MeioOrc from '../racas/meio-orc.jsx'
import Tiefling from '../racas/tiefling.jsx'

import Barbaro from '../../data/classes-data/barbaro.jsx'
import Bardo from '../../data/classes-data/bardo.jsx'
import Bruxo from '../../data/classes-data/bruxo.jsx'
import Clerigo from '../../data/classes-data/clerigo.jsx'
import Druida from '../../data/classes-data/druida.jsx'
import Feiticeiro from '../../data/classes-data/feiticeiro.jsx'
import Guerreiro from '../../data/classes-data/guerreiro.jsx'
import Ladino from '../../data/classes-data/ladino.jsx'
import Mago from '../../data/classes-data/mago.jsx'
import Monge from '../../data/classes-data/monge.jsx'
import Paladino from '../../data/classes-data/paladino.jsx'
import Patrulheiro from '../../data/classes-data/patrulheiro.jsx'



const dadosClasses = {
  barbaro: Barbaro,
  bardo: Bardo,
  bruxo: Bruxo,
  clerigo: Clerigo,
  druida: Druida,
  feiticeiro: Feiticeiro,
  guerreiro: Guerreiro,
  ladino: Ladino,
  mago: Mago,
  monge: Monge,
  paladino: Paladino,
  patrulheiro: Patrulheiro
}

const paginasRacas = {
  anao: Anao,
  elfo: Elfo,
  halfling: Halfling,
  humano: Humano,
  draconato: Draconato,
  gnomo: Gnomo,
  meioelfo: MeioElfo,
  meioorc: MeioOrc,
  tiefling: Tiefling
}


const paginasClasses = {
  barbaro: Barbaro,
  bardo: Bardo,
  bruxo: Bruxo,
  clerigo: Clerigo,
  druida: Druida,
  feiticeiro: Feiticeiro,
  guerreiro: Guerreiro,
  ladino: Ladino,
  mago: Mago,
  monge: Monge,
  paladino: Paladino,
  patrulheiro: Patrulheiro
}



export default function CriarPersonagem() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')

  const [ordem, setOrdem] = useState('Neutro')
  const [moral, setMoral] = useState('Neutro')

  const [racaSelecionada, setRacaSelecionada] = useState(null)
  const [subracaSelecionada, setSubracaSelecionada] = useState('')

  const [classe, setClasse] = useState('')
  const [antecedente, setAntecedente] = useState('')
const [resultadosAtributos, setResultadosAtributos] = useState([])

  const [popup, setPopup] = useState(null)
  const [racaEmExibicao, setRacaEmExibicao] = useState(null)
  const [classeEmExibicao, setClasseEmExibicao] = useState(null)
const [antecedenteEmExibicao, setAntecedenteEmExibicao] = useState(null)
const [mostrarRolador, setMostrarRolador] = useState(false)

  const [tooltip, setTooltip] = useState('')
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
const [atributos, setAtributos] = useState({
  for: null,
  des: null,
  con: null,
  int: null,
  sab: null,
  car: null
})

const [atributoSelecionado, setAtributoSelecionado] = useState(null)
const [valorSelecionado, setValorSelecionado] = useState(null)
const [rolandoAtributos, setRolandoAtributos] = useState(false);


function calcularMod(valor) {
  if (!valor) return 0
  return Math.floor((valor - 10) / 2)
}


function rolarAtributos() {
  const novosResultados = []

  for (let i = 0; i < 6; i++) {
    const dados = Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 6) + 1
    )

    dados.sort((a, b) => a - b)
    const soma = dados[1] + dados[2] + dados[3]

    novosResultados.push({ dados, soma })
  }

  setResultadosAtributos(novosResultados)
}

  useEffect(() => {
    if (!popup) return
    const fechar = e => e.key === 'Escape' && setPopup(null)
    window.addEventListener('keydown', fechar)
    return () => window.removeEventListener('keydown', fechar)
  }, [popup])

  const normalizarId = txt =>
    txt
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z]/g, '')

   function rolarAtributos() {
  setRolandoAtributos(true);  // Marca que o botão está em rolagem

  const novosResultados = [];

  // Som de rolagem - trecho específico
  const audio = new Audio('/sounds/rolagem.m4a');  // Caminho do som
  audio.currentTime = 9.170;  // Começa no segundo 9.170
  audio.play();

  // Para o áudio após 1 segundo (até o segundo 10.259)
  setTimeout(() => {
    audio.pause();  // Para o áudio no segundo 10.259
  }, 1090);  // 1090ms = 1 segundo a partir de 9.170s (10.259 - 9.170)

  for (let i = 0; i < 6; i++) {
    const dados = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
    dados.sort((a, b) => a - b);
    const soma = dados[1] + dados[2] + dados[3];
    novosResultados.push({ dados, soma });
  }

  // Atualizar os resultados depois da animação
  setTimeout(() => {
    setResultadosAtributos(novosResultados);
    setRolandoAtributos(false); // Reabilita o botão e exibe "Rolar Novamente"
  }, 1000);  // O tempo de espera para a rolagem pode ser ajustado
}



  return (
    <div className="criar">
      <div className="criar-coluna-esquerda">
      <div className="criar-frame">

        <div className="criar-bloco">
          <h2>Identidade</h2>

          <label>Nome do Personagem</label>
          <input value={nome} onChange={e => setNome(e.target.value)} />

          <label>Idade</label>
          <input type="number" value={idade} onChange={e => setIdade(e.target.value)} />
<SeparadorGrimorio />
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
<SeparadorGrimorio />
        <div className="criar-bloco">
          <h2 className="titulo-clicavel" onClick={() => setPopup('racas')}>Raça</h2>

          <select
            value={racaSelecionada?.id || ''}
            onChange={e => {
              const raca = racas.find(r => r.id === e.target.value)
              setRacaSelecionada(raca)
              setSubracaSelecionada('')
            }}
          >
            <option value="">Selecione uma raça</option>
            {racas.map(r => (
              <option key={r.id} value={r.id}>{r.nome}</option>
            ))}
          </select>

          {racaSelecionada?.criacao?.subracas?.length > 0 && (
            <><SeparadorGrimorio />
              <h2>Sub-raça</h2>
              <select
                value={subracaSelecionada}
                onChange={e => setSubracaSelecionada(e.target.value)}
              >
                <option value="">Selecione uma sub-raça</option>
                {racaSelecionada.criacao.subracas.map((s, i) => (
                  <option key={i} value={s.nome}>{s.nome}</option>
                ))}
              </select>
            </>
          )}
        </div>
<SeparadorGrimorio />
        <div className="criar-bloco">
          <h2 className="titulo-clicavel" onClick={() => setPopup('classes')}>Classe</h2>

          <select value={classe} onChange={e => setClasse(e.target.value)}>
  <option value="">Selecione uma classe</option>
  {classes.map(c => (
    <option key={c.id} value={c.id}>{c.nome}</option>
  ))}
</select>

        </div>
<SeparadorGrimorio />
        <div className="criar-bloco">
          <h2 className="titulo-clicavel" onClick={() => setPopup("antecedentes")}>
  Antecedente
</h2>

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
      </div>
      </div>
   <div className="criar-direita">
      {/* aqui depois a gente coloca preview, arte, ficha, etc */}
    </div>

      {/* POPUP RAÇAS */}
      {popup === 'racas' && (
        <div className="popup-overlay" onClick={() => { setPopup(null); setRacaEmExibicao(null) }}>
<div className="popup-conteudo" onClick={e => e.stopPropagation()}>

  <div className="popup-miolo">
    <div className="popup-scroll">


  <div className="ornamento-canto canto-esq-topo" />
  <div className="ornamento-canto canto-dir-topo" />
  <div className="ornamento-canto canto-esq-baixo" />
  <div className="ornamento-canto canto-dir-baixo" />


          
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
          {(() => {
  const ComponenteRaca = paginasRacas[normalizarId(racaEmExibicao.id)]
  return ComponenteRaca ? <ComponenteRaca raca={racaEmExibicao} /> : null
})()}



                
              </>
            )}
    </div>
  </div>
<div className="popup-rodape">
  {racaEmExibicao && (
    <button
      className="popup-acao"
      onClick={() => setRacaEmExibicao(null)}
    >
      ← Voltar
    </button>
  )}

  <button
    className="popup-acao"
    onClick={() => { setPopup(null); setRacaEmExibicao(null) }}
  >
    Fechar
  </button>
</div>

          </div>
        </div>
      )}

      {/* POPUP CLASSES */}
      {popup === 'classes' && (
        <div className="popup-overlay" onClick={() => { setPopup(null); setClasseEmExibicao(null) }}>
         <div className="popup-conteudo" onClick={e => e.stopPropagation()}>

  <div className="popup-miolo">
    <div className="popup-scroll">


  <div className="ornamento-canto canto-esq-topo" />
  <div className="ornamento-canto canto-dir-topo" />
  <div className="ornamento-canto canto-esq-baixo" />
  <div className="ornamento-canto canto-dir-baixo" />


          
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
    <ClassLayout classe={classeEmExibicao} />

   
  </>
)}
    </div>
  </div>
<div className="popup-rodape">
  {classeEmExibicao && (
    <button
      className="popup-acao"
      onClick={() => setClasseEmExibicao(null)}
    >
      ← Voltar
    </button>
  )}

  <button
    className="popup-acao"
    onClick={() => { setPopup(null); setClasseEmExibicao(null) }}
  >
    Fechar
  </button>
</div>


          </div>
        </div>
     
     
     )}
{/* POPUP ANTECEDENTES */}
{popup === "antecedentes" && (
  <div className="popup-overlay" onClick={() => { setPopup(null); setAntecedenteEmExibicao(null) }}>
    <div className="popup-conteudo" onClick={e => e.stopPropagation()}>

      <div className="popup-miolo">
        <div className="popup-scroll">

          <div className="ornamento-canto canto-esq-topo" />
          <div className="ornamento-canto canto-dir-topo" />
          <div className="ornamento-canto canto-esq-baixo" />
          <div className="ornamento-canto canto-dir-baixo" />

          {!antecedenteEmExibicao && (
            <>
              <h2>Antecedentes</h2>

              <div className="lista-racas">
                {[
                  "Acólito", "Artesão da Guilda", "Charlatão", "Criminoso", "Herói do Povo",
                  "Nobre", "Sábio", "Soldado", "Eremita", "Forasteiro", "Marinheiro"
                ].map(a => (
                  <div
                    key={a}
                    className="item-raca"
                    onClick={() => setAntecedenteEmExibicao(a)}
                  >
                    {a}
                  </div>
                ))}
              </div>

             
            </>
          )}

          {antecedenteEmExibicao && (
            <AntecedenteLayout nome={antecedenteEmExibicao} />
          )}

        </div>
      </div>
 <div className="popup-rodape">
                <button
                  className="popup-acao"
                  onClick={() => { setPopup(null); setAntecedenteEmExibicao(null) }}
                >
                  Fechar
                </button>
              </div>
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
 <div className="criar-coluna-centro">
    {/* Preview do personagem (vazio por enquanto) */}
  </div>

  <div className="criar-coluna-direita">
    {/* Rolador entra aqui */}
  </div>

<div
  className="botao-rolador"
  onClick={() => setMostrarRolador(v => !v)}
>

  <img src="https://i.imgur.com/RTWOzJV.png" alt="Rolador" />
</div>
{mostrarRolador && (
  <div className="rolador-popover">
    <div className="rolador-seta"></div>

    <div className="rolador-modal">
  
  <div className="rolador-conteudo">

  {!rolandoAtributos && (
    <button
      className="rolar-botao"
      onClick={rolarAtributos}
    >
      {resultadosAtributos.length > 0 ? "Rolar novamente" : "Rolar Atributos"}
    </button>
  )}

  {rolandoAtributos && (
    <div className="animacao-dados">
      {Array.from({ length: 6 }).map((_, i) => (
        <img
          key={i}
          src="https://i.imgur.com/RTWOzJV.png"
          alt="Dado"
          className="dado-animado"
        />
      ))}
    </div>
  )}

  {(!rolandoAtributos && resultadosAtributos.length > 0) && (
    <div className="resultado-atributos">
      {resultadosAtributos.map((r, i) => (
        <div key={i} className="linha-resultado">
          🎲 {r.dados.map((d, j) => (
            <span key={j} style={{ margin: "0 3px" }}>{d}</span>
          ))}
          <span style={{ margin: "0 6px" }}>➜</span>
          <strong style={{ color: "#ffd37a", fontSize: "16px" }}>{r.soma}</strong>
        </div>
      ))}
    </div>
  )}

</div>


    </div>
  </div>
)}

    </div>
  )
}
