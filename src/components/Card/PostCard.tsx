import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native';
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
const PostCard = ({title, description, onPress}: PostCardType) => {
  const theme = useTheme();
  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.mainCardView,
            {
              backgroundColor: theme.colors.info,
              borderColor: theme.colors.border,
            },
          ]}>
          <View style={styles.card}>
            <Text style={[styles.title, {color: theme.colors.text}]}>
              {title}
            </Text>
            {description.map((item: descObject) => (
              <Text
                style={[styles.description, {color: theme.colors.text}]}
                key={item.id}>
                {`\u25CF  ${item.text}`}
              </Text>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  mainCardView: {
    width: '50%',
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    borderWidth: 1,
    // justifyContent: 'space-between',
    paddingLeft: 1,
    paddingRight: 1,
    marginTop: 12,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
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
