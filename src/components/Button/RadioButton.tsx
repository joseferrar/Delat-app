import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';

type RADIO_BUTTON = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  label: string;
  selectedValue: string;
};

const RadioButton = ({value, onChange, label, selectedValue}: RADIO_BUTTON) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChange(value)}
      activeOpacity={0.8}>
      <View style={styles.radio}>
        {value === selectedValue ? <View style={styles.checked} /> : null}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 12,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#6C63FF',
  },
  label: {
    marginLeft: 6,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#000',
    letterSpacing: 0.8,
  },
});
