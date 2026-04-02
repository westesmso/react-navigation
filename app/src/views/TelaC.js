import { View, Text } from 'react-native'
import Estilo from '../components/Estilo'

export default function TelaC() {
    return (
        <View style={[Estilo.containerBase, {
            backgroundColor: '#e53935'
        }]}>
            <Text style={Estilo.textoBase}>Tela C</Text>
        </View>
    )
}