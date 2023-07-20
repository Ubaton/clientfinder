import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ClientList from "../components/clients/ClientsList"; // Fix the import statement here
import ClientDetails from "../components/screens/ClientDetails";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ClientList" component={ClientList} />
        <Stack.Screen name="ClientDetails" component={ClientDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
