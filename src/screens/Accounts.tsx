import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Button from '../components/Button/Button';
import {useAppDispatch} from '../features';
import {showModal} from '../features/commonSlice';
import ConfirmModal from '../components/Modal/ConfirmModal';
import {Logout} from '../services/userService';

const Accounts = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text>{auth()?.currentUser?.displayName}</Text>
      <Button title="logout" onPress={() => dispatch(showModal(true))} />
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
