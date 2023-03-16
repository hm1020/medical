import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { COlORS } from "../../assets/theme";

const CustomTextInput = ({ keyboardType, placeholder, name, onChangeText }) => {
  return (
    <View style={styles.form_group}>
      <TextInput
        style={styles.form_control}
        keyboardType={keyboardType}
        placeholder={placeholder}
        name={name}
        onChangeText={(value) => onChangeText(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form_group: {
    width: "100%",
    marginBottom: 15,
  },
  form_control: {
    padding: 15,
    borderRadius: 7,
    backgroundColor: COlORS.opacityColor,
    width: "100%",
    alignItems: "center",
    fontWeight: "bold",
  },
});

export default CustomTextInput;
