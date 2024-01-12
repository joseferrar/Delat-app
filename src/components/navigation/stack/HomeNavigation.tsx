import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../../../screens/Dashboard';
import MyTabs from '../tab/TabNavigation';

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="Dashboard"
        component={MyTabs}
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
