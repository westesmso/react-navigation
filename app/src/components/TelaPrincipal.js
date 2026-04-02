import { View, Text, Button } from 'react-native'
import Estilo from './Estilo'

export default function TelaPrincipal({ navigation }) {
    return (
        <View style={Estilo.textoTelaPrincipal}>
            <Text style={Estilo.textoTelaPrincipal1}>
                Primeira Tela - Principal
            </Text>
            <Button
                title='Ir para Tela de Opções'
                onPress={() => navigation.navigate('Descricao')}
            />
        </View>
    )
}