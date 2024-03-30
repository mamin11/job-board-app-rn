import React from 'react';
import HomeScreen from '@screens/HomeScreen';
import ProfileScreen from '@screens/ProfileScreen';
import JobDetailScreen from '@screens/JobDetailScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={
                    {
                        headerShown: false
                    }
                } />
            <Stack.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={
                    {
                        headerShown: false
                    }
                }
                />
            <Stack.Screen 
                name="Job Details" 
                component={JobDetailScreen} 
                options={
                    {
                        headerShown: false
                    }
                }/>
        </Stack.Navigator>
    );
}

export default AppNavigator;