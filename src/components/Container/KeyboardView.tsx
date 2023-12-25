import {Keyboard, KeyboardAvoidingView, StyleSheet} from 'react-native';
import React from 'react';

const KeyboardView = ({children, style}: any) => {
  return (
    <KeyboardAvoidingView
      onTouchStart={() => Keyboard.dismiss()}
      style={[styles.container, style]}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },
});
