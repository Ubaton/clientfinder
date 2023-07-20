import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HomeScreen from "../components/home/HomeScreen";
import ClientList from "../components/clients/ClientsList";

import styles from "../constant/index.style";

import { Stack, useRouter } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "AAB2E3" },
          headerShadowVisible: false,
          headerLeft: () => <></>,
          headerRight: () => <></>,
          headerTitle: "",
        }}
      />
      <View>
        <View style={styles.homeScreenContainer}>
          <HomeScreen />
        </View>
        <View style={styles.clientListContainer}>
          <ClientList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
