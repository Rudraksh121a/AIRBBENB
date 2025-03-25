import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const AppartmentListItem = ({ appartmant }: any) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: appartmant.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{appartmant.title}</Text>
        <Text style={styles.description}>stay on this appartmant for an affordable price</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>{appartmant.price}</Text>
          <Text style={styles.rating}>
          ★ {appartmant.rating} /{appartmant.number_of_stars} stars
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AppartmentListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 70,
    left: 10,
    right: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",

    justifyContent: "space-between",
    marginTop: "auto",
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description:{
    fontSize:16,
    color:"gray",
    
  },
  rightContainer:{
    flex:1,
    paddingLeft:10,
  }
});
