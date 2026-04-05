import GameScreen from '../components/GameScreen';

export default function TelaB() {
    const palette = {
        background: '#1A1730',
        card: '#252041',
        border: '#7A5EA8',
        title: '#F4C95D',
        subtitle: '#C4B7E4',
        text: '#EEE9FF',
        imageBg: '#3A2D62',
        imageText: '#FDE7A3',
    };

    const paragraphs = [
        'The Legend of Zelda: Majora\'s Mask leva Link para Termina, um mundo estranho e inquietante que vive sob a ameaca de uma lua em queda. O jogo aposta em uma atmosfera mais sombria e pessoal, com foco no tempo, na perda e no impacto das acoes do heroi sobre as pessoas.',
        'A historia acontece em um ciclo de tres dias, no qual os acontecimentos se repetem enquanto o jogador aprende a rotina dos personagens. Esse formato cria urgencia, mas tambem profundidade, porque cada missao revela detalhes sobre medos, sonhos e tragedias dos habitantes.',
        'As mascaras sao o centro da experiencia: algumas mudam habilidades, outras desbloqueiam dialogos e varias possuem valor emocional para as side quests. O sistema de transformacao em Deku, Goron e Zora muda completamente movimentacao, combate e resolucao de puzzles.',
        'Majora\'s Mask e lembrado por seu tom unico e pela coragem de experimentar em estrutura e narrativa. Ele mostra que Zelda pode ir alem da aventura classica, explorando temas mais maduros sem perder a criatividade e o senso de descoberta da franquia.',
    ];

    const mechanics = [
        'Ciclo de tres dias com reset controlado pelo Song of Time.',
        'Transformacoes completas via mascaras Deku, Goron e Zora.',
        'Agenda de NPCs com eventos em horarios especificos.',
        'Grande variedade de mascaras com efeitos de gameplay e narrativa.',
    ];

    return (
        <GameScreen
            title="The Legend of Zelda: Majora's Mask"
            subtitle="Nintendo 64 - 2000"
            imageUri="https://i.pinimg.com/1200x/92/42/df/9242dfe719c32041f88a7000db3742bb.jpg"
            imagePosition={{ x: 0, y: 0, scale: 1 }}
            palette={palette}
            paragraphs={paragraphs}
            mechanics={mechanics}
        />
    );
}