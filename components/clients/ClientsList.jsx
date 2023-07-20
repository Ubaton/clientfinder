import { useState } from "react";
import React from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import clientsData from "../../Database/ClientData.json";
import styles from "./clientlist.style";

const ClientList = () => {
  const navigation = useNavigation();

  const handleClientPress = (client) => {
    // Navigate to the new page with the selected client information
    navigation.navigate("ClientDetails", { client });
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleItemPressIn = (client) => {
    setHoveredItem(client.id);
  };

  const handleItemPressOut = () => {
    setHoveredItem(null);
  };

  const renderClientItem = ({ item }) => {
    let dotColor;
    if (item.jobCutStatus === "green") {
      dotColor = "green";
    } else if (item.jobCutStatus === "red") {
      dotColor = "red";
    } else if (item.jobCutStatus === "gray") {
      dotColor = "gray";
    }

    const isHovered = hoveredItem === item.id;

    return (
      <TouchableOpacity
        onPress={() => handleClientPress(item)}
        onPressIn={() => handleItemPressIn(item)}
        onPressOut={handleItemPressOut}
        underlayColor={isHovered ? "#AAB2E3" : "#fff"}
      >
        <View
          style={[
            styles.card,
            {
              width: Dimensions.get("window").width - 50,
              backgroundColor: isHovered ? "#AAB2E3" : "#fff",
            },
          ]}
        >
          <View style={styles.contentContainer}>
            <View style={styles.dotContainer}>
              <Image
                style={styles.CommunicationComment}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8hnztkh1sus-58%3A1612?alt=media&token=e24a42ff-d720-4a0d-ac40-9ff3c57ee88a",
                }}
                name="circle"
                color={dotColor}
              />
            </View>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
            </View>
            <Text style={styles.nameText}>
              {item.first_name} {item.last_name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
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
