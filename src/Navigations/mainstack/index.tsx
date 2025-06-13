import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {THomeStack, TScreen} from '../types/types.ts';

import home from '../../Screens/home/Home.tsx';
import Profile from '../../Screens/profile/Profile.tsx';
import TabNavigator from '../bottomTabBar.tsx';
import Calendar from '../../Screens/calendar/Calendar.tsx';

const Stack = createNativeStackNavigator<THomeStack>();
const screens: TScreen<THomeStack>[] = [
  {
    key: 'TabNavigator',
    name: 'TabNavigator',
    component: TabNavigator,
  },

  {
    key: 'Home',
    name: 'Home',
    component: home,
  },

  {
    key: 'Profile',
    name: 'Profile',
    component: Profile,
  },
  {
    key: 'Calendar',
    name: 'Calendar',
    component: Calendar,
  },
];

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TabNavigator">
      {screens.map(s => (
        <Stack.Screen
          key={s.key}
          name={s.name}
          component={s?.component}
          options={s.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;
