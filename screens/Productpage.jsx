import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import BottomNav from "../src/components/BottomNav";

const ProductDetails = ({ navigation, route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imgbox}>
        <View style={styles.boxhead}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <MaterialIcons name="arrow-back-ios" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.heading}>Merchant Profile</Text>
        </View>
        <Image source={product.image} style={styles.img} />
        <View style={styles.dpbox}>
          <Image source={product.image} style={styles.imgDP} />
          <View>
            <Text style={styles.dptext}>Merchant Name</Text>
            <Text style={styles.cato}>(Category)</Text>
          </View>
        </View>
      </View>
      <View style={styles.detail}>
        <Text style={styles.discount}>{product.discount}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.desc}>{product.description}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontxt}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "green",
  },
  imgbox: {
    width: "100%",
    height: "50%",
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#bdbbb5",
  },
  boxhead: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 90,
    marginTop: 15,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },

  img: {
    width: "30%",
    height: "30%",
    alignSelf: "center",
    top: "20%",
    borderRadius: 10,
  },
  imgDP: {
    width: "25%",
    height: "45%",
    top: "45%",
    marginLeft: 10,
    borderRadius: 100,
  },
  dptext: {
    fontSize: 20,
    left: 120,
    fontWeight: "bold",
    top: 20,
    color: "white",
  },
  cato: {
    fontSize: 20,
    left: 120,
    top: 20,
    color: "white",
  },
  detail: {
    height: "40%",
    marginLeft: 10,
    marginTop: 10,
    gap: 23,
  },
  discount: {
    fontSize: 25,
    fontWeight: "500",
    opacity: 0.5,
  },
  name: {
    fontSize: 28,
    fontWeight: "500",
  },
  desc: {
    fontSize: 17,
    opacity: 0.5,
  },
  button: {
    backgroundColor: "#c9c8c3",
    alignSelf: "center",
    width: "95%",
    color: "white",
    borderRadius: 5,
  },
  buttontxt: {
    textAlign: "center",
    fontSize: 22,
    paddingVertical: 15,
    fontWeight: "700",
    color: "white",
  },
});
