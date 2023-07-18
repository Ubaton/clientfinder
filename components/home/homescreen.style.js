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
    padding: 20,
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
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "120%",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default styles;
