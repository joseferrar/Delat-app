import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useTheme from '../../hooks/useTheme';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Login = () => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text>Login</Text>
      <Input placeholder="username" />
      <Button title="Submit" onPress={theme.toggleTheme} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderColor: '#6C63FF',
    // width: "95%",
    // marginLeft: 'center',
    // marginRight: 'center',
    margin: 12,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#26653A',
    paddingHorizontal: 50,
    paddingVertical: 15,
    margin: 12,
  },
  btnTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
