//mesmo esquema da HomeScreen.jsx
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../config/style";


export const NextScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Funcionou</Text>


      <Button icon={"home"}
        onPress={() => navigation.navigate("Home")} mode="contained">Volte</Button>
    </View>
  );
};