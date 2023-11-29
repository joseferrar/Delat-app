import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../../screens/Dashboard';

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerStyle: {backgroundColor: '#4169E1'},
          headerTitleStyle: {color: '#fff'},
          headerTitle: 'Delat App',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
