import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./src/Styles";
import { useFonts } from "expo-font";
// import Landing from "./src/screens/Landing";
// import Register from "./src/screens/Register";
// import Login from "./src/screens/Login";
// import Home from "./src/screens/Home";
import Navigator from "./src/navigaion";

export default function App() {
  //Fonts
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto/Roboto-Black.ttf"),
    Raleway: require("./assets/fonts/Raleway/static/Raleway-Black.ttf"),
    Poppins: require("./assets/fonts/Poppins/Poppins-Black.ttf"),
    Oswald: require("./assets/fonts/Oswald/static/Oswald-Regular.ttf"),
    Palatino: require("./assets/fonts/Palatino/Palatino.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Navigator />
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <StatusBar style="auto" />
    </View>
  );
}
