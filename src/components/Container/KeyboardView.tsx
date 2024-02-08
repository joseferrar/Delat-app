/* eslint-disable react-native/no-inline-styles */
import {
  Keyboard,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import React from 'react';
import useTheme from '../../hooks/useTheme';

type KeyboardViewType = {
  children: any;
  style?: ViewStyle;
};

const KeyboardView = ({children, style}: KeyboardViewType) => {
  const theme = useTheme();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[{flex: 1, backgroundColor: theme.colors.background}, style]}>
        {children}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.colors.background,
  },
});
