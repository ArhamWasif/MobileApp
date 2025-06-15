// import { ParamListBase, RouteProp } from '@react-navigation/native';
// import {
//     StackNavigationOptions,
//     StackNavigationProp,
//     StackScreenProps,
// } from '@react-navigation/stack';




export type THomeStack = {
    TabNavigator:undefined;
  
    Home:undefined;
    Profile:undefined;
       Calendar:undefined;
       SubScreen:undefined
    
   
};
// export type THomeScreen<T extends keyof THomeStack> = React.FC<
//     StackScreenProps<THomeStack, T>
// >;



// declare type ScreenComponentType<
//     ParamList extends ParamListBase,
//     RouteName extends keyof ParamList,
// > =
//     | React.ComponentType<{
//         route: RouteProp<ParamList, RouteName>;
//         navigation: StackNavigationProp<ParamList>;
//     }>
//     | React.ComponentType<{}>;


// export type TScreen<Stack extends ParamListBase> = {
//     //* commonly used.
//     key: React.Key;
//     name: keyof Stack;
//     component: ScreenComponentType<Stack, keyof Stack> | React.FC<any>;
//     options?: StackNavigationOptions;
    
// };

