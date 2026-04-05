import GameScreen from '../components/GameScreen';

export default function TelaC() {
    const palette = {
        background: '#EAF7E0',
        card: '#F7FFF0',
        border: '#7DA453',
        title: '#2D6A2E',
        subtitle: '#5A7F4D',
        text: '#233325',
        imageBg: '#CFE8B8',
        imageText: '#2E532B',
    };

    const paragraphs = [
        'The Legend of Zelda: The Minish Cap apresenta uma aventura vibrante no Game Boy Advance, com direcao artistica colorida e animacoes muito expressivas. O jogo acompanha Link e o chapeu falante Ezlo em uma jornada para impedir os planos do mago Vaati.',
        'A proposta central e alternar entre o tamanho normal e uma versao minuscula de Link. Essa mudanca de escala transforma cenarios comuns em mundos gigantes, revelando passagens secretas, rotas alternativas e interacoes com os pequenos Minish.',
        'O design das dungeons combina puzzles classicos com ideias de espacialidade, fazendo o jogador observar cada ambiente com outro olhar. A exploracao de Hyrule tambem e reforcada por atividades opcionais e segredos escondidos em detalhes do cenario.',
        'Minish Cap e frequentemente lembrado como uma joia do catalogo portatil de Zelda, unindo charme visual, ritmo leve e mecanicas criativas. Mesmo sendo um titulo menor em escala, ele entrega identidade forte e uma aventura muito consistente.',
    ];

    const mechanics = [
        'Mudanca de escala entre Link normal e Link minish.',
        'Fusao de Kinstones para desbloquear segredos e eventos no mapa.',
        'Objetos com uso criativo em puzzles de perspectiva e tamanho.',
        'Companheiro Ezlo com funcoes de narrativa e progressao.',
    ];

    return (
        <GameScreen
            title="The Legend of Zelda: The Minish Cap"
            subtitle="Game Boy Advance - 2004"
            imageUri="https://i.pinimg.com/1200x/43/c5/5d/43c55dcdf8f6afe047a1716ea19b88aa.jpg"
            imagePosition={{ x: 0, y: 0, scale: 1 }}
            palette={palette}
            paragraphs={paragraphs}
            mechanics={mechanics}
        />
    );
}