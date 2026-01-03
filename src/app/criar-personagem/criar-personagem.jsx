import { useState } from 'react'
import './criar-personagem.css'
import { racas } from '../../data/racas/racas.js'

// páginas de conteúdo das raças
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
  const [alinhamento, setAlinhamento] = useState('neutro')
  const [raca, setRaca] = useState('')
  const [classe, setClasse] = useState('')
  const [antecedente, setAntecedente] = useState('')
  const [popup, setPopup] = useState(null)
  const [racaEmExibicao, setRacaEmExibicao] = useState(null)

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

          <h2 className="titulo-clicavel" onClick={() => setPopup('alinhamento')}>
            Alinhamento
          </h2>

          <select value={alinhamento} onChange={e => setAlinhamento(e.target.value)}>
            <option value="leal bom">Leal Bom</option>
            <option value="neutro bom">Neutro Bom</option>
            <option value="caotico bom">Caótico Bom</option>
            <option value="leal neutro">Leal Neutro</option>
            <option value="neutro">Neutro</option>
            <option value="caotico neutro">Caótico Neutro</option>
            <option value="leal mau">Leal Mau</option>
            <option value="neutro mau">Neutro Mau</option>
            <option value="caotico mau">Caótico Mau</option>
          </select>
        </div>

        <div className="criar-bloco">
          <h2 className="titulo-clicavel" onClick={() => setPopup('racas')}>
            Raça
          </h2>

          <select value={raca} onChange={e => setRaca(e.target.value)}>
            <option value="">Selecione uma raça</option>
            {racas.map(r => (
              <option key={r.id}>{r.nome}</option>
            ))}
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
          <h2 className="titulo-clicavel" onClick={() => setPopup('antecedentes')}>
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

        {popup === 'racas' && (
          <div className="popup-overlay">
            <div className="popup-conteudo">

              {!racaEmExibicao && (
                <>
                  <h2>Raças</h2>

                  <div className="lista-racas">
                    {racas.map(r => (
                      <div
                        key={r.id}
                        className="item-raca"
                        onClick={() => setRacaEmExibicao(r)}
                      >
                        {r.nome}
                      </div>
                    ))}
                  </div>

                  <button onClick={() => setPopup(null)}>Fechar</button>
                </>
              )}

              {racaEmExibicao && (
                <>
                  <h2>{racaEmExibicao.nome}</h2>

                  {paginasRacas[racaEmExibicao.id]}

                  <button
                    className="botao-popup-voltar"
                    onClick={() => setRacaEmExibicao(null)}
                  >
                    ← Voltar
                  </button>
                </>
              )}

            </div>
          </div>
        )}

        <button className="criar-botao">Próximo</button>
      </div>
    </div>
  )
}
