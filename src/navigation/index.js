//importações mto daora
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { NextScreen } from '../Screens/NextScreen';

//necessário pra funcionar meio q "a lógica"
const Stack = createNativeStackNavigator()
export const RootNavigation = () =>{
   
//aqui diz oq é pra retornar 
    return(
        
//aqui diz quais telas tem e quais nomes elas possuem para serem importadas
<Stack.Navigator>
<Stack.Screen name={"Home"} component={HomeScreen}/>
<Stack.Screen name={"Next"} component={NextScreen}/>
</Stack.Navigator>

    )
}