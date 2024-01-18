import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Voice from '@react-native-voice/voice';

const Bookmark = () => {
  const [text, setText] = useState<any>('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    Voice.onSpeechResults = (e: any) => {
      console.log('Speech results:', e.value[0]);
      setText(e.value[0]);
      stopListening();
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
    setText('');
  };

  const startListening = () => {
    setIsListening(true);
    Voice.start('en-US');
  };

  return (
    <View>
      <Text style={{fontSize: 22, color: 'green', textAlign: 'center'}}>
        {isListening ? 'Loadding...' : text}
      </Text>
      <Button title="start" onPress={startListening} />
      <Button title="stop" onPress={stopListening} />
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({});
