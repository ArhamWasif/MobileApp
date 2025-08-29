import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from '../Screens/home/Home.tsx';
import Profile from '../Screens/profile/Profile.tsx';
import {THomeStack} from './types/types.ts';
import {Keyboard} from 'react-native';
import CustomBottomBar from '../Components/CustomBottomBar/CustomBar.tsx';

const Stack = createNativeStackNavigator<THomeStack>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
useEffect(() => {
  // Add listeners for keyboard show and hide events
  const keyboardDidShowListener = Keyboard.addListener(
    'keyboardDidShow',
    () => {
      setKeyboardVisible(true); // Hide the BottomTabBar when the keyboard shows
    },
  );
  const keyboardDidHideListener = Keyboard.addListener(
    'keyboardDidHide',
    () => {
      setKeyboardVisible(false); // Show the BottomTabBar when the keyboard hides
    },
  );
  // Cleanup the listeners on unmount
  return () => {
    keyboardDidHideListener.remove();
    keyboardDidShowListener.remove();
  };
}, []);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      tabBar={props => {
        return isKeyboardVisible ? null : <CustomBottomBar {...props} />;
      }}>
      <Tab.Screen name="Home" component={home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
