import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000",
    marginTop: -150,
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
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dotContainer: {
    marginLeft: 338,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginRight: -335,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 700,
  },
  nameText: {
    fontSize: 20,
    textAlign: "center",
  },
  clientTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default styles;
