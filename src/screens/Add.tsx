import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RadioButton from '../components/Button/RadioButton';
import {topics} from '../utils/topic';
import RadioCard from '../components/Card/RadioCard';
import KeyboardView from '../components/Container/KeyboardView';
import Notes from './Topics/Notes';
import ListItems from './Topics/ListItems';
import Timer from './Topics/Timer';

const Add = () => {
  const [title, setTitle] = useState('ListItems');
  return (
    <KeyboardView>
      <RadioCard style={styles.radioAlign}>
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
      {title === 'Notes' && <Notes />}
      {title === 'ListItems' && <ListItems />}
      {title === 'Timer' && <Timer />}
    </KeyboardView>
  );
};

export default Add;

const styles = StyleSheet.create({
  radioAlign: {
    marginTop: 22,
  },
});
