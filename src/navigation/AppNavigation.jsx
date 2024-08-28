//importar icono
import { Icon } from "react-native-elements";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { AccountScreen } from "../screens/Account/AccountScreen";
import { screen } from "../Utils";
import React from "react";
import { RestaurantStack } from "./RestaurantStack";
import { FavoriteStack } from "./FavoriteStack";
import { RankingSctack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";

//inicializamos para que se pueda usar en toda la app
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      {/* ruta de navegacion Restaurante  */}
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Restaurantes" }}
      />


      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingSctack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoriteStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

//funcion uqe me devoldera los iconos de cada tab, navegacion
function screenOptions(router, color, size) {
  //los if, son muchos mas rapidos, que los swicth puedes usarsr cualquiera de los dos
  let iconoName;

  if (router.name === "RestaurantsTab") {
    iconoName = "compass-outline";
    color = color;
    size = size;
  } else if (router.name === "RankingsTab") {
    iconoName = "star-outline";
    color = color;
    size = size;
  } else if (router.name === "FavoritesTab") {
    iconoName = "heart-outline";
    color = color;
    size = size;
  } else if (router.name === "SearchTab") {
    iconoName = "magnify";
    color = color;
    size = size;
  } else if (router.name === "AccountTab") {
    iconoName = "home-outline";
    color = color;
    size = size;
  }

  return (
    <Icon
      type="material-community"
      name={iconoName}
      size={size}
      color={color}
    />
  );
}
