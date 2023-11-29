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

const Register = (props: any) => {
  const {navigation} = props;
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
          Welcome to Delat!
        </Text>
        <Input placeholder="Username" color={theme.colors.text} />
        <Input placeholder="Email" color={theme.colors.text} />
        <Input
          placeholder="Password"
          color={theme.colors.text}
          secureTextEntry={true}
        />
        <Input
          placeholder="Confirm Password"
          color={theme.colors.text}
          secureTextEntry={true}
        />
        <Button
          title="Submit"
          // onPress={theme.toggleTheme}
          style={styles.button}
        />

        <View style={styles.footer}>
          <Text style={[styles.footer_inner, {color: theme.colors.text}]}>
            Already Registered ?
          </Text>
          <Text
            style={styles.footer_btn}
            onPress={() => navigation.navigate('Login')}>
            Sign In
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
  },
  button: {
    margin: 12,
  },
  heading: {
    textAlign: 'center',
    margin: 12,
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
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
