import { useState } from "react"

export default function RacaLayout({ raca }) {

  const [aba, setAba] = useState("visao")
  const [fade, setFade] = useState(true)

  const criacao = raca.criacao

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

      <div className="abas-raca">
        <div className={`aba-item ${aba === "visao" ? "ativa" : ""}`} onClick={() => trocarAba("visao")}>Visão Geral</div>

<div className={`aba-item ${aba === "criacao" ? "ativa" : ""}`} onClick={() => trocarAba("criacao")}>
  {raca.tituloCriacao}
</div>

<div className={`aba-item ${aba === "habilidades" ? "ativa" : ""}`} onClick={() => trocarAba("habilidades")}>
  Habilidades
</div>

<div className={`aba-item ${aba === "subracas" ? "ativa" : ""}`} onClick={() => trocarAba("subracas")}>
  Sub-raças
</div>



      </div>

      <div className={`conteudo-aba ${fade ? "fade-in" : "fade-out"}`}>

        {/* VISÃO */}
        {aba === "visao" && (
          <div className="secao-raca">
            <blockquote className="quote-raca">
  {raca.visaoGeral.quote.split("\n").map((linha, i, arr) => {
    const ultima = i === arr.length - 1
    return (
      <div key={i} className={ultima ? "linha-autor-quote" : ""}>
        {linha}
      </div>
    )
  })}
</blockquote>



            {raca.visaoGeral.descricao.map((bloco, i) => (
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
          <div className="secao-raca criacao-livro">
            <div className="bloco-livro">
              <h4>TRAÇOS RACIAIS</h4>
              <ul className="lista-tracos">
                <li><strong>Modificadores:</strong> {criacao.tracos.atributos}</li>
                <li><strong>Deslocamento:</strong> {criacao.tracos.deslocamento}</li>
                <li><strong>Tamanho:</strong> {criacao.tracos.tamanho}</li>
                <li><strong>Idiomas:</strong> {criacao.tracos.idiomas}</li>
              </ul>
            </div>

            <div className="bloco-livro">
              <div className="separador-grimorio">
                <img src="https://i.imgur.com/XKUwqV2.png" alt="" className="separador-img" />
              </div>
              {raca.culturaSociedade.map((bloco, i) => (
  <div key={i} className="bloco-texto">
    {i > 0 && (
      <div className="separador-grimorio">
        <img src="https://i.imgur.com/XKUwqV2.png" alt="" className="separador-img" />
      </div>
    )}
    <h4 className="subtitulo-grimorio">{bloco.titulo}</h4>
    <p>{bloco.texto}</p>
  </div>
))}
            

          </div>
        

      </div>
     )}
     
      {aba === "habilidades" && (
  <div className="secao-raca">
    {criacao.habilidades.map((h, i) => (
      <div key={i} className="bloco-texto">
        <h4 className="subtitulo-grimorio">{h.nome}</h4>
        <p>{h.descricao}</p>
      </div>
    ))}
  </div>
)}
{aba === "subracas" && (
  <div className="secao-raca">
    {criacao.subracas.map((s, i) => (
      <div key={i} className="bloco-texto">
        <h4 className="subtitulo-grimorio">{s.nome}</h4>
        <p>{s.descricao}</p>
        <p><strong>Modificadores:</strong> {s.modificadores}</p>
        <p><strong>Habilidades:</strong> {s.habilidades}</p>
      </div>
    ))}
  </div>
)}
</div>
    </div>
  )
}
