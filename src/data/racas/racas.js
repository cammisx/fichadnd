export const racas = [
  {
    id: "anao",
    nome: "Anão",
    deslocamento: 7.5,
    tamanho: "médio",
    idiomas: ["Comum", "Anão"],
    modificadores: {
      for: 0,
      des: 0,
      con: 2,
      int: 0,
      sab: 0,
      car: 0
    },
    subracas: ["anao_colina", "anao_montanha"]
  },

  {
    id: "elfo",
    nome: "Elfo",
    deslocamento: 9,
    tamanho: "médio",
    idiomas: ["Comum", "Élfico"],
    modificadores: {
      for: 0,
      des: 2,
      con: 0,
      int: 0,
      sab: 0,
      car: 0
    },
    subracas: ["alto_elfo", "elfo_floresta", "elfo_negro"]
  },

  {
    id: "halfling",
    nome: "Halfling",
    deslocamento: 7.5,
    tamanho: "pequeno",
    idiomas: ["Comum", "Halfling"],
    modificadores: {
      for: 0,
      des: 2,
      con: 0,
      int: 0,
      sab: 0,
      car: 0
    },
    subracas: ["halfling_pes_leves", "halfling_forte"]
  },

  {
    id: "humano",
    nome: "Humano",
    deslocamento: 9,
    tamanho: "médio",
    idiomas: ["Comum"],
    modificadores: {
      for: 1,
      des: 1,
      con: 1,
      int: 1,
      sab: 1,
      car: 1
    },
    subracas: []
  },

  {
    id: "draconato",
    nome: "Draconato",
    deslocamento: 9,
    tamanho: "médio",
    idiomas: ["Comum", "Dracônico"],
    modificadores: {
      for: 2,
      des: 0,
      con: 0,
      int: 0,
      sab: 0,
      car: 1
    },
    subracas: []
  },

  {
    id: "gnomo",
    nome: "Gnomo",
    deslocamento: 7.5,
    tamanho: "pequeno",
    idiomas: ["Comum", "Gnômico"],
    modificadores: {
      for: 0,
      des: 0,
      con: 0,
      int: 2,
      sab: 0,
      car: 0
    },
    subracas: ["gnomo_floresta", "gnomo_rocha"]
  },

  {
    id: "meio_elfo",
    nome: "Meio-Elfo",
    deslocamento: 9,
    tamanho: "médio",
    idiomas: ["Comum", "Élfico"],
    modificadores: {
      for: 0,
      des: 0,
      con: 0,
      int: 0,
      sab: 0,
      car: 2
    },
    subracas: []
  },

  {
    id: "meio_orc",
    nome: "Meio-Orc",
    deslocamento: 9,
    tamanho: "médio",
    idiomas: ["Comum", "Orc"],
    modificadores: {
      for: 2,
      des: 0,
      con: 1,
      int: 0,
      sab: 0,
      car: 0
    },
    subracas: []
  },

  {
    id: "tiefling",
    nome: "Tiefling",
    deslocamento: 9,
    tamanho: "médio",
    idiomas: ["Comum", "Infernal"],
    modificadores: {
      for: 0,
      des: 0,
      con: 0,
      int: 1,
      sab: 0,
      car: 2
    },
    subracas: []
  }
]
