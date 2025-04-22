import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import Home from './Home';
import NavigationScreen from './NavigationScreen';
import PoliceStationScreen from './PoliceStationScreen';
import MessageScreen from './screens/MessageScreen';
import NotificationScreen from './screens/NotificationScreen';
import SettingScreen from './SettingScreen';
import LogoutScreen from './LogoutScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: true,
          drawerStyle: {
            backgroundColor: '#FFB6C1',
            width: 240,
          },
          drawerActiveTintColor: '#000000',
          drawerInactiveTintColor: '000000',
          drawerLabelStyle: {
            fontSize: 16,
          },
        }}
      >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Navigation" component={NavigationScreen} />
        <Drawer.Screen name="Police Station" component={PoliceStationScreen} />
        <Drawer.Screen name="Messages" component={MessageScreen} />
        <Drawer.Screen name="Notification" component={NotificationScreen} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
        <Drawer.Screen name="Logout" component={LogoutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}