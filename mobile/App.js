import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


import Login from './src/pages/Login'
import UpdateRoom from './src/pages/UpdateRoom'
import Configuration from './src/pages/Configuration'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#000720',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} />

        <Stack.Screen name="UpdateRoom" component={UpdateRoom} options={{
          title: 'Atualizar Sala',
          headerStyle: {
            backgroundColor: '#000720',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
        />
        <Stack.Screen name="Configuration" component={Configuration} options={{
          title: 'Painel de Salas',
          headerStyle: {
            backgroundColor: '#000720',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


