import { View, Text } from 'react-native'
import Estilo from '../components/Estilo'

export default function TelaD() {
    return (
        <View style={[Estilo.containerBase, {
            backgroundColor: '#FFB00A'
        }]}>
            <Text style={Estilo.textoBase}>Tela D</Text>
        </View>
    )
}