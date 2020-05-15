import * as React from 'react';
import {NavigationDrawerAction} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import SignIn from './src/screens/signin';
import SignUp from './src/screens/signup';
import ForgetPassword from './src/screens/forgetpassword';
import Loading from './src/screens/Loading';
import Homepage from './src/screens/Homepage';
import Profile from './src/screens/Profile';
import Aboutus from './src/screens/Aboutus';
import Settings from './src/screens/Settings';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function Root() {
  return (
    <Drawer.Navigator drawerStyle={{backgroundColor:'blue',marginTop:20,width:'70%'}}>
      <Drawer.Screen name="Profile"  component={Profile} />
      <Drawer.Screen name="Homepage" component={Homepage} />
      <Drawer.Screen name="Aboutus" component={Aboutus} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgetpassword" component={ForgetPassword} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Root" component={Root} screenOptions />
        <Stack.Screen name="Tab" component={MyTabs} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



