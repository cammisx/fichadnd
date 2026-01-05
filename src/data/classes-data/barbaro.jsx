const barbaro = {
  id: "barbaro",
  nome: "Bárbaro",

  visaoGeral: {
    descricao: [
      {
        titulo: null,
        texto: "Um gigante musculoso coberto por peles de animais, rindo ao avançar na direção de um grupo de soldados humanos que ousaram invadir sua terra natal. Um drow nu, coberto apenas por tatuagens de batalha, rangendo os dentes enquanto desvia de uma saraivada de flechas e arremessa uma lança de volta no inimigo. Uma mulher meio-orc, em transe, correndo por uma planície devastada pela guerra, seus olhos vermelhos, suas tranças soltas, o sangue dos inimigos escorrendo de sua lâmina. Fúria e instinto definem o bárbaro, um guerreiro indomável que usa sua força primal como arma."
      },
      {
        titulo: "INSTINTO PRIMITIVO",
        texto: "Os bárbaros se sentem mais vivos no caos do combate. Eles são impulsionados por instinto, emoção e raiva crua. Eles confiam mais em seus sentidos do que em táticas elaboradas ou planejamento cuidadoso."
      },
      {
        titulo: "UMA VIDA DE PERIGO",
        texto: "Nem todos os bárbaros vêm de terras selvagens, mas todos carregam dentro de si uma força indomável. Muitos vêm de tribos distantes da civilização, enquanto outros descobriram sua fúria em campos de batalha, arenas ou em tragédias pessoais."
      }
    ]
  },

criacao: {
  secoes: [
    {
      titulo: null,
      texto: (
        <>
          <p>
            Quando for criar um personagem bárbaro, pense em de onde o seu personagem veio e sobre o seu lugar no mundo.
            Fale com o Mestre sobre uma origem apropriada para o seu bárbaro. Você ter vindo de uma terra distante fará de
            você um forasteiro na área da campanha? Ou a campanha é centrada numa fronteira áspera de onde os bárbaros são comuns?
          </p>
          <p>
            O que fez você seguir a vida de aventureiro? Você foi atraído às terras civilizadas pelas promessas de riqueza?
            Você uniu forças com os soldados dessas terras para enfrentar uma ameaça em comum? Monstros ou uma horda invasora
            fizeram você abandonar sua terra natal, tornando você um refugiado sem origem? Talvez você seja um prisioneiro de guerra,
            trazido acorrentado para as terras “civilizadas” e só agora foi capaz de ganhar sua liberdade. Ou você teve que abandonar
            seu povo por causa de um crime que cometeu, um tabu que você violou ou um golpe que depôs você de uma posição de autoridade.
          </p>
        </>
      )
    },

  
    {
      titulo: "PONTOS DE VIDA",
      texto: (
        <>
          <p><strong>Dado de Vida:</strong> 1d12 por nível de bárbaro</p>
          <p><strong>Pontos de Vida no 1° Nível:</strong> 12 + seu modificador de Constituição</p>
          <p><strong>Pontos de Vida nos Níveis Seguintes:</strong> 1d12 (ou 7) + seu modificador de Constituição por nível de bárbaro após o 1°</p>
        </>
      )
    },
    {
      titulo: "PROFICIÊNCIAS",
      texto: (
        <>
          <p><strong>Armaduras:</strong> Armaduras leves, armaduras médias e escudos</p>
          <p><strong>Armas:</strong> Armas simples, armas marciais</p>
          <p><strong>Ferramentas:</strong> Nenhuma</p>
          <p><strong>Testes de Resistência:</strong> Força, Constituição</p>
          <p><strong>Perícias:</strong> Escolha duas dentre:</p><p> Adestrar Animais, Atletismo, Intimidação, Natureza, Percepção e Sobrevivência</p>
        </>
      )
    },
    {
      titulo: "EQUIPAMENTOS",
      texto: (
        <>
          <p><strong>Você começa com os seguintes equipamentos, além do equipamento concedido pelo seu antecedente:</strong></p>
          <ul>
            <p>Um machado grande ou qualquer arma marcial corpo-a-corpo</p>
            <p>Dois machados de mão ou qualquer arma simples</p>
            <p>Um pacote de aventureiro e quatro azagaias</p>
          </ul>
        </>
      )
    }
  ]
},



  habilidades: [
    { nome: "Fúria", descricao: "Em batalha, você luta com ferocidade primal. Em seu turno, você pode entrar em fúria como uma ação bônus. Enquanto estiver em fúria, você recebe vantagem em testes de Força e salvaguardas de Força, bônus nas jogadas de dano corpo a corpo baseadas em Força e resistência a dano contundente, perfurante e cortante." },
    { nome: "Defesa sem Armadura", descricao: "Enquanto não estiver vestindo nenhuma armadura, sua Classe de Armadura é igual a 10 + seu modificador de Destreza + seu modificador de Constituição. Você pode usar um escudo e ainda ganhar esse benefício." },
    { nome: "Ataque Descuidado", descricao: "A partir do 2º nível, você pode decidir atacar de forma imprudente. Você ganha vantagem nas jogadas de ataque corpo a corpo baseadas em Força durante este turno, mas ataques contra você têm vantagem até seu próximo turno." },
    { nome: "Sentido de Perigo", descricao: "A partir do 2º nível, você tem vantagem em testes de resistência de Destreza contra efeitos que você possa ver, como armadilhas e magias." },
    { nome: "Caminho Primitivo", descricao: "No 3º nível, você escolhe um caminho que molda a natureza de sua fúria, como o Caminho do Furioso ou o Caminho do Guerreiro Totêmico." },
    { nome: "Incremento no Valor de Habilidade", descricao: "Quando você atinge o 4º nível e novamente no 8º, 12º, 16º e 19º nível, você pode aumentar um valor de habilidade em 2, ou dois valores de habilidade em 1." },
    { nome: "Ataque Extra", descricao: "A partir do 5º nível, você pode atacar duas vezes, ao invés de uma, sempre que realizar a ação de Ataque em seu turno." },
    { nome: "Movimento Rápido", descricao: "A partir do 5º nível, seu deslocamento aumenta em 3 metros enquanto você não estiver vestindo armadura pesada." },
    { nome: "Instinto Selvagem", descricao: "A partir do 7º nível, você tem vantagem em jogadas de iniciativa. Além disso, se você estiver surpreso no início do combate e não estiver incapacitado, você pode agir normalmente em seu primeiro turno." },
    { nome: "Crítico Brutal", descricao: "A partir do 9º nível, você pode rolar um dado adicional de dano ao determinar o dano extra de um acerto crítico." },
    { nome: "Fúria Implacável", descricao: "A partir do 11º nível, se você cair a 0 pontos de vida enquanto estiver em fúria e não morrer imediatamente, você pode fazer um teste de Constituição CD 10 para cair a 1 ponto de vida ao invés disso." },
    { nome: "Fúria Persistente", descricao: "A partir do 15º nível, sua fúria é tão feroz que ela termina prematuramente apenas se você cair inconsciente ou se escolher encerrá-la." },
    { nome: "Força Indomável", descricao: "A partir do 18º nível, se o total de um teste de Força for menor que seu valor de Força, você pode usar esse valor no lugar do total." },
    { nome: "Campeão Primitivo", descricao: "No 20º nível, seus valores de Força e Constituição aumentam em 4. Seu máximo para esses valores agora é 24." }
  ],

  subclasses: [
    {
      nome: "Caminho do Furioso",
      descricao: "Para alguns bárbaros, a fúria é um meio para um fim — aquele de se tornarem mais fortes e mais mortais.",
      habilidades: [
        { nome: "Frenesi", descricao: "Quando você entra em fúria, você pode optar por entrar em frenesi. Enquanto estiver em frenesi, você pode realizar um ataque corpo a corpo como uma ação bônus em cada um de seus turnos." },
        { nome: "Fúria Inconsciente", descricao: "A partir do 6º nível, você não pode ser enfeitiçado ou amedrontado enquanto estiver em fúria." },
        { nome: "Presença Intimidante", descricao: "A partir do 10º nível, você pode usar sua ação para amedrontar alguém." },
        { nome: "Retaliação", descricao: "A partir do 14º nível, quando você sofrer dano de uma criatura dentro de 1,5 metro, você pode usar sua reação para fazer um ataque corpo a corpo contra essa criatura." }
      ]
    },
    {
      nome: "Caminho do Guerreiro Totêmico",
      descricao: "O Caminho do Guerreiro Totêmico é uma jornada espiritual, à medida que o bárbaro aceita um espírito animal como guia, protetor e inspiração.",
      habilidades: [
        { nome: "Conselheiro Espiritual", descricao: "A partir do 3º nível, você pode conjurar a magia Falar com Animais como um ritual." },
        { nome: "Totem Espiritual", descricao: "A partir do 3º nível, você ganha um benefício mágico baseado no animal totêmico de sua escolha." },
        { nome: "Aspecto da Besta", descricao: "A partir do 6º nível, você ganha um benefício mágico adicional baseado em seu animal totêmico." },
        { nome: "Andarilho Espiritual", descricao: "A partir do 10º nível, você pode conjurar a magia Comunhão com a Natureza como um ritual." },
        { nome: "Sintonia Totêmica", descricao: "A partir do 14º nível, você ganha um poderoso benefício mágico baseado em seu animal totêmico." }
      ]
    }
  ]
}

export default barbaro
