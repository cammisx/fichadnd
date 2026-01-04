const meioOrc = {
  id: "meio_orc",
  nome: "Meio-Orc",
  tituloCriacao: "Criando um Meio-Orc",

  visaoGeral: {
    quote: `"Minha fúria é minha herança."`,
    descricao: [
      { titulo: null, texto: "Fortes e temidos." }
    ]
  },

  culturaSociedade: [
    { titulo: "SOBREVIVÊNCIA", texto: "Vivem em ambientes hostis." }
  ],

  criacao: {
    tracos: {
      atributos: "+2 Força, +1 Constituição",
      deslocamento: "9 m",
      tamanho: "Médio",
      idiomas: "Comum, Orc"
    },
    habilidades: [
      { nome: "Resistência Implacável", descricao: "Evita a morte." }
    ],
    subracas: [
      { nome: "Padrão", descricao: "Brutais.", modificadores: "Força", habilidades: "Ataque Selvagem" }
    ]
  }
}

export default meioOrc
