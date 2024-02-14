import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Dispatch} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {IsLoading} from '../features/commonSlice';

const AddList = (data: any) => async (dispatch: Dispatch) => {
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

export {AddList};
