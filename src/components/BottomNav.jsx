import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto, AntDesign } from "@expo/vector-icons";

const BottomNav = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon1}>
        <Fontisto name="wallet" size={24} color="black" />
        <Text>Points</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon2}>
        <AntDesign name="tag" size={24} color="black" />
        <Text>Discount</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon1}>
        <FontAwesome5 name="user-cog" size={24} color="black" />
        <Text>Services</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon1}>
        <MaterialCommunityIcons
          name="book-open-page-variant"
          size={24}
          color="black"
        />
        <Text>History</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#918b8a",
    width: "99%",
    height: "7%",
  },
  icon1: {
    color: "#00ffcc",
    opacity: 0.3,
  },
  icon2: {
    color: "#00ffcc",
  },
});
