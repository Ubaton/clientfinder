import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: 400,
    paddingTop: 50,
  },
  searchButton: {
    backgroundColor: "#007bff",
    borderRadius: 25,
    padding: 14,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 30,
    borderRadius: 25,
    margin: 12,
    padding: 12,
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    marginTop: -80,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginTop: 0,
  },
  button: {
    width: "200%",
    marginBottom: 10,
    borderRadius: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 16,
    marginBottom: 10,
  },
  cardContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: 380,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default styles;
