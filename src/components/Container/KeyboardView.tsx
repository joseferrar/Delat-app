import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

const KeyboardView = ({children, style}: any) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView
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
