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
import useTheme from '../../hooks/useTheme';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Login = ({navigation}: any) => {
  const theme = useTheme();
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

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
        <Input placeholder="Password" color={theme.colors.text} />
        <Button
          title="Submit"
          onPress={() => navigation.navigate('Register')}
          style={styles.button}
        />
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
  heading: {
    textAlign: 'center',
    margin: 12,
    fontSize: 24,
    fontFamily: 'Poppins-Light',
  },
});