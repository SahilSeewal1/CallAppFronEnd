import React from 'react'
import CustomerList from './pages/CustomerList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import CustomerCalled from './pages/CustomerCalled';
import ErrorPage from './pages/ErrorPage';

const Stack = createStackNavigator()

function App(): JSX.Element {
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false,
      }}>
        <Stack.Screen
        name = 'Customer_List'
        component = { CustomerList }
        options={{header: ()=>null}}
        />

        <Stack.Screen
        name = 'Customer_Called'
        component = { CustomerCalled }
        options={{header: ()=>null}}
        />

        <Stack.Screen
        name = 'Error_Page'
        component = {  ErrorPage }
        options={{header: ()=>null}}
        />

        
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;
