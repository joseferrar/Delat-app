import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GoogleConfig} from '../utils/config';
import auth from '@react-native-firebase/auth';
import {Dispatch} from '@reduxjs/toolkit';
import {showModal} from '../features/commonSlice';
import {string} from 'yup';
import {RegisterValues} from '../types/User';

const GoogleService = async () => {
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the users ID token
  const {idToken, user} = await GoogleSignin.signIn();
  // if (idToken && user) {
  //   navigation.navigate('Dashboard');
  // }
  console.log('idToken', idToken);
  console.log('user', user);

  // Create a Google credential with the token
  const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
  console.log('googleCredential', googleCredential);
  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

const Logout = () => async (dispatch: Dispatch) => {
  dispatch(showModal(false));
  // GoogleConfig();
  // await GoogleSignin.revokeAccess();
  // await GoogleSignin.signOut();
  await auth().signOut();
};

export const RegisterService =
  (value: RegisterValues) => async (dispatch: Dispatch) => {
    await auth()
      .createUserWithEmailAndPassword(value.email, value.password)
      .then(result => {
        // dispatch({type: REGISTER, payload: result});
        console.log('result', result.user.getIdToken());

        result?.user?.updateProfile({
          displayName: value.username,
          photoURL:
            'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1638883125/my%20photo/user_icon_yizbqh.png',
        });
      })
      .catch((error): any => {
        console.log(error.message);
      });
  };
export {GoogleService, Logout};
