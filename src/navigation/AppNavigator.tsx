import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import EmployeeDetailScreen from '../screens/EmployeeDetailScreen';
import EmployeeListScreen from '../screens/EmployeeListScreen';
import SplashScreen from '../screens/SplashScreen';
import { RootStackParamList } from '../types/navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="EmployeeList" component={EmployeeListScreen} />
      <Stack.Screen name="EmployeeDetail" component={EmployeeDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
