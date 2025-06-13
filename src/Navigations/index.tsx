import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './mainstack/index';


const Navigation = () => {
  
  return (
    <NavigationContainer >
       <MainStack /> 
    </NavigationContainer>
  );
};
export default Navigation;


// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import profile from './secondProfile';
// import {Keyboard} from 'react-native';
// import CustomBottomBar from '../../components/CustomBottomBar';
// import Calendar from './calender/calender';
// import Home from './home/home';
// import {createStackNavigator} from '@react-navigation/stack';

// import {THomeStack} from '../../navigation/types/types.ts';

// import Password from '../password/index.tsx';
// import EditProfile from '../editProfile/index.tsx';
// import TaskDetails from '../taskDetails/index.tsx';
// import Notifications from '../notifications/index.tsx';
// // import Login from '../login/index.tsx';
// import EditDetails from '../editDetails/index.tsx';

// const Stack = createStackNavigator<THomeStack>();
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   const [isKeyboardVisible, setKeyboardVisible] = useState(false);
//   useEffect(() => {
//     // Add listeners for keyboard show and hide events
//     const keyboardDidShowListener = Keyboard.addListener(
//       'keyboardDidShow',
//       () => {
//         setKeyboardVisible(true); // Hide the BottomTabBar when the keyboard shows
//       },
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       'keyboardDidHide',
//       () => {
//         setKeyboardVisible(false); // Show the BottomTabBar when the keyboard hides
//       },
//     );
//     // Cleanup the listeners on unmount
//     return () => {
//       keyboardDidHideListener.remove();
//       keyboardDidShowListener.remove();
//     };
//   }, []);

//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false,
//       }}
//       tabBar={props => {
//         return isKeyboardVisible ? null : <CustomBottomBar {...props} />;
//       }}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Calendar" component={Calendar} />
//       <Tab.Screen name="Profile" component={profile} />
//       <Tab.Screen name="EditProfile" component={EditProfile} />
//       {/* <Tab.Screen name="Login" component={Login} /> */}
//       <Tab.Screen name="taskDetails" component={TaskDetails} />
//       <Tab.Screen name="EditDetails" component={EditDetails} />

//       <Tab.Screen name="Password" component={Password} />
//       <Tab.Screen name="Notifications" component={Notifications} />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;

