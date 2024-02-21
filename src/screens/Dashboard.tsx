import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import useTheme from '../hooks/useTheme';
import {RootState, useAppDispatch} from '../features';
import SearchInput from '../components/Input/SearchInput';
import BoardList from '../components/List/BoardList';
import {useSelector} from 'react-redux';
import {GetList} from '../services/ListService';
import {ListValues} from '../types/FormValues';

const Dashboard = ({navigation}: any) => {
  const {listData} = useSelector((state: RootState) => state.lists);
  const [search, setSearch] = useState('');
  const theme = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetList());
  }, [dispatch]);

  const results = !search
    ? null
    : listData?.filter((item: ListValues) =>
        item?.name.toLowerCase().includes(search.toLocaleLowerCase()),
      );

  console.log('results', listData);

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      {/* <Text style={{color: theme.colors.text, textAlign: 'center'}}>
        {auth().currentUser?.email}
      </Text> */}
      <SearchInput search={search} setSearch={setSearch} />
      {/* <Button title="logout" onPress={() => dispatch(showModal(true))} />
      <Button title="Dark mode" onPress={theme.toggleTheme} /> */}
      <BoardList
        data={results === null ? listData : results}
        navigation={navigation}
      />
      {/* <ConfirmModal onSubmit={logOut} /> */}
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
