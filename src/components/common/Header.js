import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../List';
import Photos from '../Photos';
import Imgview from '../Imgview';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#00BFFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignItems: 'center'
        },
      }}>
        <Stack.Screen name="Albums" component={List} />
        <Stack.Screen name="Details" component={Photos} />
        <Stack.Screen name="Imgview" component={Imgview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}