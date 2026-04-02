import {
  NavigationContainer,
  NavigationIndependentTree
} from '@react-navigation/native'
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'

import TelaPrincipal from './src/components/TelaPrincipal'
import TelaDescricao from './src/components/TelaDescricao'

import TelaA from './src/views/TelaA';
import TelaB from './src/views/TelaB';
import TelaC from './src/views/TelaC';
import TelaD from './src/views/TelaD';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Principal" component={TelaPrincipal} />
          <Stack.Screen name="Descricao" component={TelaDescricao} />
          <Stack.Screen name="TelaA" component={TelaA}/>
          <Stack.Screen name="TelaB" component={TelaB}/>
          <Stack.Screen name="TelaC" component={TelaC}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  )
}