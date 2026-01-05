const draconato = {
  id: "draconato",
  nome: "Draconato",
  tituloCriacao: "Criando um Draconato",

  visaoGeral: {
    quote: `"Somos breves, mas intensos."`,
    descricao: [
      { titulo: null, texto: "Humanos são adaptáveis e ambiciosos." }
    ]
  },

  culturaSociedade: [
    { titulo: "IMPÉRIOS", texto: "Constroem reinos e mudam o mundo." }
  ],

  criacao: {
    tracos: {
      atributos: "+1 em todos os atributos",
      deslocamento: "9 m",
      tamanho: "Médio",
      idiomas: "Comum + 1"
    },
    habilidades: [
      { nome: "Versatilidade", descricao: "Adaptam-se a qualquer caminho." }
    ],
    subracas: [
      { nome: "Variante", descricao: "Escolhas personalizadas.", modificadores: "Talento", habilidades: "Perícia extra" }
    ]
  }
}

export default draconato
