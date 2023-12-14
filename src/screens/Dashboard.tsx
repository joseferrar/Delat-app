import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import PostCard from '../components/Card/PostCard';
import useTheme from '../hooks/useTheme';
import {testData} from '../utils/data';
import {Modal} from '../components/Modal';
import SumbitButton from '../components/Button/Button';
import TextButton from '../components/Button/TextButton';
import ConfirmModal from '../components/Modal/ConfirmModal';
import {useAppDispatch} from '../features';
import {showModal} from '../features/commonSlice';

const Dashboard = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const logOut = async () => {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    await auth().signOut();
    dispatch(showModal(false));
  };
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text style={{color: theme.colors.text, textAlign: 'center'}}>
        {auth().currentUser?.email}
      </Text>
      <Button title="logout" onPress={() => dispatch(showModal(true))} />
      <Button title="Dark mode" onPress={theme.toggleTheme} />
      <PostCard title="Todo list" description={testData} />
      <ConfirmModal onSubmit={logOut} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    width: 200,
    height: 50,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: 'red',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Light',
    textTransform: 'capitalize',
  },
});
