import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';

type ARRAY_INPUT = {
  value: string | undefined;
  placeholder: string | undefined;
  onChangeText: (value: string) => void;
  onClose: () => void;
};

const ArrayInput = ({
  placeholder,
  value,
  onChangeText,
  onClose,
}: ARRAY_INPUT) => {
  return (
    <View style={styles.input_container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgb(150,150,150)"
        onChangeText={onChangeText}
      />
      <TouchableOpacity activeOpacity={0.6} onPress={onClose}>
        <Image
          style={styles.right_icon}
          source={require('../../assets/images/close_icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ArrayInput;

const styles = StyleSheet.create({
  input_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#6C63FF',
    borderWidth: 2,
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 12,
    padddingRight: 12,
  },
  input: {
    color: '#000',
    fontSize: 14,
    width: '85%',
    height: 50,
    fontFamily: 'Poppins-Regular',
  },
  right_icon: {
    marginLeft: 'auto',
    width: 18,
    height: 18,
    borderRadius: 20,
    padding: 18,
  },
});
