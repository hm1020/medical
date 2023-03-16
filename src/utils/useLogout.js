import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const UseLogout = () => {
  const [token, setToken] = useState(null);
  AsyncStorage.getItem("token").then((value) => setToken(value));

  const logout = () => {
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("role");
    setToken(null);
  };
  return [token, logout];
};

export default UseLogout;
