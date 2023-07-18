import React from "react";
import { View, Text, FlatList, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import clientsData from "../../Database/ClientData.json";
import styles from "./clientlist.style";

const ClientList = () => {
  const renderClientItem = ({ item }) => {
    let dotColor;
    if (item.jobCutStatus === "green") {
      dotColor = "green";
    } else if (item.jobCutStatus === "red") {
      dotColor = "red";
    } else if (item.jobCutStatus === "gray") {
      dotColor = "gray";
    }

    return (
      <View
        style={[styles.card, { width: Dimensions.get("window").width - 50 }]}
      >
        <View style={styles.container}>
          <View style={styles.dotContainer}>
            <Icon name="circle" size={10} color={dotColor} />
          </View>
          <Text style={styles.nameText}>
            {item.first_name} {item.last_name}
          </Text>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
        </View>
      </View>
    );
  };

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
