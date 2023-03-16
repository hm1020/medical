import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native";

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        {/* <Image source={require("../assets/profile.jpg")} style={styles.img} /> */}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7452",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default CustomDrawer;
