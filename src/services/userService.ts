import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GoogleConfig} from '../utils/config';
import auth from '@react-native-firebase/auth';
import {Dispatch} from '@reduxjs/toolkit';
import {IsLoading, showModal} from '../features/commonSlice';
import {LoginValues, RegisterValues} from '../types/User';
import {client} from '../graphql/httpLink';
import {REGISTER_QUERY} from '../graphql/mutations/userMutation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {errorToast, successToast} from '../utils/toast';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }
}

const GoogleService = async () => {
  GoogleConfig();
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
  successToast({
    title: 'Logout Successfully',
    description: 'Come back soon!',
  });
};

const RegisterService =
  (value: RegisterValues) => async (dispatch: Dispatch) => {
    // dispatch(IsLoading(true));

    await auth()
      .createUserWithEmailAndPassword(value.email, value.password)
      .then(result => {
        result?.user?.updateProfile({
          displayName: value.username,
          photoURL:
            'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1638883125/my%20photo/user_icon_yizbqh.png',
        });
        const userInput = {
          username: value.username,
          email: value.email,
          photoUrl:
            'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1638883125/my%20photo/user_icon_yizbqh.png',
        };

        client.mutate({
          mutation: REGISTER_QUERY,
          variables: {userInput: userInput},
        });
        result?.user?.getIdToken().then(userId => {
          console.log('result', userId);
          AsyncStorage.setItem('my-key', userId);
        });
      })
      .catch(error => {
        errorToast({
          title: 'Invalid user credentials',
          description: getErrorMessage(error),
        });
        console.log(getErrorMessage(error));
        dispatch(IsLoading(false));
      });
  };

const LoginService = (value: LoginValues) => async (dispatch: Dispatch) => {
  // dispatch(IsLoading(true));
  await auth()
    .signInWithEmailAndPassword(value.email, value.password)
    .then(result => {
      // dispatch({type: LOGIN, payload: result});
      dispatch(IsLoading(false));
      successToast({
        title: 'Welcome back!',
        description: String(result?.user?.displayName),
      });
      console.log(result.user);
    })
    .catch(error => {
      errorToast({
        title: 'Invalid user credentials',
        description: getErrorMessage(error),
      });
      dispatch(IsLoading(false));
      console.log(getErrorMessage(error));
    });
};

export {GoogleService, Logout, RegisterService, LoginService};
