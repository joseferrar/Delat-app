import {StyleSheet, TextInput, ViewStyle} from 'react-native';
import React from 'react';

type InputProps = {
  value?: string | undefined;
  onChangeText?: ((e: string) => void) | undefined;
  placeholder?: string | undefined;
  disabled?: boolean | undefined;
  style?: ViewStyle;
  color: string | undefined;
  secureTextEntry?: boolean;
};

const Input = (props: InputProps) => {
  const {
    value,
    onChangeText,
    disabled,
    placeholder,
    style,
    color,
    secureTextEntry,
  } = props;

  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      editable={disabled}
      placeholderTextColor={color}
      secureTextEntry={secureTextEntry}
      style={[styles.input, {color: color}, style]}
      onChangeText={onChangeText}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: '#6C63FF',
    // width: "95%",
    marginBottom: 8,
    marginTop: 8,
    marginLeft: 14,
    marginRight: 14,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    fontFamily: 'Poppins-Light',
    paddingStart: 18,
  },
});
