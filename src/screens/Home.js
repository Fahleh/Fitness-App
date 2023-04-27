import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import styles from "../Styles";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Avatar } from "@rneui/base";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import { Video } from "expo-av";
import { Pedometer } from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";

//Video Data
const DATA = [
  {
    id: 1,
    src: {
      uri: "https://media.istockphoto.com/id/834624426/video/muscular-shirtless-man-lifting-heavy-barbell-and-doing-military-press-bodybuilding-exercise-in.mp4?s=mp4-640x640-is&k=20&c=s8axPaV8x9V3T9_uVDVuU_StpjcytBUsagPkd8B6-aA=",
    },
    desc: "Seated Press",
    category: "Upper Body",
    poster: {},
  },
  {
    id: 2,
    src: {
      uri: "https://media.istockphoto.com/id/1140997086/video/nice-guy-trains-in-a-vintage-gym-and-fists-his-boxing-bag-fists.mp4?s=mp4-640x640-is&k=20&c=mEArv6f1UL7iw1iwsbKdJqX0FSDQTTI6UKascY0OtYo=",
    },
    desc: "Sit Up",
    category: "Core",
    poster: {},
  },
  {
    id: 3,
    src: {
      uri: "https://media.istockphoto.com/id/1178502450/video/young-man-pulls-himself-up-on-a-horizontal-bar-against-the-sky.mp4?s=mp4-640x640-is&k=20&c=nogko0zm5nyKnRUNO1P2wThHRM2Q4t0mwsiVY4fzskk=",
    },
    desc: "Pull Up",
    category: "Upper Body",
    poster: {},
  },
];

const Home = () => {
  const [hasPedometer, setHasPedometer] = useState();
  const [stepCount, setStepCount] = useState(0);
  // console.log(stepCount);

  useEffect(() => {
    count();
  }, []);

  // Pedometer function for counting steps
  const count = () => {
    const counter = Pedometer.watchStepCount((result) => {
      setStepCount(result.steps);
    });
    Pedometer.isAvailableAsync().then(
      (result) => {
        setHasPedometer(String(result));
      },
      (error) => {
        setHasPedometer(error);
      }
    );
  };

  //Rounding function
  const round = (num, decimalPlaces) =>
    Number(Math.round(num + "e" + decimalPlaces) + "e-" + decimalPlaces);

  let distance = stepCount / 1300;
  let distanceCovered = round(distance, 2).toFixed(2);
  // let distanceCovered = distance.toFixed(2);

  let calories = distanceCovered * 60;
  let caloriesBurnt = round(calories, 2).toFixed(2);
  // let caloriesBurnt = calories.toFixed(2);

  // moment.locale("fr");
  let today = moment();
  const [day, setDay] = useState(today.format("DD"));
  const video = useRef(null);

  //Blacklist Dates
  const blacklistedDates = (date) => {
    return date.isoWeekday() !== today.isoWeekday();
  };

  //Video elements
  const vids = ({ item }) => (
    <View>
      <Video
        ref={video}
        style={styles.card}
        source={item.src}
        onError={(e) => console.log(e)}
        resizeMode="cover"
        // usePoster
        posterSource={item.poster}
        posterResizeMode="cover"
        posterStyle={styles.poster}
        useNativeControls
      />
      <View
        style={{
          marginLeft: 25,
          position: "absolute",
          bottom: 30,
          left: 5,
          backgroundColor: "#2563eb",
          borderRadius: 25,
        }}
      >
        <Text
          style={{
            paddingHorizontal: 7,
            fontSize: 12,
            fontFamily: "Palatino",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {item.category}
        </Text>
      </View>
      <Text
        style={{
          marginLeft: 25,
          fontFamily: "Palatino",
          fontWeight: "bold",
          color: "#18181b",
        }}
      >
        {item.desc}
      </Text>
    </View>
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, { paddingTop: 50 }]}
    >
      <View style={[styles.screen, { paddingTop: 0 }]}>
        <View style={styles.section}>
          <Ionicons
            name="fitness"
            size={42}
            color="#2563eb"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.header}>Dashboard</Text>
          {/* <Text
            style={{
              alignSelf: "center",
              fontSize: 18,
              color: "#71717a",
              fontFamily: "GillSans",
              letterSpacing: 2,
            }}
          >
            Hi, Jane
          </Text> */}
          <View style={{ marginTop: 0, marginLeft: "auto" }}>
            <Avatar
              size={40}
              rounded
              source={{
                uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
              }}
            />
          </View>
        </View>

        {/* Calender */}
        <View style={[styles.screen, { paddingTop: 0 }]}>
          <CalendarStrip
            style={{ height: 100 }}
            iconContainer={{ flex: 0.1 }}
            calendarHeaderStyle={{
              fontSize: 22,
              fontFamily: "Palatino",
              color: "#18181b",
            }}
            scrollable
            useIsoWeekday
            datesBlacklist={blacklistedDates}
            calendarAnimation={{
              type: "sequence",
              duration: 30,
            }}
            selectedDate={today}
            onDateSelected={(date) => setDay(date.format("DD"))}
            daySelectionAnimation={{
              type: "background",
              duration: 300,
              highlightColor: "#3b82f6",
            }}
          />
        </View>

        <Text style={styles.heading}>My Activities</Text>

        {/* Activities */}
        <View style={styles.section}>
          {/* {hasPedometer === true ? (
          ACTIVITY DISPLAY
        ) : (
          <Text style={[styles.text, { color: "#dc2626" }]}>
            Pedometer is either inactive or not present on this device.
          </Text>
        )} */}

          {/* Distance covered */}
          <View style={[styles.center, { marginRight: 40 }]}>
            <MaterialCommunityIcons
              name="map-marker-distance"
              size={24}
              color="#2563eb"
            />
            <Text style={styles.detail}>{distanceCovered}km</Text>
          </View>

          {/* Steps Counted */}
          <CircularProgress
            value={stepCount}
            maxValue={6500}
            radius={70}
            title={"Steps"}
            titleColor={"#18181b"}
            titleStyle={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Palatino",
            }}
            activeStrokeWidth={10}
            inActiveStrokeWidth={10}
            activeStrokeColor={"#2563eb"}
            inActiveStrokeColor={"#737373"}
            inActiveStrokeOpacity={0.1}
          />

          {/* Calorie Burnt */}
          <View style={[styles.center, { marginLeft: 40 }]}>
            <FontAwesome5 name="burn" size={24} color="#2563eb" />
            <Text style={styles.detail}>{caloriesBurnt}Kcal</Text>
          </View>
        </View>

        {/* Video section */}
        <Text style={styles.heading}>My Fitness Videos</Text>
        {/* Video Display */}
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={day === today.format("DD") ? vids : null}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
