import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import ArrowRightIcon from '../icons/ArowRightIcon';

type SelectListProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean | undefined;
  style?: ViewStyle;
};

const SelectList = ({title, onPress, disabled, style}: SelectListProps) => {
  return (
    <TouchableOpacity
      style={[styles.list, style]}
      onPress={onPress}
      disabled={disabled}>
      <View>
        <Text style={styles.listText}>{title}</Text>
      </View>
      <ArrowRightIcon width={40} height={40} color={'#000'} />
    </TouchableOpacity>
  );
};

export default SelectList;

const styles = StyleSheet.create({
  list: {
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listText: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
});
