import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import useTheme from '../../hooks/useTheme';
import {useAppDispatch} from '../../features';
import {showModal} from '../../features/commonSlice';
import {DeleteList} from '../../services/ListService';

interface descObject {
  id: number;
  item: string;
}

type BoardCardProps = {
  id: string;
  title: string;
  onPress?: () => void;
  description: descObject[];
};

const BoardCard = ({id, title, description, onPress}: BoardCardProps) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  return (
    <TouchableOpacity
      onLongPress={() => dispatch(DeleteList(id))}
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
        {description.map((itemData: descObject, i: number) =>
          itemData.item === '' ? (
            <Text key={i} style={styles.error}>
              No item
            </Text>
          ) : (
            <Text
              style={[styles.description, {color: theme.colors.text}]}
              key={i}>
              {`\u25CF  ${itemData.item}`}
            </Text>
          ),
        )}
      </View>
    </TouchableOpacity>
  );
};

export default BoardCard;

const styles = StyleSheet.create({
  mainCardView: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 15,
    elevation: 2,
    borderWidth: 1,
    marginTop: 12,
    marginBottom: 12,
    marginRight: 6,
    marginLeft: 6,
    paddingBottom: 40,
    flexWrap: 'wrap',
  },
  card: {
    marginLeft: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 17,
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
  error: {
    marginTop: 12,
    marginBottom: 6,
    textAlign: 'center',
  },
});
