import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardPage from './Page/BoardPage';
import SplashScreen from './Page/SplashScreen';
import SignUp from './Page/SignUp';
import SignIn from './Page/SignIn';
import Homepage from './Page/HomePage';
import ListTrip from './Page/ListTrip';
import TripDetail from './Page/TripDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoardPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BoardPage" component={BoardPage} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="HomePage" component={Homepage} />
        <Stack.Screen name="ListTrip" component={ListTrip} />
        <Stack.Screen name="TripDetail" component={TripDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );}