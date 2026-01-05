import { useState } from "react"

export default function ClassLayout({ classe }) {

  if (!classe) return null

  const [aba, setAba] = useState("visao")
  const [fade, setFade] = useState(true)

  const visao = classe.visaoGeral || {}
  const criacao = classe.criacao || {}
  const equipamentos = classe.equipamentos || []
  const habilidades = classe.habilidades || []
  const subclasses = classe.subclasses || []

  function trocarAba(nova) {
    if (nova === aba) return
    setFade(false)
    setTimeout(() => {
      setAba(nova)
      setFade(true)
    }, 420)
  }

  return (
    <div className="grimorio-raca">

    <h1 className="titulo-raca-grimorio">{classe.nome}</h1>


      <div className="abas-raca">
        <div className={`aba-item ${aba === "visao" ? "ativa" : ""}`} onClick={() => trocarAba("visao")}>Visão Geral</div>
        <div className={`aba-item ${aba === "criacao" ? "ativa" : ""}`} onClick={() => trocarAba("criacao")}>Criando um {classe.nome}</div>
      
        <div className={`aba-item ${aba === "habilidades" ? "ativa" : ""}`} onClick={() => trocarAba("habilidades")}>Habilidades</div>
        <div className={`aba-item ${aba === "subclasses" ? "ativa" : ""}`} onClick={() => trocarAba("subclasses")}>Subclasses</div>
      </div>

      <div className={`conteudo-aba ${fade ? "fade-in" : "fade-out"}`}>

        {/* VISÃO */}
        {aba === "visao" && (
          <div className="secao-raca">
            {visao.descricao?.map((bloco, i) => (
              <div key={i} className="bloco-texto">
                {bloco.titulo && (
                  <>
                    <div className="separador-grimorio">
                      <img src="https://i.imgur.com/XKUwqV2.png" alt="" className="separador-img" />
                    </div>
                    <h4 className="subtitulo-grimorio">{bloco.titulo}</h4>
                  </>
                )}
                <div className="paragrafo-grimorio">
                  {bloco.texto}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CRIAÇÃO */}
{aba === "criacao" && (
  <div className="secao-raca">
  {criacao.secoes?.map((bloco, i) => (
  <div key={i} className="bloco-texto">
    {bloco.titulo && i > 0 && (
      <div className="separador-grimorio">
        <img src="https://i.imgur.com/XKUwqV2.png" alt="" className="separador-img" />
      </div>
    )}

    {bloco.titulo && (
      <h4 className="subtitulo-grimorio">{bloco.titulo}</h4>
    )}

    <div className="paragrafo-grimorio">
      {bloco.texto}
    </div>
  </div>
))}

  </div>
)}


   

        {/* HABILIDADES */}
       {aba === "habilidades" && (
  <div className="secao-raca">
    {habilidades.map((h, i) => (
      <div key={i} className="bloco-texto">
        {i > 0 && (
          <div className="separador-grimorio">
            <img src="https://i.imgur.com/XKUwqV2.png" alt="" className="separador-img" />
          </div>
        )}

        <h4 className="subtitulo-grimorio">{h.nome}</h4>

        <div className="paragrafo-grimorio">
          {h.descricao}
        </div>
      </div>
    ))}
  </div>
)}


   {/* SUBCLASSES */}
{aba === "subclasses" && (
  <div className="secao-raca">
    {subclasses.map((s, i) => (
      <div key={i} className="bloco-texto">

        {i > 0 && (
          <div className="separador-grimorio">
            <img src="https://i.imgur.com/XKUwqV2.png" alt="" className="separador-img" />
          </div>
        )}

        <h5 className="subtitulo-grimorio">{s.nome}</h5>

        <div className="paragrafo-grimorio">
          {s.descricao}
        </div>

        {s.habilidades.map((h, j) => (
          <div key={j} className="paragrafo-grimorio">
            <strong>{h.nome}</strong> — {h.descricao}
          </div>
        ))}

      </div>
    ))}
  </div>
)}



      </div>
    </div>
  )
}
