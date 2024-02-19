import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Dispatch} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {IsLoading, showModal} from '../features/commonSlice';
import {getLists} from '../features/listSlice';
import {ListValues} from '../types/FormValues';

const AddList = (data: ListValues) => async (dispatch: Dispatch) => {
  try {
    dispatch(IsLoading(true));
    await firestore()
      .collection('lists')
      .doc(auth()?.currentUser?.uid)
      .collection('list')
      .add(data);
    dispatch(IsLoading(false));
  } catch (err: any) {
    Alert.alert(err.message);
  }
};

const GetList =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      // dispatch(IsLoading(true));
      const data = await firestore()
        .collection('lists')
        .doc(auth()?.currentUser?.uid)
        .collection('list')
        .get();
      const setData: any = data.docs.map(doc => ({...doc.data(), id: doc.id}));
      dispatch(getLists(setData));
      dispatch(IsLoading(false));
    } catch (err: any) {
      Alert.alert(err.message);
    }
  };

const DeleteList = (id: string) => async (dispatch: Dispatch | any) => {
  try {
    await firestore()
      .collection('lists')
      .doc(auth()?.currentUser?.uid)
      .collection('list')
      .doc(id)
      .delete();
    dispatch(GetList());
    dispatch(showModal(false));
  } catch (err: any) {
    Alert.alert(err.message);
  }
};

export {AddList, GetList, DeleteList};
