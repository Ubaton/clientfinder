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
    if (searchText.trim() === "") {
      setSearchResult([]);
      return;
    }

    const filteredClients = clientData.filter((client) => {
      const clientName = `${client.first_name} ${client.last_name}`;
      return clientName.toLowerCase().includes(searchText.toLowerCase());
    });
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
