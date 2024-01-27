import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import useTheme from '../../hooks/useTheme';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import TextButton from '../../components/Button/TextButton';
import IconButton from '../../components/Button/IconButton';
import {useAppDispatch} from '../../features';
import {GoogleService, LoginService} from '../../services/userService';
import KeyboardView from '../../components/Container/KeyboardView';
import {LoginValues} from '../../types/User';
import {loginValidate} from '../../utils/validate';

const Login = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const formik = useFormik<LoginValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidate,
    onSubmit: async (data: LoginValues) => {
      dispatch(LoginService(data));
    },
  });

  return (
    <KeyboardView style={styles.container}>
      <ScrollView contentContainerStyle={styles.section}>
        <Image
          source={require('../../assets/images/ic_launcher_round.png')}
          style={styles.img}
        />
        <Text style={[styles.heading, {color: theme.colors.text}]}>
          Continue to Delat!
        </Text>
        <Input
          placeholder="Email"
          color={theme.colors.text}
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          error={formik.touched.email && formik.errors.email}
        />
        <Input
          placeholder="Password"
          color={theme.colors.text}
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          error={formik.touched.password && formik.errors.password}
        />
        <TextButton
          title="Forgot Password?"
          onPress={theme.toggleTheme}
          style={styles.forgot_btn}
        />
        <Button
          title="Login"
          style={styles.button}
          onPress={formik.handleSubmit}
        />
        <Image
          source={
            theme.currentTheme === 'light'
              ? require('../../assets/images/divier.png')
              : require('../../assets/images/divier_dark.png')
          }
          style={styles.diverIcon}
        />
        <IconButton
          onPress={() => GoogleService()}
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
    </KeyboardView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
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
  forgot_btn: {
    marginLeft: 'auto',
    marginRight: 16,
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
