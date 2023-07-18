import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import clientData from "../../Database/ClientData.json";

import styles from "./homescreen.style";

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
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter search text"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Icon name="search" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {searchResult.length > 0 && (
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Search Result:</Text>
          {searchResult.map((client) => (
            <View style={styles.card} key={client.id}>
              <Text>
                {client.first_name} {client.last_name}
              </Text>
              <Text>{client.email}</Text>
              <Text>{client.phone_number}</Text>
              <Text>{client.home_address}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
