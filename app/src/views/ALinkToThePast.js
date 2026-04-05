import GameScreen from '../components/GameScreen';

export default function TelaD() {
    const palette = {
        background: '#F1EBDD',
        card: '#FFF8E9',
        border: '#9C7A3B',
        title: '#7A1F1F',
        subtitle: '#7A5B29',
        text: '#352715',
        imageBg: '#E5D3AD',
        imageText: '#5A3E1D',
    };

    const paragraphs = [
        'The Legend of Zelda: A Link to the Past consolidou a formula classica da franquia no Super Nintendo. O jogo apresenta um mundo amplo, dungeons marcantes e uma aventura que combina exploracao livre com progressao guiada por itens.',
        'A trama ganha forca com a dualidade entre Light World e Dark World, duas versoes de Hyrule conectadas por portais e regras proprias. Essa estrutura incentiva observacao e planejamento, ja que um detalhe em um mundo pode resolver um problema no outro.',
        'O ritmo da aventura e muito equilibrado: sempre ha um novo objetivo, uma ferramenta recem-adquirida ou um segredo opcional para descobrir. A trilha sonora, os sprites e a direcao de arte criam uma identidade atemporal para o titulo.',
        'A Link to the Past influenciou quase todos os Zeldas 2D que vieram depois e segue como referencia de design. Ele e um dos principais pontos de entrada para entender a essencia da serie e o motivo de sua longevidade.',
    ];

    const mechanics = [
        'Alternancia entre Light World e Dark World para puzzles e exploracao.',
        'Estrutura de progressao por itens classicos de dungeon.',
        'Mundo interconectado com alto foco em segredos opcionais.',
        'Combate 2D preciso com variedade de ferramentas e magia.',
    ];

    return (
        <GameScreen
            title="The Legend of Zelda: A Link to the Past"
            subtitle="Super Nintendo - 1991"
            imageUri="https://i.pinimg.com/originals/3b/b3/01/3bb3017264dd2da5f9ef2344bab22f1e.gif"
            imagePosition={{ x: 0, y: 0, scale: 1 }}
            palette={palette}
            paragraphs={paragraphs}
            mechanics={mechanics}
        />
    );
}