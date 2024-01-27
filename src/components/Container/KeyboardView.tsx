import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import useTheme from '../../hooks/useTheme';

const KeyboardView = ({children, style}: any) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  const theme = useTheme();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: theme.colors.background}}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={keyboardVerticalOffset}
        onTouchStart={() => Keyboard.dismiss()}
        style={[styles.container, style]}>
        {children}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default KeyboardView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },
});
