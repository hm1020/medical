import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoginUser } from "../../state/auth/authSlice";
import { TouchableOpacity } from "react-native";

import { StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { COlORS, SIZES } from "../../../assets/theme";
import CustomTextInput from "../../components/CustomTextInput";

const Login = ({ navigation }) => {
  const { loading, user, isAuthenticated, message } = useSelector(
    (state) => state.user
  );

  if (message) {
    Toast.show({
      type: "error",
      text1: message,
    });
  }

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formData = {
    username,
    password,
  };

  const onSubmit = () => {
    dispatch(LoginUser(formData));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Welcome Back</Text>
      {/* <Image
        style={styles.image}
        source={require("../../assets/logo1.jpg")}
        resizeMethod="auto"
      /> */}

      <CustomTextInput
        name="username"
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={(username) => setUsername(username)}
      />
      <CustomTextInput
        name="password"
        keyboardType="email-address"
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
      />
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <TouchableOpacity style={styles.form_control} onPress={onSubmit}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  form_control: {
    padding: 15,
    borderRadius: 7,
    backgroundColor: COlORS.primary,
    width: "100%",
    alignItems: "center",
  },

  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: SIZES.height * 0.2,
    borderRadius: SIZES.radius,
    marginVertical: SIZES.height * 0.05,
  },
});
