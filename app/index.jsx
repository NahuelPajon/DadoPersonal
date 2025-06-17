import { Text, TouchableOpacity, View, Image } from "react-native";
import useDado from "./useDado";

const dadoImages = {
  1: require("../assets/images/red_dice_1.png"),
  2: require("../assets/images/red_dice_2.png"),
  3: require("../assets/images/red_dice_3.png"),
  4: require("../assets/images/red_dice_4.png"),
  5: require("../assets/images/red_dice_5.png"),
  6: require("../assets/images/red_dice_6.png"),
};

export default function Index() {
  const { dado, generarDado } = useDado();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={generarDado} style={styles.button}>
        <Image
          source={dadoImages[dado]}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#123",
  },
  button: {
    padding: "100%",
  },
};
