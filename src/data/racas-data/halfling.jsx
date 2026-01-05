const halfling = {
  id: "halfling",
  nome: "Halfling",
  tituloCriacao: "Criando um Halfling",

  visaoGeral: {
    quote: `"Grandes feitos nascem de pés pequenos."`,
    descricao: [
      { titulo: null, texto: "Halflings são curiosos, leves e incrivelmente sortudos." }
    ]
  },

  culturaSociedade: [
    { titulo: "VIDA SIMPLES", texto: "Amam conforto, comida e boas histórias." }
  ],

  criacao: {
    tracos: {
      atributos: "+2 Destreza",
      deslocamento: "7,5 m",
      tamanho: "Pequeno",
      idiomas: "Comum, Halfling"
    },
    habilidades: [
      { nome: "Sortudo", descricao: "Pode rerrolar 1s." }
    ],
    subracas: [
      { nome: "Pés-Leves", descricao: "Ágeis e espertos.", modificadores: "+1 Carisma", habilidades: "Furtividade Natural" }
    ]
  }
}

export default halfling
