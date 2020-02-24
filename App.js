import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './List'
import Photos from './Photos'
import Imgview from './Imgview'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <List navigation={navigation} />
    </View>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Albums" component={HomeScreen} />
        <Stack.Screen name="Details" component={Photos} />
        <Stack.Screen name="Imgview" component={Imgview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
