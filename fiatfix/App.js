import 'react-native-gesture-handler'
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';

// You can import from local files
import Onboard from './components/Onboard';


// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}