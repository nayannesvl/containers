import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import TelaInicial from "./components/TelaInicial/Inicio";
import Console from "./components/Consoles/Consoles";
import Jogos from "./components/Jogos/Jogos";
import Xcloud from "./components/Xcloud/Xcloud";

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={ TelaInicial }/>
        <Stack.Screen name="Consoles" component={ Console }/>
        <Stack.Screen name="Jogos" component={ Jogos }/>
        <Stack.Screen name="XCloud" component={ Xcloud }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}