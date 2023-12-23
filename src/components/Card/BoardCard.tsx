import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import useTheme from '../../hooks/useTheme';

interface descObject {
  id: number;
  text: string;
}

type PostCardType = {
  title: string;
  onPress?: () => void;
  description: descObject[];
};

const BoardCard = ({title, description, onPress}: PostCardType) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.mainCardView,
        {
          backgroundColor: theme.colors.info,
          borderColor: theme.colors.border,
        },
      ]}>
      <View style={styles.card}>
        <Text style={[styles.title, {color: theme.colors.text}]}>{title}</Text>
        {description.map((item: descObject) => (
          <Text
            style={[styles.description, {color: theme.colors.text}]}
            key={item.id}>
            {`\u25CF  ${item.text}`}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default BoardCard;

const styles = StyleSheet.create({
  mainCardView: {
    minWidth: 160,
    backgroundColor: Colors.white,
    borderRadius: 15,
    elevation: 2,
    borderWidth: 1,
    marginTop: 12,
    marginBottom: 12,
    marginRight: 6,
    marginLeft: 6,
  },
  card: {
    marginLeft: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    color: Colors.black,
    textTransform: 'capitalize',
    marginTop: 6,
    marginLeft: 8,
    marginRight: 8,
    fontFamily: 'Poppins-Medium',
  },
  description: {
    fontSize: 14,
    color: Colors.black,
    lineHeight: 20,
    margin: 6,
    marginLeft: 8,
    marginRight: 8,
    fontFamily: 'Poppins-Regular',
  },
});
