import { useState } from "react"
import { racas } from "../../data/racas/racas"

export default function Anao() {
  const entry = racas.find(r => r.id === "anao")
  const raca = entry?.ref || entry

  const [aba, setAba] = useState("visao")
  const [fade, setFade] = useState(true)

  function trocarAba(nova) {
    if (nova === aba) return
    setFade(false)
    setTimeout(() => {
      setAba(nova)
      setFade(true)
    }, 160)
  }

  return (
    <div className="grimorio-raca">

      <div className="abas-raca">
        <div className={`aba-item ${aba === "visao" ? "ativa" : ""}`} onClick={() => trocarAba("visao")}>Visão Geral</div>
        <div className={`aba-item ${aba === "cultura" ? "ativa" : ""}`} onClick={() => trocarAba("cultura")}>Cultura & Sociedade</div>
        <div className={`aba-item ${aba === "criacao" ? "ativa" : ""}`} onClick={() => trocarAba("criacao")}>Criando um Anão</div>
      </div>

      <div className={`conteudo-aba ${fade ? "fade-in" : "fade-out"}`}>

        {/* ================= VISÃO GERAL ================= */}

        {aba === "visao" && (
          <div className="secao-raca">

            <blockquote className="quote-raca">
              {raca.visaoGeral.quote}
            </blockquote>

            {raca.visaoGeral.descricao.map((bloco, i) => (
              <div key={i} className="bloco-texto">

                {bloco.titulo && (
                  <>
                    <div className="separador-grimorio"><span>◆</span></div>
                    <h4 className="subtitulo-grimorio">{bloco.titulo}</h4>
                  </>
                )}

                <p>{bloco.texto}</p>

              </div>
            ))}

          </div>
        )}

        {/* ================= CULTURA ================= */}

        {aba === "cultura" && (
          <div className="secao-raca">

            {raca.culturaSociedade.map((bloco, i) => (
              <div key={i} className="bloco-texto">

                <div className="separador-grimorio"><span>◆</span></div>
                <h4 className="subtitulo-grimorio">{bloco.titulo}</h4>

                <p>{bloco.texto}</p>

              </div>
            ))}

          </div>
        )}

        {/* ================= CRIAÇÃO ================= */}

        {aba === "criacao" && (
          <div className="secao-raca criacao-livro">

            <div className="bloco-livro">
              <div className="separador-grimorio"><span>◆</span></div>

              <h4>Traços Raciais</h4>
              <ul className="lista-tracos">
                <li><strong>Modificadores de atributo</strong></li>
                <li><strong>Deslocamento</strong></li>
                <li><strong>Tamanho</strong></li>
                <li><strong>Idiomas</strong></li>
              </ul>
            </div>

            <div className="bloco-livro">
              <div className="separador-grimorio"><span>◆</span></div>

              <h4>Habilidades de Raça</h4>

              <div className="habilidade">
                <strong>Nome da habilidade</strong> — descrição da habilidade
              </div>
            </div>

            <div className="bloco-livro">
              <div className="separador-grimorio"><span>◆</span></div>

              <h4>Sub-Raças</h4>

              <div className="subraca">
                <div className="nome-subraca">Nome da sub-raça</div>
                <div><strong>Descrição:</strong> descrição da sub-raça</div>
                <div><strong>Modificadores de atributo:</strong> …</div>
                <div><strong>Habilidades:</strong> …</div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
