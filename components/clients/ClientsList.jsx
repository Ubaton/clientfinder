import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import clientsData from "../../Database/ClientData.json";

import styles from "./clientlist.style";

const ClientList = () => {
  const renderClientItem = ({ item }) => (
    <View style={[styles.card, { width: Dimensions.get("window").width / 2 }]}>
      <Text>
        {item.first_name} {item.last_name}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={clientsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderClientItem}
      />
    </View>
  );
};
export default ClientList;
