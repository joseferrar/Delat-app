import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';
import SplashScreen from 'react-native-splash-screen';
import store from './src/features';
import {client} from './src/graphql/httpLink';
import {LogBox} from 'react-native';
import RootNavigation from './src/components/navigation/stack/RootNavigation';
LogBox.ignoreLogs(['new NativeEventEmitter']);

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
