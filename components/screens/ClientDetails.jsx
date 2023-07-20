import React from "react";
import { View, Text } from "react-native";

const ClientDetails = ({ route }) => {
  const { client } = route.params;

  return (
    <View>
      <Text>Client Details:</Text>
      <Text>First Name: {client.first_name}</Text>
      <Text>Last Name: {client.last_name}</Text>
      <Text>Email: {client.email}</Text>
      <Text>Phone Number: {client.phone_number}</Text>
      <Text>Home Address: {client.home_address}</Text>
    </View>
  );
};

export default ClientDetails;
