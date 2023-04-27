import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import styles from "../Styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {/* LOGO DISPLAY */}
      <View style={styles.screen}>
        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 30,
          }}
        >
          <Text style={styles.heading}>LOGO</Text>
          <Text style={styles.heading}>HERE</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* Username */}
          <Ionicons
            name="person-outline"
            size={15}
            color="black"
            marginRight={3}
          />
          <Text style={[styles.text, { color: "#2563eb" }]}>Username:</Text>
        </View>

        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="Choose your username"
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* Password */}
          <Ionicons
            name="key-outline"
            size={16}
            color="black"
            marginRight={3}
          />
          <Text style={[styles.text, { color: "#2563eb" }]}>Password:</Text>
        </View>

        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="Password"
          autoComplete="off"
          secureTextEntry
        />

        {/* Login Button */}
        <Button
          title="Log in"
          containerStyle={{
            height: 50,
            width: 120,
            alignSelf: "center",
            marginTop: 20,
          }}
          buttonStyle={{ backgroundColor: "#2563eb", borderRadius: 10 }}
          titleStyle={{
            color: "#f4f4f5",
            fontWeight: "bold",
            fontFamily: "Palatino",
          }}
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
