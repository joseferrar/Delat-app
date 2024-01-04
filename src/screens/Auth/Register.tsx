import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import useTheme from '../../hooks/useTheme';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {registerValidate} from '../../utils/validate';
import {RegisterValues} from '../../utils/ValueTypes';
import KeyboardView from '../../components/Container/KeyboardView';

const Register = (props: any) => {
  const {navigation} = props;
  const theme = useTheme();

  const formik = useFormik<RegisterValues>({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerValidate,
    onSubmit: async (data: RegisterValues) => {
      console.log(data);
    },
  });

  return (
    <KeyboardView style={{backgroundColor: theme.colors.background}}>
      <Image
        source={require('../../assets/images/login_img.png')}
        style={styles.img}
      />
      <Text style={[styles.heading, {color: theme.colors.text}]}>
        Welcome to Delat!
      </Text>
      <Input
        placeholder="Username"
        color={theme.colors.text}
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        error={formik.errors.username}
      />
      <Input
        placeholder="Email"
        color={theme.colors.text}
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        error={formik.errors.email}
      />
      <Input
        placeholder="Password"
        color={theme.colors.text}
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        error={formik.errors.password}
      />
      <Input
        placeholder="Confirm Password"
        color={theme.colors.text}
        secureTextEntry={true}
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange('confirmPassword')}
        error={formik.errors.confirmPassword}
      />
      <Button
        title="Submit"
        // onPress={theme.toggleTheme}
        onPress={formik.handleSubmit}
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
    </KeyboardView>
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
    marginTop: 12,
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
