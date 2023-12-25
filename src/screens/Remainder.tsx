import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

import KeyboardView from '../components/Container/KeyboardView';
import useTheme from '../hooks/useTheme';
import TimeCard from '../components/Card/TimerCard';
import SearchInput from '../components/Input/SearchInput';

const Remainder = () => {
  const theme = useTheme();
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };
  return (
    <KeyboardView style={{backgroundColor: theme.colors.background}}>
      <SearchInput />
      <TimeCard title="Client Meeting" date="33-34-233" type="Office" />
      <Text>
        {' '}
        {hours}:{minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}:
        {milliseconds.toString().padStart(2, '0')}
      </Text>
      <Button title={isRunning ? 'Stop' : 'Start'} onPress={startAndStop} />
      <Button title="Reset" onPress={reset} />
    </KeyboardView>
  );
};

export default Remainder;

const styles = StyleSheet.create({});
