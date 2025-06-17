import { useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
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
  const [currentDado, setCurrentDado] = useState(dado);
  const [isScrambling, setIsScrambling] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scrambleInterval = useRef(null);

  useEffect(() => {
    // Solo actualiza el dado mostrado cuando NO está mezclando
    if (!isScrambling) setCurrentDado(dado);
  }, [dado, isScrambling]);

  const handlePress = () => {
    setIsScrambling(true);

    // Scramble: cambia el dado rápidamente durante la animación
    scrambleInterval.current = setInterval(() => {
      setCurrentDado(Math.floor(Math.random() * 6) + 1);
    }, 60);

    // Inicia la animación de giro
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start(() => {
      rotateAnim.setValue(0); // Reinicia la animación
      clearInterval(scrambleInterval.current);
      setIsScrambling(false);
      generarDado(); // Cambia el número del dado (el hook actualizará currentDado)
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Animated.Image
          source={dadoImages[currentDado]}
          style={{
            width: 200,
            height: 200,
            transform: [
              {
                rotate: rotateAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
            
          }}
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
