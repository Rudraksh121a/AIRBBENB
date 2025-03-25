import { StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import { Stack } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import appartmant from "@assets/data/appartmant.json";
import CustomMarker from "@/components/core/custommarker";
import AppartmentListItem from "@/components/core/appartmentlistitem";

const HomeScreen = () => {
    const [selectedAppartmant, setselectedAppartmant] = useState(null)
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 22.7196,
          longitude: 75.8577,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {appartmant.map((appartmant) => (
          <CustomMarker key={appartmant.id} appartmant={appartmant} onPress={()=>setselectedAppartmant(appartmant)} />
        ))}

        {/* Display selected appartmant */}
      </MapView>
      
     {selectedAppartmant && <AppartmentListItem  appartmant={selectedAppartmant}/>}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  marker: {
    backgroundColor: "white",
    padding: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  markerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
