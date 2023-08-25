import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, FontAwesome, Feather, AntDesign } from "@expo/vector-icons";

const HomeHeadNav = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [productData, setProductData] = useState([]);

  // console.log(productRef);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Ionicons name="reorder-three-sharp" size={35} color="black" />
        <Text style={styles.heading}>Discounts</Text>

        <TouchableOpacity>
          <FontAwesome name="bell-o" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <Feather name="search" size={24} color="green" />
        <TextInput
          placeholder="Search product"
          style={styles.searchbox}
          onChangeText={(text) => {
            setSearch(text);
          }}
        />
      </View>
      {search != "" && (
        <View style={styles.searchresultouter}>
          <FlatList
            style={styles.searchresultinner}
            data={productData}
            renderItem={({ item }) => {
              if (
                item.productName.toLowerCase().includes(search.toLowerCase())
              ) {
                return (
                  <View style={styles.searchresult}>
                    <AntDesign name="arrowright" size={24} color="black" />

                    <Text style={styles.searchresulttext}>
                      {item.productName}
                    </Text>
                  </View>
                );
              }
            }}
          />
        </View>
      )}
    </View>
  );
};

export default HomeHeadNav;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#ada4a3",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    Size: "25px",
    paddingBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingTop: 10,
  },
  search: {
    flexDirection: "row",
    padding: 7,
    backgroundColor: "white",
    marginBottom: 4,
    width: "95%",
    marginLeft: 8,
    borderRadius: 5,
  },
  searchbox: {
    marginLeft: 10,
    width: "90%",
    fontSize: 20,
  },
  image: {
    height: 50,
    width: 50,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
