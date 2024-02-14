import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import useTheme from '../../hooks/useTheme';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean | undefined;
  style?: ViewStyle;
  textStyle?: TextStyle;
  varient?: 'primary' | 'secondary' | 'warning' | 'success' | 'danger';
};

const Button = ({
  onPress,
  title,
  disabled,
  style,
  varient,
  textStyle,
}: ButtonProps) => {
  const theme = useTheme();

  const colorMode = (colors: string | undefined) => {
    if (colors === 'primary') {
      return theme.colors.primary;
    } else if (colors === 'secondary') {
      return theme.colors.secondary;
    } else if (colors === 'warning') {
      return theme.colors.warning;
    } else if (colors === 'success') {
      return theme.colors.success;
    } else if (colors === 'danger') {
      return theme.colors.danger;
    } else {
      return '#000';
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, style, {backgroundColor: colorMode(varient)}]}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.btnTitle, textStyle, {color: theme.colors.default}]}>
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
    marginLeft: 14,
    marginRight: 14,
  },
  btnTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
});
