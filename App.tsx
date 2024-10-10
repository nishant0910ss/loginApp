//git add .
//git commit -m "MESSAGE"
//git push origin main


import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Details from './screens/Details';
import Settings from './screens/Settings';

export type RootStackParamList = {
  Login: undefined;
  Home: {username: string, password: string};
  Details: {username: string, password: string};
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login Screen'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home Screen'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Details Screen'}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{title: 'Settings Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
