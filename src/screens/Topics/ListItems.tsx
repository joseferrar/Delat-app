import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../../components/Input/Input';
import useTheme from '../../hooks/useTheme';
import ArrayInput from '../../components/Input/ArrayInput';

const ListItems = () => {
  const theme = useTheme();
  return (
    <View style={{justifyContent: 'center'}}>
      {/* <Text>Notes</Text> */}
      <Input
        placeholder="List Name"
        color={theme.colors.text}
        style={{backgroundColor: theme.colors.border}}
      />
      <Text style={[styles.itemText, {color: theme.colors.text}]}>
        List Items
      </Text>
      <ArrayInput placeholder="1" />
      <ArrayInput placeholder="2" />
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  itemText: {
    marginLeft: 20,
    marginTop: 14,
    marginBottom: 8,
    fontFamily: 'Poppins-Bold',
  },
});
