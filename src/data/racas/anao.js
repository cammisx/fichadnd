const anao = {
  id: "anao",
  nome: "Anão",

  visaoGeral: {
    quote: `"ESTÁ ATRASADO, ELFO!", O drow ouviu o tom áspero de uma voz familiar. Bruenor Martelo de Batalha subiu pelas costas do adversário morto, desconsiderando o fato de que o pesado monstro jazia sobre seu amigo élfico. Apesar desse novo desconforto, o nariz grande, pontudo e várias vezes quebrado do anão – bem como sua barba vermelha, raiada de branco, mas ainda cor de fogo – surgiu como uma visão agradável para Drizzt. "Eu sabia que ia te encontrar encrencado se saísse para te procurar!" – R.A. Salvatore, A Estilha de Cristal`,

    descricao: [
      {
        titulo: null,
        texto: `Reinos ricos de antiga grandeza, salões esculpidos nas raízes das montanhas, o eco de picaretas e martelos nas minas profundas e nas forjas ardentes, um compromisso com o clã e a tradição, e um ódio impetuoso contra goblins e orcs – essas linhas comuns unem todos os anões.`
      },
      {
        titulo: "BAIXOS E ROBUSTOS",
        texto: `Audazes e resistentes, os anões são conhecidos como hábeis guerreiros, mineradores e trabalhadores em pedra e metal. Embora tenham menos de 1,50 metro de altura, os anões são tão largos e compactos que podem pesar tanto quanto um humano 60 centímetros mais alto. Sua coragem e resistência compete facilmente com qualquer povo mais alto. A pele dos anões varia do marrom escuro a um matiz mais pálido, tingido de vermelho, mas os tons mais comuns são o castanho claro ou bronzeado, como certos tons terrosos. O cabelo é longo, mas de estilo simples, geralmente negro, cinzento ou castanho, embora anões mais pálidos frequentemente possuem cabelos ruivos. Anões machos valorizam altamente suas barbas e preparam-nas com cuidado.`
      },
      {
        titulo: "DIFÍCEIS DE CONFIAR",
        texto: `Anões convivem razoavelmente bem com a maioria das outras raças. "A diferença entre um conhecido e um amigo é cerca de cem anos", é um ditado anão que pode ser uma hipérbole, mas certamente demonstra o quanto é difícil ganhar a confiança de um anão para o membro de uma raça de vida curta, como os humanos. Elfos. "Não é sensato depender dos elfos. É difícil prever o que um elfo vai fazer a seguir. Quando o martelo encontra a cabeça do orc, eles podem tanto começar a cantar ou sacar uma espada, ninguém sabe. Eles são volúveis e fúteis. Duas coisas a serem ditas sobre os elfos: eles não têm muitos ferreiros, mas os que têm fazem muito bem o trabalho. E quando orcs ou goblins avançam pelas montanhas, é bom ter um elfo ao seu lado. Talvez não tão bom quanto um anão, mas sem dúvida eles odeiam os orcs tanto quanto nós." Halflings. "Claro, eles são gente boa. Mas me mostre um herói halfling. Um império, um exército triunfante. Até mesmo um tesouro conquistado pelas mãos de um halfling. Nada. Como você pode levá-los a sério?" Humanos. "Você começa a conhecer uma humana, e então ela já está em seu leito de morte. Se você tiver sorte, ela terá descendentes – talvez uma filha ou neta – que têm mãos e coração tão bons quanto o dela. Só assim você pode fazer um amigo humano. E assisti-los partir! Se eles colocam o coração em algo, eles vão atrás, seja o tesouro de um dragão ou o trono de um império. Essa dedicação é digna de admiração, mesmo que ela os ponha em apuros com muita frequência."`
      }
    ]
  },

  culturaSociedade: [
    {
      titulo: "LONGA MEMÓRIA, LONGO RANCOR",
      texto: `Anões podem viver mais de 400 anos, então os anões mais antigos ainda vivos muitas vezes lembram-se de um mundo muito diferente. Por exemplo, alguns dos anões mais velhos que vivem na Cidadela de Felbarr lembram-se do dia, há mais de três séculos, que os orcs conquistaram sua fortaleza, forçando-os a um exílio que durou mais de 250 anos. Essa longevidade concede aos anões uma perspectiva sobre o mundo que falta às raças de menor longevidade, como os humanos e os halflings.`
    },
    {
      titulo: "CLÃS E REINOS",
      texto: `Os reinos anões estendem-se pelas profundezas das montanhas, onde eles mineram gemas e metais preciosos, e forjam itens admiráveis. Eles amam a beleza e a arte dos metais preciosos e das joias finas e, em alguns anões, esse amor transforma-se em avareza.`
    },
    {
      titulo: "DEUSES, OURO E CLÃ",
      texto: `Anões que seguem uma vida de aventuras podem ser motivados pelo desejo por tesouros, por inspiração divina ou pela honra do clã.`
    },
    {
      titulo: "NOMES ANÕES",
      texto: `Nomes masculinos: Adrik, Alberich, Baern, Barendd, Brottor, Bruenor, Dain, Darrak, Delg, Eberk, Einkil, Fargrim, Flint, Gardain, Harbek, Kildrak, Morgran, Orsik, Oskar, Rangrim, Rurik, Taklinn, Thoradin, Thorin, Tordek, Traubon, Travok, Ulfgar, Veit, Vondal.

Nomes femininos: Amber, Artin, Audhild, Bardryn, Dagnal, Diesa, Eldeth, Falkrunn, Gunnloda, Gurdis, Helja, Hlin, Kathra, Kristryd, Ilde, Liftrasa, Mardred, Riswynn, Sannl, Torbera, Torgga, Vistra.

Nomes de clãs: Balderk, Battlehammer, Brawnanvil, Dankil, Fireforge, Frostbeard, Gorunn, Holderhek, Ironfist, Loderr, Lutgehr, Rumnaheim, Strakeln, Torunn, Ungart.`
    }
  ],
    criacaoAnão: {
    texto: `Um personagem anão possui uma variedade de habilidades inatas, parte integrante da natureza dos anões.

Aumento no Valor de Habilidade. Seu valor de Constituição aumenta em 2.

Idade. Anões tornam-se maduros na mesma proporção que os humanos, mas são considerados jovens até atingirem a idade de 50 anos. Em média, eles vivem 350 anos.

Tendência. A maioria dos anões é leal, pois acreditam firmemente nos benefícios de uma sociedade bem organizada. Eles tendem para o bem, com um forte senso de honestidade e uma crença de que todos merecem compartilhar os benefícios de uma ordem social justa.

Tamanho. Anões estão entre 1,20 e 1,50 metro de altura e pesam cerca de 75 kg. Seu tamanho é Médio.

Deslocamento. Seu deslocamento base de caminhada é de 7,5 metros. Seu deslocamento não é reduzido quando estiver usando armadura pesada.

Visão no Escuro. Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.

Resiliência Anã. Você possui vantagem em testes de resistência contra venenos e resistência contra dano de veneno (explicado no capítulo 9).

Treinamento Anão em Combate. Você tem proficiência com machados de batalha, machadinhas, martelos leves e martelos de guerra.

Proficiência com Ferramentas. Você tem proficiência em uma ferramenta de artesão à sua escolha entre: ferramentas de ferreiro, suprimentos de cervejeiro ou ferramentas de pedreiro.

Especialização em Rochas. Sempre que você realizar um teste de Inteligência (História) relacionado à origem de um trabalho em pedra, você é considerado proficiente na perícia História e adiciona o dobro do seu bônus de proficiência ao teste, ao invés do seu bônus de proficiência normal.

Idiomas. Você pode falar, ler e escrever Comum e Anão. O idioma Anão é repleto de consoantes duras e sons guturais, e essa característica influencia, como um sotaque, qualquer outro idioma que o anão falar.

Sub-raça. Existem duas sub-raças principais de anões nos mundos de D&D: anões da colina e anões da montanha. Você deve escolher uma dessas sub-raças.

ANÃO DA COLINA
Como um anão da colina, você tem sentidos aguçados, maior intuição e notável resiliência. Os anões dourados de Faerûn, que vivem em seu poderoso reino ao sul do continente, são anões da colina, assim como os exilados Neidar e os depreciáveis Klar de Krynn, no cenário de Dragonlance.

Aumento no Valor de Habilidade. Seu valor de Sabedoria aumenta em 1.

Tenacidade Anã. Seu máximo de pontos de vida aumentam em 1, e cada vez que o anão da colina sobe um nível, ele recebe 1 ponto de vida adicional.

ANÃO DA MONTANHA
Como um anão da montanha, você é forte e resistente, acostumados a uma vida difícil em terrenos difíceis. Você, provavelmente tem a descendência daqueles mais altos (para um anão) e tende a possuir uma coloração mais clara. Os anões do escudo do norte de Faerûn, bem como o clã governante Hylar e os clãs nobres Daewar de Dragonlance, são anões da montanha.

Aumento no Valor de Habilidade. Seu valor de Força aumenta em 2.

Treinamento Anão com Armaduras. Você adquire proficiência em armaduras leves e médias.`
  },

}

export default anao
