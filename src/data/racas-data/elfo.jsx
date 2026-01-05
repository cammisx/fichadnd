const elfo = {
  id: "elfo",
  nome: "Elfo",
  tituloCriacao: "Criando um Elfo",

  visaoGeral: {
    quote: `"As estrelas ainda lembram meu nome."`,
    descricao: [
      { titulo: null, texto: "Elfos são graciosos, longevos e ligados à magia." },
      { titulo: "GRAÇA IMORTAL", texto: "Cada gesto é arte, cada palavra é memória." },
      { titulo: "SANGUE ANTIGO", texto: "Magia corre em suas veias." }
    ]
  },

  culturaSociedade: [
    { titulo: "REINOS ANCESTRAIS", texto: "Florestas e cidades eternas." },
    { titulo: "TRADIÇÃO E ARTE", texto: "Música e poesia moldam sua história." },
    { titulo: "CAMINHOS DO DESTINO", texto: "Cada elfo segue sua própria jornada." }
  ],

  criacao: {
    tracos: {
      atributos: "+2 Destreza",
      deslocamento: "9 m",
      tamanho: "Médio",
      idiomas: "Comum, Élfico"
    },
    habilidades: [
      { nome: "Visão no Escuro", descricao: "Enxerga na penumbra." },
      { nome: "Ancestral Feérico", descricao: "Vantagem contra encantamento." }
    ],
    subracas: [
      { nome: "Alto Elfo", descricao: "Mestres da magia.", modificadores: "+1 Inteligência", habilidades: "Truque extra" },
      { nome: "Elfo da Floresta", descricao: "Ágeis e furtivos.", modificadores: "+1 Sabedoria", habilidades: "Passos Leves" },
      { nome: "Drow", descricao: "Sombras e mistério.", modificadores: "+1 Carisma", habilidades: "Magia das Trevas" }
    ]
  }
}

export default elfo
