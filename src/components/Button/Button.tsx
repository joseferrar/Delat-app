import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useTheme from '../../hooks/useTheme';

type ButtonProps = {
  title?: string;
  onPress?: () => void;
  disabled?: boolean | undefined;
  style?: any;
};

const Button = ({onPress, title, disabled, style}: ButtonProps) => {
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
    borderRadius: 12,
    backgroundColor: '#6C63FF',
    paddingHorizontal: 50,
    paddingVertical: 12,
    margin: 14,
  },
  btnTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
});
