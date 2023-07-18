import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../components/home/HomeScreen";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeScreenContainer}>
        <HomeScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeScreenContainer: {
    marginTop: "-120%",
  },
});

export default Home;
