import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../Utils";
import { RankingScreen } from "../screens/RankingScreen";


const Stack = createNativeStackNavigator();



export function RankingSctack() {

    return (

        <Stack.Navigator>

            <Stack.Screen
                name={screen.ranking.rankings}
                component={RankingScreen}
                options={{ title: "Ranking" }}
            />


        </Stack.Navigator>

    );
}