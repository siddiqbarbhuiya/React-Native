import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabView, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import BrowserView from "./BrowserView";
import AppSetting from "./AppSetting";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const AppSettingsStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Browser" component={BrowserView} />
    </HomeStack.Navigator>
  );
}

function AppSettingsStackScreen() {
  return (
    <AppSettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <AppSettingsStack.Screen name="Setting" component={AppSetting} />
    </AppSettingsStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
        <Tab.Screen name="AppSetting" component={AppSettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/* function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Browser" component={Browser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} */

export default App;

/*
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home'
import Browser from './Browser'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Browser" component={Browser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

*/
