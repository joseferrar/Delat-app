import {StyleSheet, Image, View, ActivityIndicator} from 'react-native';
import React from 'react';

const CircleSpinner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/loading-46.gif')}
        style={styles.spinner}
      />
    </View>
  );
};

export default CircleSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  spinner: {
    marginLeft: 50,
    marginRight: 50,
  },
});
