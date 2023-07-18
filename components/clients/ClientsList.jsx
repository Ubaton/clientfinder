import React from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";
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
        <View style={styles.contentContainer}>
          <View style={styles.dotContainer}>
            <Icon name="circle" size={10} color={dotColor} />
          </View>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
          </View>
          <Text style={styles.nameText}>
            {item.first_name} {item.last_name}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.clientTitle}>Clients</Text>
      <FlatList
        data={clientsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderClientItem}
      />
    </SafeAreaView>
  );
};

export default ClientList;
