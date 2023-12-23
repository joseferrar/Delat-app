import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import React from 'react';

const SearchInput = () => {
  return (
    <View style={styles.input_container}>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/menu.png')}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={'search'}
        placeholderTextColor="rgb(150,150,150)"
        //   onChangeText={e => changeHandler(e)}
      />
      <Image
        style={styles.right_icon}
        source={{uri: auth()?.currentUser?.photoURL || ''}}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  input_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 12,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  input: {
    color: '#000',
    fontSize: 16,
    width: '73%',
    alignSelf: 'center',
    height: 50,
  },
  icon: {
    marginRight: 12,
    alignSelf: 'flex-start',
  },
  right_icon: {
    marginLeft: 'auto',
    width: 18,
    height: 18,
    alignSelf: 'center',
    borderRadius: 20,
    padding: 18,
  },
});
