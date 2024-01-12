import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../../screens/Auth/Login';
import Register from '../../../screens/Auth/Register';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
