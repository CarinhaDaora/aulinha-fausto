//"tela principal", nela será juntado todas as partes das outras páginas.
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './src/navigation';


export default function App(){
  return(
    //se abre um container e nele tbm se abre um RootNavigation q junta as paginas
    <NavigationContainer>
    <RootNavigation/>
    </NavigationContainer>
  )
}