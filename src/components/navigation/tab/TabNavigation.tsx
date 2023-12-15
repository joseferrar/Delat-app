import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, Image} from 'react-native';
import Dashboard from '../../../screens/Dashboard';
import Add from '../../../screens/Add';
import {tabActive} from '../../../utils/tabActive';
import useTheme from '../../../hooks/useTheme';


const Tab = createBottomTabNavigator();

function TabNavigation() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}): any => ({
        tabBarIcon: ({focused, color, size}: any) => {
          return (
            <Image resizeMode={'contain'} source={tabActive(route, focused)} />
          );
        },
        tabBarLabel: ({focused}: any) => (
          <Text
            style={{
              fontSize: 12,
              color: focused ? '#7210FF' : '#777',
              fontWeight: focused ? 'bold' : 'normal',
              display: 'none',
            }}>
            {route.name}
          </Text>
        ),
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.colors.info,
          borderColor: theme.colors.border,
          borderWidth: 1,
          elevation: 8,
          height: 60,
          borderRadius: 16,
          bottom: 10,
          marginLeft: 12,
          marginRight: 12,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Add" component={Add} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
