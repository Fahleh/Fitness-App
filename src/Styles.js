import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  screen: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  section: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: width > 375 ? 42 : 40,
    color: "#d4d4d8",
    fontFamily: "Palatino",
    letterSpacing: 6,
  },
  header: {
    fontSize: width > 375 ? 35 : 30,
    color: "#d4d4d8",
    // fontFamily: "Oswald",
    paddingBottom: 12,
    letterSpacing: 2,
    // backgroundColor: "red",

    textAlignVertical: "top",
  },
  heading: {
    fontSize: width > 375 ? 30 : 25,
    fontWeight: "bold",
    color: "#18181b",
    fontFamily: "Palatino",
    // letterSpacing: 2,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  text: {
    fontSize: width > 375 ? 16 : 14,
    fontWeight: "bold",
    fontFamily: "Palatino",
  },
  bigText: {
    fontSize: width > 375 ? 16 : 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  textBar: {
    margin: 20,
    width: "80%",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    justifyContent: "center",
  },
  detail: {
    fontSize: width > 375 ? 14 : 12,
    fontWeight: "bold",
    fontFamily: "Palatino",
    color: "#18181b",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#f1f5f9",
    width: "100%",
    padding: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  bg: {
    flex: 1,
  },
  btn: {},
  cardContainer: {},
  card: {
    flex: 1,
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 20,
    margin: 20,
    marginBottom: 5,
  },
  poster: {
    flex: 1,
    alignItems: "center",
    width: 300,
    height: 250,
  },
  stepcount: {
    // flex: 1,
    flexDirection: "row",
    marginHorizontal: "2%",
  },
  countlabel: {
    fontSize: width > 375 ? 14 : 12,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#16a34a",
  },
});

export default styles;
