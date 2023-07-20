import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HomeScreen from "../components/home/HomeScreen";
import ClientList from "../components/clients/ClientsList";
import { useNavigation } from "@react-navigation/native";
import styles from "../constant/index.style";

const Home = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerShadowVisible: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
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
