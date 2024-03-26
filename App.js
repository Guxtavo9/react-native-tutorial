import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastrar from "./screens/Cadastrar";
import Editar from "./screens/Editar";
import ListUser from "./screens/ListUser";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      {
        /* Rest of your app code */
          <Stack.Navigator>
            <Stack.Screen name="Pricipal" component={ListUser} />
            <Stack.Screen name="Editar" component={Editar} />
            <Stack.Screen name="Cadastrar" component={Cadastrar} />
          </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
