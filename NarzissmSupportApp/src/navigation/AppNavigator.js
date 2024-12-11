import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import JournalScreen from '../screens/JournalScreen';
import ResourcesScreen from '../screens/ResourcesScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Journal" component={JournalScreen} />
            <Stack.Screen name="Resources" component={ResourcesScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;
