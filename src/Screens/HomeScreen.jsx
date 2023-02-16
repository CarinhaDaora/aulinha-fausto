//importações mto daora
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../config/style";
//exportando direto do index.js
export const HomeScreen = ({ navigation }) => {
  return (
    //conteudos da página 
    <View style={styles.container}>
      <Text style={styles.titulo} >Primeira página da avaliação</Text>

      <TextInput style={styles.texto} placeholder="Nome"/> 
      <TextInput style={styles.texto} placeholder="Email"/> 
      <TextInput style={styles.texto} placeholder="Senha"/>  

      <Button icon={"login"} style={styles.botao} 
        //tem a função de dizer ao botão oque fazer quando apertado, no caso diz para navegar até a página com nome "Next"
        onPress={() => navigation.navigate("Next")} mode="contained">Ir para próxima página</Button>
    </View>
  );
};