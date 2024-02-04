import Toast from 'react-native-toast-message';

interface ToastMessage {
  title: string;
  description?: string;
}

const successToast = ({title, description}: ToastMessage) => {
  Toast.show({
    type: 'success',
    text1: title,
    position: 'bottom',
    autoHide: true,
    visibilityTime: 6000,
    text2: description,
    swipeable: true,
    text1Style: {fontSize: 16, fontFamily: 'Poppins-Regular'},
    text2Style: {fontSize: 12, fontFamily: 'Poppins-Light'},
  });
};

const errorToast = ({title, description}: ToastMessage) => {
  Toast.show({
    type: 'error',
    text1: title,
    position: 'bottom',
    autoHide: true,
    visibilityTime: 6000,
    text2: description,
    swipeable: true,
    text1Style: {fontSize: 16, fontFamily: 'Poppins-Regular'},
    text2Style: {fontSize: 12, fontFamily: 'Poppins-Light'},
  });
};

const infoToast = ({title, description}: ToastMessage) => {
  Toast.show({
    type: 'info',
    text1: title,
    position: 'bottom',
    autoHide: true,
    visibilityTime: 6000,
    text2: description,
    text1Style: {fontSize: 16, fontFamily: 'Poppins-Regular'},
    text2Style: {fontSize: 12, fontFamily: 'Poppins-Light'},
  });
};

export {successToast, errorToast, infoToast};
