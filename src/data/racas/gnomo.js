const draconato = {
  id: "draconato",
  nome: "Draconato",
  tituloCriacao: "Criando um Draconato",

  visaoGeral: {
    quote: `"O sangue do dragão arde em meu peito."`,
    descricao: [
      { titulo: null, texto: "Orgulhosos, fortes e honrados." }
    ]
  },

  culturaSociedade: [
    { titulo: "HONRA", texto: "Vivem por códigos rígidos." }
  ],

  criacao: {
    tracos: {
      atributos: "+2 Força, +1 Carisma",
      deslocamento: "9 m",
      tamanho: "Médio",
      idiomas: "Comum, Dracônico"
    },
    habilidades: [
      { nome: "Sopro Dracônico", descricao: "Ataque elemental." }
    ],
    subracas: [
      { nome: "Dragão Vermelho", descricao: "Fogo.", modificadores: "Resistência ao Fogo", habilidades: "Sopro de Fogo" }
    ]
  }
}

export default draconato
