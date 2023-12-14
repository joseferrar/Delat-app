import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import useTheme from '../../hooks/useTheme';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import TextButton from '../../components/Button/TextButton';
import IconButton from '../../components/Button/IconButton';

const Login = ({navigation}: any) => {
  const theme = useTheme();
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  GoogleSignin.configure({
    webClientId:
      '593672927589-ee90f9j0j9iab8eevuujgiitcfik8jb3.apps.googleusercontent.com',
    offlineAccess: true,
  });

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken, user} = await GoogleSignin.signIn();
    // if (idToken && user) {
    //   navigation.navigate('Dashboard');
    // }
    console.log('idToken', idToken);
    console.log('user', user);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('googleCredential', googleCredential);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <ScrollView contentContainerStyle={styles.section}>
        <Image
          source={require('../../assets/images/login_img.png')}
          style={styles.img}
        />
        <Text style={[styles.heading, {color: theme.colors.text}]}>
          Continue to Delat!
        </Text>
        <Input placeholder="Email" color={theme.colors.text} />
        <Input
          placeholder="Password"
          color={theme.colors.text}
          secureTextEntry={true}
        />
        <TextButton
          title="Forgot Password?"
          onPress={theme.toggleTheme}
          style={styles.forgot_btn}
        />
        <Button title="Login" style={styles.button} />
        <Image
          source={
            theme.currentTheme === 'light'
              ? require('../../assets/images/divier.png')
              : require('../../assets/images/divier_dark.png')
          }
          style={styles.diverIcon}
        />
        <IconButton
          onPress={onGoogleButtonPress}
          title="Login with Google"
          icon={require('../../assets/images/google_logo.png')}
          containerStyle={styles.google}
        />

        <View style={styles.footer}>
          <Text style={[styles.footer_inner, {color: theme.colors.text}]}>
            Create a new account ?
          </Text>
          <Text
            style={styles.footer_btn}
            onPress={() => navigation.navigate('Register')}>
            Sign Up
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  img: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 240,
    height: 200,
  },
  button: {
    margin: 12,
  },
  forgot_btn: {
    marginLeft: 'auto',
    marginRight: 14,
    marginTop: 8,
  },
  diverIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 4,
    width: '85%',
  },
  heading: {
    textAlign: 'center',
    margin: 12,
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  google: {
    backgroundColor: '#DDDDDD',
    borderColor: '#DDDDDD',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 12,
  },
  footer_inner: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  footer_btn: {
    color: '#6C63FF',
    marginLeft: 6,
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
});
