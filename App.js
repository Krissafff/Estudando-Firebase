import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home/index';
import Cadastrar from './src/pages/Cadastrar';

const Stack = createStackNavigator();

export default function App(){
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Cadastrar" component={Cadastrar}/>
    </Stack.Navigator>
    </NavigationContainer>
);
}