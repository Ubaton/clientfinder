import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "../components/home/HomeScreen";
import ClientList from "../components/clients/ClientsList";

import styles from "../constant/index.style";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeScreenContainer}>
        <HomeScreen />
      </View>
      <View style={styles.clientListContainer}>
        <ClientList />
      </View>
    </View>
  );
};

export default Home;
