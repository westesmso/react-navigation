import GameScreen from '../components/GameScreen';

export default function TelaA() {
    const palette = {
        background: '#F6F2DE',
        card: '#FFF9EA',
        border: '#B08D57',
        title: '#1D4D2B',
        subtitle: '#74623C',
        text: '#2E2A1E',
        imageBg: '#DED0AA',
        imageText: '#4D4023',
    };

    const paragraphs = [
        'The Legend of Zelda: Ocarina of Time marcou a transicao da franquia para o 3D e definiu um novo padrao para jogos de aventura. A jornada de Link entre a infancia e a fase adulta criou um senso epico raro para a epoca, com Hyrule conectada por areas memoraveis e cheias de segredos.',
        'A narrativa mistura fantasia, melancolia e heroismo, com destaque para personagens como Zelda, Sheik e Ganondorf. O jogo usa o tempo como parte central da historia, mostrando como as escolhas e acontecimentos alteram o mundo e o destino do reino.',
        'As dungeons sao construidas para ensinar mecanicas de forma progressiva, com puzzles, combate e exploracao trabalhando juntos. A trilha sonora tambem e protagonista, usando melodias para abrir caminhos, resolver desafios e criar identidade para cada local.',
        'Mesmo decadas depois, Ocarina of Time continua relevante por equilibrar liberdade e orientacao, sem perder o ritmo da aventura. Ele e lembrado como um dos titulos mais influentes da historia dos videogames por sua direcao, design e impacto cultural.',
    ];

    const mechanics = [
        'Mira em alvos com Z-targeting para combate e interacao em 3D.',
        'Uso da ocarina para tocar cancoes que alteram clima, tempo e ambiente.',
        'Alternancia entre Link crianca e Link adulto para progredir em areas diferentes.',
        'Cavalo Epona como meio de locomocao dinamico no mundo aberto.',
    ];

    return (
        <GameScreen
            title="The Legend of Zelda: Ocarina of Time"
            subtitle="Nintendo 64 - 1998"
            imageUri="https://i.imgur.com/53sav6M.jpeg"
            imagePosition={{ x: 0, y: 0, scale: 1 }}
            palette={palette}
            paragraphs={paragraphs}
            mechanics={mechanics}
        />
    );
}