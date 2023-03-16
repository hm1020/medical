import React from "react";
import Doctor from "../screens/Doctor";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

const DoctorStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="doctor" component={Doctor} />
    </Drawer.Navigator>
  );
};

export default DoctorStack;
