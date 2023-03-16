import React, { useState } from "react";
import AppStack from "./AppStack";
import DoctorStack from "./DoctorStack";
import NurseStack from "./NurseStack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ParentNavigate = () => {
  const [role, setRole] = useState(null);
  AsyncStorage.getItem("role").then((value) => setRole(value));
  console.log("ROLE: ", role);
  if (role === "admin") {
    return <AppStack />;
  } else if (role === "doctor") {
    return <DoctorStack />;
  } else if (role === "nurse") {
    return <NurseStack />;
  }
};

export default ParentNavigate;
