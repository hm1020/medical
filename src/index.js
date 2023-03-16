import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthStack from "./navigation/AuthStack";
import { SafeAreaView } from "react-native-safe-area-context";
import ParentNavigate from "./navigation/ParentNavigate";
import UseLogout from "./utils/useLogout";

const Index = () => {
  const [token, logout] = UseLogout();
  const { isAuthenticated } = useSelector((state) => state.user);

  console.log(`Token: ${token}`);

  return (
    <>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <NavigationContainer>
        {token || isAuthenticated ? <ParentNavigate /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

export default Index;
