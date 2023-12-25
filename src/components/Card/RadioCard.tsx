import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type RadioProps = {
  children: string | JSX.Element | JSX.Element[];
  style: ViewStyle;
};

const RadioCard = ({children, style}: RadioProps) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default RadioCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 15,
    elevation: 2,
    borderWidth: 0,
    marginTop: 12,
    marginBottom: 12,
    marginRight: 30,
    marginLeft: 30,
    height: 'auto',
    flexWrap: 'wrap',
  },
});
