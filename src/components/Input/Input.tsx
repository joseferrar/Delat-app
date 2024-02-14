import {
  StyleSheet,
  TextInput,
  ViewStyle,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import React from 'react';
import {FormikErrors} from 'formik';
import useTheme from '../../hooks/useTheme';

type InputProps = {
  value?: string | undefined;
  onChangeText?: ((e: string) => void) | undefined;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  placeholder?: string | undefined;
  disabled?: boolean | undefined;
  style?: ViewStyle;
  color: string | undefined;
  secureTextEntry?: boolean;
  error?: FormikErrors<string> | any;
};

const Input = (props: InputProps) => {
  const theme = useTheme();

  const {
    value,
    onChangeText,
    onBlur,
    disabled,
    placeholder,
    style,
    color,
    secureTextEntry,
    error,
  } = props;

  return (
    <>
      <TextInput
        value={value}
        placeholder={placeholder}
        editable={disabled}
        placeholderTextColor={color}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        style={[
          styles.input,
          {color: color, borderColor: error ? 'red' : theme.colors.primary},
          style,
        ]}
        onChangeText={onChangeText}
      />
      <Text style={styles.error}>{error}</Text>
    </>
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
  error: {
    fontSize: 12,
    color: 'red',
    marginLeft: 16,
    marginRight: 16,
    fontFamily: 'Poppins-Light',
  },
  border_false: {
    borderColor: 'red',
    borderWidth: 2,
  },
  border_true: {
    borderWidth: 2,
  },
});
