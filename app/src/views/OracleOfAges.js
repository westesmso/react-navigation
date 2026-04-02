import GameScreen from '../components/GameScreen';

export default function TelaE() {
  const palette = {
    background: '#DCEEFF',
    card: '#EEF6FF',
    border: '#4C7DB4',
    title: '#1A4F87',
    subtitle: '#3C6C9B',
    text: '#1D3248',
    imageBg: '#C5DEF6',
    imageText: '#204C76',
  };

  const paragraphs = [
    'The Legend of Zelda: Oracle of Ages coloca Link em Labrynna, uma terra marcada por conflitos entre eras. A aventura gira em torno de Nayru e da feiticeira Veran, com foco em viagens temporais para restaurar o equilibrio do mundo.',
    'O jogo usa uma estrutura de puzzles muito forte, em que mudancas no passado alteram o presente de forma direta. Plantar algo em uma epoca, por exemplo, pode abrir caminho em outra, estimulando observacao e raciocinio em cada regiao.',
    'Mesmo sendo de Game Boy Color, o design de dungeons e sofisticado e variado, com desafios de logica, navegacao e combate. O ritmo valoriza a experimentacao e recompensa quem explora cada canto de Labrynna com cuidado.',
    'Oracle of Ages e lembrado como um dos Zeldas mais criativos em termos de quebra-cabecas. Em conjunto com Oracle of Seasons, ele tambem mostra uma proposta de jogos conectados que ampliava o conteudo para quem jogasse ambos.',
  ];

  const mechanics = [
    'Harp of Ages para viajar entre passado e presente.',
    'Puzzles que dependem de alteracoes temporais no mapa.',
    'Sistema de senha para conectar progresso com Oracle of Seasons.',
    'Forte foco em dungeons de logica e exploracao detalhada.',
  ];

  return (
    <GameScreen
      title="The Legend of Zelda: Oracle of Ages"
      subtitle="Game Boy Color - 2001"
      imageUri="https://placehold.co/900x520/C5DEF6/204C76?text=Oracle+of+Ages"
      palette={palette}
      paragraphs={paragraphs}
      mechanics={mechanics}
    />
  );
}
