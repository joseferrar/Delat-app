import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useTheme from '../../hooks/useTheme';

type ButtonProps = {
  title?: string;
  onPress?: () => void | undefined;
  disabled?: boolean | undefined;
  style?: any;
};

const Button = (props: ButtonProps) => {
  const {onPress, title, disabled, style} = props;
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.btnTitle, {color: theme.colors.default}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: '#6C63FF',
    paddingHorizontal: 50,
    paddingVertical: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
