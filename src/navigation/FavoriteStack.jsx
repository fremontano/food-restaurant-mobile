import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../Utils";
import { FavoriteScreen } from "../screens/FavoriteScreen";


const Stack = createNativeStackNavigator();



export function FavoriteStack() {

    return (

        <Stack.Navigator>
            <Stack.Screen
                name={screen.favorites.favorites}
                component={FavoriteScreen}
                options={{ title: "Favorites" }}
            />
        </Stack.Navigator>

    );
}