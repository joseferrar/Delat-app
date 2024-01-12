import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
import store from './src/features';
import HomeNavigation from './src/components/navigation/stack/HomeNavigation';
import AuthNavigation from './src/components/navigation/stack/AuthNavigation';
import {Text} from 'react-native';
import {User} from '@react-native-google-signin/google-signin';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState<boolean>(true);
  const [loading, setLoading] = useState(true);

  function onAuthStateChanged(userInfo: User | any) {
    setLoading(true);
    setUser(userInfo);

    if (initializing) {
      setInitializing(false);
    }
    setLoading(false);
  }
  useEffect(() => {
    SplashScreen.hide();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {user ? <HomeNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
