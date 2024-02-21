import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Dashboard from '../../../screens/Dashboard';
import Add from '../../../screens/Add';
import TabActive, {tabActive} from './TabActive';
import useTheme from '../../../hooks/useTheme';
import Bookmark from '../../../screens/Bookmark';
import Accounts from '../../../screens/Accounts';
import Remainder from '../../../screens/Remainder';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route, navigation}): any => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused}: any) => {
          return TabActive(route, focused);
        },

        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.colors.info,
          borderColor: theme.colors.border,
          borderWidth: 0,
          elevation: 4,
          height: 65,
          borderRadius: 0,
          bottom: 0, //5
          marginLeft: 0, // 12
          marginRight: 0, // 12
        },
        tabBarLabelStyle: {
          color: navigation.isFocused()
            ? theme.colors.primary
            : theme.colors.text,
          fontFamily: 'Poppins-Bold',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Remainder"
        component={Remainder}
        options={{headerShown: false, tabBarLabel: 'Timer'}}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{headerShown: false, tabBarLabel: ''}}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{headerShown: false, tabBarLabel: 'Bookmark'}}
      />
      <Tab.Screen
        name="Accounts"
        component={Accounts}
        options={{headerShown: false, tabBarLabel: 'Settings'}}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;

const styles = StyleSheet.create({
  plus_active: {
    width: 40,
    height: 40,
    marginTop: 12,
    marginLeft: 4,
  },
  plus_inactive: {
    width: 28,
    height: 28,
    marginTop: 8,
  },
});
