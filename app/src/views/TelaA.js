import { View, Text } from 'react-native'
import Estilo from '../components/Estilo'

export default function TelaA() {
    return (
        <View style={[Estilo.containerBase, {
            backgroundColor: '#e53935'
        }]}>
            <Text style={Estilo.textoBase}>Tela A</Text>
        </View>
    )
}