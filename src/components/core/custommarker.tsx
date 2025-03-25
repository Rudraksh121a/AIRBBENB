import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

const CustomMarker = ({ appartmant, onPress }: { appartmant: any, onPress: () => void }) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: appartmant.latitude,
        longitude: appartmant.longitude,
      }}
    >
      <View style={styles.markerContainer}>
        <View style={styles.marker}>
          <Text style={styles.markerText}>{appartmant.price}</Text>
        </View>
      </View>
    </Marker>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({
  markerContainer: {
  
    elevation: 5, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  marker: {
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",

 
  },
  markerText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
