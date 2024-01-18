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
import React, {useState, useEffect} from 'react';
import Voice from '@react-native-voice/voice';

const SearchInput = ({search, setSearch}: any) => {
  const [text, setText] = useState<any>('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    Voice.onSpeechResults = (e: any) => {
      console.log('Speech results:', e.value[0]);
      setSearch(e.value[0] || '');
      stopListening();
      setIsListening(false);
    };

    Voice.onSpeechEnd = () => {
      setIsListening(false);
    };
    Voice.onSpeechError = () => {
      setIsListening(false);
    };
  }, []);

  const stopListening = () => {
    setIsListening(false);
    Voice.stop();
  };

  const startListening = () => {
    setIsListening(true);
    Voice.start('en-US');
  };

  console.log('isListening', search);

  return (
    <View style={styles.input_container}>
      <TouchableOpacity activeOpacity={0.5} disabled>
        <Image
          style={styles.icon}
          source={require('../../assets/images/menu.png')}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={'Search'}
        placeholderTextColor="rgb(150,150,150)"
        value={search}
        onChangeText={(e: any) => setSearch(e)}
      />

      {/* <TouchableOpacity activeOpacity={0.5} onPress={stopListening}>
        <Image
          source={require('../../assets/images/dots_blue.gif')}
          style={{width: 40, height: 40}}
        />{' '}
      </TouchableOpacity> */}

      <TouchableOpacity activeOpacity={0.5} onPress={startListening}>
        {/* <Image
          style={styles.right_icon}
          source={{uri: auth()?.currentUser?.photoURL || ''}}
        /> */}
        <Image
          source={isListening ?  require('../../assets/images/dots_blue.gif') :require('../../assets/images/mic.png') }
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
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
