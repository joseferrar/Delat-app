import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Dashboard from '../../../screens/Dashboard';
import Add from '../../../screens/Add';
import {tabActive} from '../../../utils/tabActive';
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
        tabBarIcon: ({focused, color, size}: any) => {
          return (
            <Image
              resizeMode="stretch"
              source={tabActive(route, focused)}
              style={
                route.name === 'Add' ? styles.plus_active : styles.plus_inactive
              }
            />
          );
        },

        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.colors.info,
          borderColor: theme.colors.border,
          borderWidth: 1,
          elevation: 4,
          height: 65,
          borderRadius: 12,
          bottom: 10,
          marginLeft: 12,
          marginRight: 12,
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
        options={{headerShown: false, tabBarLabel: 'Account'}}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;

const styles = StyleSheet.create({
  plus_active: {
    width: 60,
    height: 60,
    marginTop: -24,
    marginLeft: 4
  },
  plus_inactive: {
    width: 34,
    height: 34,
    marginTop: 8,
  },
});
