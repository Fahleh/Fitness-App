import { View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import styles from "../Styles";

const Landing = () => {
  const navigation = useNavigation();

  return (
    // Background
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      }}
      style={styles.bg}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 100,
          marginTop: 50,
        }}
      >
        {/* App Name */}
        <View>
          <Text style={[styles.title, { color: "#2563eb" }]}>Fitness App</Text>
        </View>
        <View>
          {/* Signup Botton */}
          <Button
            title="Sign up"
            containerStyle={{ height: 50, width: 200 }}
            buttonStyle={{ backgroundColor: "#2563eb", borderRadius: 10 }}
            titleStyle={{
              color: "#f4f4f5",
              fontWeight: "bold",
              fontFamily: "Palatino",
            }}
            onPress={() => navigation.navigate("Register")}
          />

          {/* Login Button */}
          <Button
            title="Login"
            containerStyle={{ height: 50, width: 200 }}
            buttonStyle={{ backgroundColor: "#2563eb", borderRadius: 10 }}
            titleStyle={{
              color: "#f4f4f5",
              fontWeight: "bold",
              fontFamily: "Palatino",
            }}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Landing;
