import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type ButtonProps = {
  title?: string;
  onPress?: () => void;
  disabled?: boolean | undefined;
  style?: any;
};

const TextButton = ({onPress, title, disabled, style}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.btnTitle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    color: '#6C63FF',
  },
  btnTitle: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: '#6C63FF',
  },
});
