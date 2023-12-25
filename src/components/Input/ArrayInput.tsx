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
  placeholder: string;
};

const ArrayInput = ({placeholder}: ARRAY_INPUT) => {
  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgb(150,150,150)"
        //   onChangeText={e => changeHandler(e)}
      />
      <TouchableOpacity activeOpacity={0.6}>
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
    fontSize: 16,
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
