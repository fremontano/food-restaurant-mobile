import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";
import { screen } from "../Utils";
import { AddRestautant } from "../screens/Restaurants/AddRestautant";


const Stack = createNativeStackNavigator();



export function RestaurantStack() {

    return (

        <Stack.Navigator>
            <Stack.Screen
                name={screen.restaurant.restaurants}
                component={RestaurantsScreen}
                options={{ title: "Añadir Restaurante" }}
            />

            <Stack.Screen
                name={screen.restaurant.addRestaurant}
                component={AddRestautant}
                options={{ title: "Nuevo Restaurante" }}
            />

        </Stack.Navigator>

    );
}