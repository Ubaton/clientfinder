import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 10,
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
    marginRight: -335, // Move the dot to the left
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: -300,
  },
  nameText: {
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
