import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import LoggedInHome from './LoggedInHome'; // Replace 'LoggedInHome' with your logged-in home screen component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoggedInHome" component={LoggedInHome} />
      </Stack.Navigator>
    </NavigationContainer>
    // <HomeScreen/>
  );
};

export default App;