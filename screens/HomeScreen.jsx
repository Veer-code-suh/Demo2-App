import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  View,
  Button,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import HomeHeadNav from "../src/components/HomeHeadNav";
import BottomNav from "../src/components/BottomNav";

const HomeScreen = ({ navigation }) => {
  const products = [
    {
      id: 1,
      name: "Offer Name",
      discount: "% Discount Type",
      description: "Offer description goes here. ",
      price: "80",
      image: require("../Images/img.png"),
    },
    {
      id: 2,
      name: "Offer Name",
      discount: "% Discount Type",
      description: "Offer description goes here. ",
      price: "10",
      image: require("../Images/img.png"),
    },
    {
      id: 3,
      name: "Offer Name",
      discount: "% Discount Type",
      description: "Offer description goes here. ",
      price: "80",
      image: require("../Images/img.png"),
    },
    {
      id: 4,
      name: "Offer Name",
      discount: "% Discount Type",
      description: "Offer description goes here. ",
      rice: "10",
      image: require("../Images/img.png"),
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setSearchQuery(query);
  };

  const handleProductPress = (product) => {
    navigation.navigate("Product", { product });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)}>
      <View style={styles.cartcard}>
        <Image source={item.image} style={styles.img} />
        <View style={styles.cartcardin}>
          <View style={styles.c1}>
            <Text style={styles.txt1}>{item.name}</Text>
            <Text style={styles.txt2}>{item.discount}</Text>
            <Button
              onPress={() => handleProductPress(item)}
              title="View Offer"
              color="#ada4a3"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <HomeHeadNav navigation={navigation} />

      <StatusBar />
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <BottomNav navigation={navigation} />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cartcard: {
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 10,
    width: "95%",
    alignSelf: "center",
    elevation: 10,
  },
  c1: {
    marginLeft: 20,
  },
  txt1: {
    fontSize: 25,
    fontWeight: "500",
    marginTop: 20,
  },
  txt2: {
    fontSize: 19,
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 20,
  },
  img: {
    width: 170,
    borderWidth: 2,
    borderColor: "#a6a3a2",
    borderRadius: 5,
    height: 170,
  },
  btn: {
    backgroundColor: "blue",
    width: 100,
    marginTop: 20,
  },
});
