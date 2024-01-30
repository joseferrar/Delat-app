import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {User} from '@react-native-google-signin/google-signin';
import {RootState, useAppDispatch} from '../../../features';
import HomeNavigation from '../../../components/navigation/stack/HomeNavigation';
import AuthNavigation from '../../../components/navigation/stack/AuthNavigation';
import CircleSpinner from '../../../components/Spinner/CircleSpinner';
import {IsLoading} from '../../../features/commonSlice';

function RootNavigation() {
  const {loading} = useSelector((state: RootState) => state.common);
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<User | null>(null);

  function onAuthStateChanged(userInfo: User | any) {
    dispatch(IsLoading(true));
    setUser(userInfo);
    dispatch(IsLoading(false));
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (loading) {
    return <CircleSpinner />;
  }

  return (
    <NavigationContainer>
      {user ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}

export default RootNavigation;
