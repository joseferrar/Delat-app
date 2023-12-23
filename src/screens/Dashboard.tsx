import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import useTheme from '../hooks/useTheme';
import {testData} from '../utils/data';
import {Modal} from '../components/Modal';
import SumbitButton from '../components/Button/Button';
import TextButton from '../components/Button/TextButton';
import ConfirmModal from '../components/Modal/ConfirmModal';
import {useAppDispatch} from '../features';
import {showModal} from '../features/commonSlice';
import SearchInput from '../components/Input/SearchInput';
import KeyboardView from '../components/Container/KeyboardView';
import BoardList from '../components/List/BoardList';

const Dashboard = ({navigation}: any) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const logOut = async () => {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    await auth().signOut();
    dispatch(showModal(false));
  };
  return (
    <KeyboardView style={{backgroundColor: theme.colors.background}}>
      {/* <Text style={{color: theme.colors.text, textAlign: 'center'}}>
        {auth().currentUser?.email}
      </Text> */}
      <SearchInput />
      {/* <Button title="logout" onPress={() => dispatch(showModal(true))} />
      <Button title="Dark mode" onPress={theme.toggleTheme} /> */}
      <BoardList data={testData} navigation={navigation} />
      <ConfirmModal onSubmit={logOut} />
    </KeyboardView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
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
