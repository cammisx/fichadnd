const meioElfo = {
  id: "meio_elfo",
  nome: "Meio-Elfo",
  tituloCriacao: "Criando um Meio-Elfo",

  visaoGeral: {
    quote: `"Pertencer a dois mundos é minha força."`,
    descricao: [
      { titulo: null, texto: "Misturam graça élfica e versatilidade humana." }
    ]
  },

  culturaSociedade: [
    { titulo: "DUAS HERANÇAS", texto: "Vivem entre culturas." }
  ],

  criacao: {
    tracos: {
      atributos: "+2 Carisma, +1 em dois",
      deslocamento: "9 m",
      tamanho: "Médio",
      idiomas: "Comum, Élfico + 1"
    },
    habilidades: [
      { nome: "Versatilidade em Perícias", descricao: "Escolhe duas perícias." }
    ],
    subracas: [
      { nome: "Padrão", descricao: "Equilíbrio.", modificadores: "Variável", habilidades: "Flexibilidade" }
    ]
  }
}

export default meioElfo
