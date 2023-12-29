import {GoogleSignin} from '@react-native-google-signin/google-signin';

const GoogleConfig = () => {
  GoogleSignin.configure({
    webClientId:
      '593672927589-ee90f9j0j9iab8eevuujgiitcfik8jb3.apps.googleusercontent.com',
    offlineAccess: true,
  });
};
export {GoogleConfig};
