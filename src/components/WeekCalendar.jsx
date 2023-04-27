import { View, Text, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../Styles";
import { addDays, format, getDate, startOfWeek } from "date-fns";

// const Props = {
//   date: Date,
// };

const WeekCalendar = ({ date }) => {
  const [week, setWeek] = useState([]);

  useEffect(() => {
    const weekDays = convertLocalTimeToUTCTime(getWeekDays(date));
    setWeek(weekDays);
  }, [date]);

  return (
    <View style={[styles.section, { flex: 1 }]}>
      {week.map((weekDay) => {
        return (
          <View key={weekDay.formatted}>
            <Text>{date.formatted}</Text>
          </View>
        );
      })}
    </View>
  );
};

// const WeekDay = {
//   formatted: "",
//   date: Date,
//   day: 0,`
// };

//get week days
export const getWeekDays = (date) => {
  const start = convertLocalTimeToUTCTime(
    startOfWeek(date, {
      weekStartsOn: 1,
    })
  );

  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = convertLocalTimeToUTCTime(addDays(start, i));
    final.push({
      formatted: format(date, "EEE"),
      date,
      day: getDate(date),
    });
  }
  return final;
};

const convertLocalTimeToUTCTime = (dateString) => {
  let date = new Date(dateString);
  if (Platform.OS === "ios") {
    return date.toISOString();
  }
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  ).toISOString();
};

// const convertLocalTimeToUTCTime = () => {
//   const dateString = "2021-10-22T00:00:00";
//   const [fullDate, time] = dateString.split("T");
//   const [year, month, date] = fullDate.split("-");
//   const [hour, minute, second] = time.split(":");
//   const dateTime = new Date(year, month, date, hour, minute, second);
//   return dateTime.toISOString();
// };

export default WeekCalendar;
