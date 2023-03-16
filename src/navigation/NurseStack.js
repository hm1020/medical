import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Nurse from "../screens/Nurse";
const Stack = createStackNavigator();

const NurseStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="nurse" component={Nurse} />
    </Stack.Navigator>
  );
};

export default NurseStack;
