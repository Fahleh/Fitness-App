import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import styles from "../Styles";
import { Button } from "@rneui/themed";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Register = () => {
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        {/* LOGO DISPLAY */}
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

        {/* Username Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
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

        {/* Name Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="drive-file-rename-outline"
            size={18}
            color="black"
            marginRight={3}
          />
          <Text style={[styles.text, { color: "#2563eb" }]}>Name:</Text>
        </View>

        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="Enter your name"
        />

        {/* Email Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="mail-outline"
            size={18}
            color="black"
            marginRight={3}
          />
          <Text style={[styles.text, { color: "#2563eb" }]}>Email:</Text>
        </View>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="example@domain.com"
        />

        {/* Password Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
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

        {/* Confirm Password */}
        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Entypo name="key" size={16} color="black" marginRight={3} />
          <Ionicons
            name="key-outline"
            size={16}
            color="black"
            marginRight={3}
          />
          <Text style={[styles.text, { color: "#16a34a" }]}>
            Confirm Password:
          </Text>
        </View>

        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="Password"
          autoComplete="off"
          secureTextEntry
        /> */}

        {/* Register Button */}
        <Button
          title="Register"
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
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
