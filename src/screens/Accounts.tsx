import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Button from '../components/Button/Button';
import {useAppDispatch} from '../features';
import {showModal} from '../features/commonSlice';
import ConfirmModal from '../components/Modal/ConfirmModal';
import {Logout} from '../services/userService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Accounts = () => {
  const dispatch = useAppDispatch();
  const removeFC = async () => {
    await AsyncStorage.removeItem('my-key');
  };
  console.log(AsyncStorage.getItem('my-key'));

  return (
    <View style={styles.container}>
      <Text>{auth()?.currentUser?.displayName}</Text>
      <Button title="logout" onPress={() => dispatch(showModal(true))} />
      <Button title="remove Token" onPress={() => removeFC()} />
      <ConfirmModal onSubmit={() => dispatch(Logout())} />
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
