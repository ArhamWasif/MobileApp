import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/Navigations';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
const App = () => {
  return (
    <SafeAreaProvider>
       <Provider store={store}>
      <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
