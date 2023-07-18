import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 40,
    paddingTop: 0,
    borderRadius: 25,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  dotContainer: {
    marginRight: -325, // Move the dot to the left
    paddingTop: 25,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginLeft: -300,
    marginTop: -50,
  },
  clientTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    marginTop: -2,
  },
});

export default styles;
