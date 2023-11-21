import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import useTheme from '../../hooks/useTheme';

type InputProps = {
  value?: string | undefined;
  onChangeText?: ((e: string) => void) | undefined;
  placeholder?: string | undefined;
  disabled?: boolean | undefined;
  style?: any;
};

const Input = (props: InputProps) => {
  const {value, onChangeText, disabled, placeholder, style} = props;
  const theme = useTheme();
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      editable={disabled}
      placeholderTextColor={theme.colors.text}
      style={[styles.input, {color: theme.colors.text}, style]}
      onChangeText={onChangeText}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: '#6C63FF',
    // width: "95%",
    margin: 12,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
  },
});
