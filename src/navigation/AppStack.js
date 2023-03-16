import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import Home from "../screens/Home";
import Nurses from "../screens/Admin/Nurses";
import Doctors from "../screens/Admin/Doctors";

const Drawer = createDrawerNavigator();

const AppStack = ({ logout }) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="doctors" component={Doctors} />
      <Drawer.Screen name="nurses" component={Nurses} />
    </Drawer.Navigator>
  );
};

export default AppStack;
