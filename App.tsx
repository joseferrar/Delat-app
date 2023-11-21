import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Dashboard from './src/screens/Dashboard';
import Add from './src/screens/Add';
import store from './src/features';
import Login from './src/screens/Auth/Login';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerStyle: {backgroundColor: '#4169E1'},
              headerTitleStyle: {color: '#fff'},
              headerTitle: 'Delat App',
            }}
          />
          <Stack.Screen name="Add" component={Add} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
