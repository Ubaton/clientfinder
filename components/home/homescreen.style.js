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
  },
  searchButton: {
    backgroundColor: "#007bff",
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 25,
    margin: 12,
    padding: 10,
  },
  input: {},
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
    marginTop: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "80%",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default styles;
