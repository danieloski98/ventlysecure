import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// components
import LandingPage from '../features/Landingpage/Pages'

const Stack = createStackNavigator();

export default function index() {
    return (
       <NavigationContainer>
           <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}>
               <Stack.Screen component={LandingPage} name="index" />
           </Stack.Navigator>
       </NavigationContainer>
    )
}
