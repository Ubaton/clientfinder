import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import clientData from "../../Database/ClientData.json";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    const filteredClients = clientData.filter(
      (client) =>
        client.first_name.includes(searchText) ||
        client.last_name.includes(searchText) ||
        client.email.includes(searchText)
    );
    setSearchResult(filteredClients);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter search text"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={handleSearch} />

      {searchResult.length > 0 && (
        <View>
          <Text>Search Result:</Text>
          {searchResult.map((client) => (
            <Text key={client.id}>
              {client.first_name} {client.last_name} - {client.email}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "250%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
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
});

export default HomeScreen;
