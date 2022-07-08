import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Splash from './Screens/splash';
import Signup from './Screens/signup';
import SignupWithMobile from './Screens/signupWithMobile';
import SignupOtp from './Screens/Signup_Otp';
import Login from './Screens/login';


export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={Splash}
          header={null}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignupWithMobile" component={SignupWithMobile}></Stack.Screen>
        <Stack.Screen name="Signup_Otp" component={SignupOtp}></Stack.Screen>
        <Stack.Screen name="login" component={Login}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

