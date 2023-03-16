import React, { useEffect } from "react";
import { View, Text } from "react-native";
import UseLogout from "../../utils/useLogout";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../../state/user/doctorSlice";

const Doctors = () => {
  const { doctorsList, loading, error } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  const [token] = UseLogout();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  return (
    <View>
      <Text>{loading ? "Loading" : "Doctors"}</Text>
    </View>
  );
};

export default Doctors;
