import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/Navigation/AppNavigation";
import { LogBox } from "react-native";//ignorar mensaje por consola
LogBox.ignoreAllLogs = true;

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}
