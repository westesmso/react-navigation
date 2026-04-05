import GameScreen from '../components/GameScreen';

export default function TelaF() {
  const palette = {
    background: '#E9F6D8',
    card: '#F5FFE8',
    border: '#5A8F3A',
    title: '#2F6C2E',
    subtitle: '#567C3A',
    text: '#253B1E',
    imageBg: '#D6EDBE',
    imageText: '#2E5A28',
  };

  const paragraphs = [
    'The Legend of Zelda: Oracle of Seasons leva Link para Holodrum, uma regiao em que o ciclo das estacoes foi desestabilizado. A historia gira em torno da dancarina Din e do general Onox, que tenta mergulhar o mundo no caos.',
    'Diferente de Oracle of Ages, aqui o foco principal recai no combate e na exploracao dinamica. Trocar as estacoes muda vegetacao, nivel de agua e acessos do mapa, criando rotas novas e oportunidades para avancar em cada area.',
    'As dungeons de Seasons sao conhecidas pelo ritmo acelerado e por desafios que misturam acao com puzzles ambientais. O jogo mantem a identidade classica de Zelda 2D, mas com mecanicas proprias que destacam sua personalidade.',
    'Oracle of Seasons completa uma dupla muito ambiciosa com Oracle of Ages, permitindo continuidade de progresso por senhas. Essa conexao reforca o valor de revisitar os dois titulos para desbloquear conteudos extras e um encerramento ampliado.',
  ];

  const mechanics = [
    'Rod of Seasons para alternar entre primavera, verao, outono e inverno.',
    'Mudancas sazonais que transformam caminhos e interacoes do mapa.',
    'Combate mais intenso com foco em acao direta.',
    'Conexao por senha com Oracle of Ages para conteudo adicional.',
  ];

  return (
    <GameScreen
      title="The Legend of Zelda: Oracle of Seasons"
      subtitle="Game Boy Color - 2001"
      imageUri="https://i.pinimg.com/1200x/cb/0e/32/cb0e323b9d5ea99075aaf63c70fd9a37.jpg"
      imagePosition={{ x: 0, y: 0, scale: 1 }}
      palette={palette}
      paragraphs={paragraphs}
      mechanics={mechanics}
    />
  );
}
