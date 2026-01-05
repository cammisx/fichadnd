const tiefling = {
  id: "tiefling",
  nome: "Tiefling",
  tituloCriacao: "Criando um Tiefling",

  visaoGeral: {
    quote: `"O inferno nunca me abandonou."`,
    descricao: [
      { titulo: null, texto: "Marcados por herança infernal." }
    ]
  },

  culturaSociedade: [
    { titulo: "ESTIGMA", texto: "Vivem à margem." }
  ],

  criacao: {
    tracos: {
      atributos: "+2 Carisma, +1 Inteligência",
      deslocamento: "9 m",
      tamanho: "Médio",
      idiomas: "Comum, Infernal"
    },
    habilidades: [
      { nome: "Resistência Infernal", descricao: "Resistência ao fogo." }
    ],
    subracas: [
      { nome: "Infernal", descricao: "Sangue demoníaco.", modificadores: "Fogo", habilidades: "Magias infernais" }
    ]
  }
}

export default tiefling
