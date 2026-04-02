import { View, Text, Button } from 'react-native'
import Estilo from './Estilo'

export default function TelaDescricao({ navigation }) {
    return (
        <View style={Estilo.textoDescricao}>
            <Text style={Estilo.textoDescricao1}>
                Escolha uma tela/rotas
            </Text>
            <Button title='Ir para tela A'
                onPress={() => navigation.navigate('TelaA')} />
            <Button title='Ir para tela B'
                onPress={() => navigation.navigate('TelaB')} />
            <Button title='Ir para tela C'
                onPress={() => navigation.navigate('TelaC')} />
        </View>
    )
}