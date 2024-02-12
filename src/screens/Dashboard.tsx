import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import useTheme from '../hooks/useTheme';
import {testData} from '../types/data';
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
  const [search, setSearch] = useState('');
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const logOut = async () => {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    await auth().signOut();
    dispatch(showModal(false));
  };

  const results = !search
    ? null
    : testData.filter(item =>
        item?.title.toLowerCase().includes(search.toLocaleLowerCase()),
      );

  console.log('results', results);

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      {/* <Text style={{color: theme.colors.text, textAlign: 'center'}}>
        {auth().currentUser?.email}
      </Text> */}
      <SearchInput search={search} setSearch={setSearch} />
      {/* <Button title="logout" onPress={() => dispatch(showModal(true))} />
      <Button title="Dark mode" onPress={theme.toggleTheme} /> */}
      <BoardList
        data={results === null ? testData : results}
        navigation={navigation}
      />
      <ConfirmModal onSubmit={logOut} />
    </View>
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
