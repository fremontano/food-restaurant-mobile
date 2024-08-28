import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../Utils";

export function RestaurantsScreen(props) {


  const { navigation } = props;

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurant);
  };



  return (
    <View>
      <Text>RestaurantsScreen</Text>
      <Button title="Crear Restaurante" onPress={goToAddRestaurant} />
    </View>
  );
}
