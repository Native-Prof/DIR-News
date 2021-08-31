import * as React from 'react';
import { Button, View, Text, ActionBarImage, Image, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from './components/HomeScreen'
import NewsCard from './components/NewsCard';
import Search from './components/Search'
import Test from './components/Test'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },

        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>

        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>

        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  headerLeft: {
    width: 50,
    height: 20,
  },
})