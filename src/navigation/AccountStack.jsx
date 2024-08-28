import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../Utils";
import { AccountScreen } from "../screens/Account/AccountScreen";


const Stack = createNativeStackNavigator();



export function AccountStack() {

    return (

        <Stack.Navigator>

            <Stack.Screen
                name={screen.account.account}
                component={AccountScreen}
                options={{ title: "account" }}
            />


        </Stack.Navigator>

    );
}