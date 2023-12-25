import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RadioButton from '../components/Button/RadioButton';
import {topics} from '../utils/topic';
import RadioCard from '../components/Card/RadioCard';
import KeyboardView from '../components/Container/KeyboardView';

const Add = () => {
  const [title, setTitle] = useState('');
  return (
    <KeyboardView>
      <RadioCard style={{marginTop: 22}}>
        {topics.map(({topic, id}) => (
          <RadioButton
            key={id}
            value={title}
            label={topic}
            onChange={() => setTitle(topic)}
            selectedValue={topic}
          />
        ))}
      </RadioCard>
    </KeyboardView>
  );
};

export default Add;

const styles = StyleSheet.create({});
