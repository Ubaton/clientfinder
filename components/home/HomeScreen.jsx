import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
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
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/6uob6mpb9yx-13%3A41?alt=media&token=0bb78339-b179-4177-9936-404762896aac",
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Client"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Icon name="search" size={30} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      {searchResult.length > 0 && (
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Search Result:</Text>
          {searchResult.map((client) => (
            <View style={styles.card} key={client.id}>
              <Text>
                Name: {client.first_name} {client.last_name}
              </Text>
              <Text>Email: {client.email}</Text>
              <Text>Phone: {client.phone_number}</Text>
              <Text>Home Address: {client.home_address}</Text>
            </View>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
