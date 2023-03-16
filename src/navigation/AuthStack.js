import React from "react";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
