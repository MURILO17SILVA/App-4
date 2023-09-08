import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/pages/HomeScreen";
import SalarioMes from "./src/pages/SalarioMes";
import CalculadoraDia from "./src/pages/CalculadoraDia";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ 
            title: "Página Inicial", 
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen 
          name="IMCScreen" 
          component={SalarioMes}
          options={{ 
            title: "Calcular IMC", 
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen 
          name="CalculadoraDia" 
          component={CalculadoraDia} 
          options={{ 
            title:  "CalculadoraDia", 
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
