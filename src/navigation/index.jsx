//importações mto daora
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from '../Screens/HomeScreen';
import { NextScreen } from '../Screens/NextScreen';

//necessário pra funcionar meio q "a lógica"
const Tab = createMaterialBottomTabNavigator()
export const RootNavigation = () => {

    //aqui diz oq é pra retornar 
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={"Home"} component={HomeScreen} 
            options={{ tabBarIcon: "cat",
            }} />
            <Tab.Screen name={"Next"} component={NextScreen}
            options={{ tabBarIcon:"dog",
        }}  />
        </Tab.Navigator>
    )
}
