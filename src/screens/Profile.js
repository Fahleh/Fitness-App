import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import styles from "../Styles";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "@rneui/base";
import {
  MaterialCommunityIcons,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.center}>
        <Avatar
          size={120}
          rounded
          source={{
            uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
          }}
        />
        <Text style={[styles.text, { fontSize: 24, marginTop: 10 }]}>
          Jane Doe
        </Text>
        <View
          style={{
            marginTop: 10,
            borderRadius: 15,
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: "#e4e4e7",
          }}
        >
          <Text
            style={[
              styles.text,
              {
                fontSize: 14,
                fontWeight: "normal",
              },
            ]}
          >
            Free Member
          </Text>
        </View>

        <View
          style={[
            styles.center,
            {
              marginTop: 50,
              marginBottom: 20,
              paddingVertical: 10,
              backgroundColor: "#e4e4e7",
              borderRadius: 25,
              width: "80%",
            },
          ]}
        >
          {/* Manage Subscriptions */}
          <Pressable
            style={[styles.textBar]}
            onPress={() => console.log("Subscriptions!!")}
          >
            <MaterialCommunityIcons
              name="archive-edit"
              size={20}
              color="#2563eb"
              style={{ marginRight: 10 }}
            />
            <Text style={[styles.bigText]}>Manage Subscriptions</Text>
          </Pressable>

          {/* Fitness Data */}
          <Pressable
            style={styles.textBar}
            onPress={() => console.log("data page")}
          >
            <Foundation
              name="graph-bar"
              size={20}
              color="#2563eb"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.bigText}>My Fitness Data</Text>
          </Pressable>

          {/* Settings */}
          <Pressable
            style={styles.textBar}
            onPress={() => console.log("settings page")}
          >
            <Ionicons
              name="ios-settings"
              size={20}
              color="#2563eb"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.bigText}>Settings</Text>
          </Pressable>

          {/* Log out */}
          <Pressable
            style={styles.textBar}
            onPress={() => navigation.navigate("Landing")}
          >
            <MaterialCommunityIcons
              name="logout"
              size={20}
              color="#2563eb"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.bigText}>Log out</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
export default Profile;
