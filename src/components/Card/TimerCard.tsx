import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type TimeCardProps = {
  title: string;
  date?: string;
  type?: string;
  onPress?: () => void;
};

const TimeCard = ({title, date, type, onPress}: TimeCardProps) => {
  return (
    <View style={styles.mainCardView}>
      <View>
        <View style={{marginLeft: 12, marginBottom: 12}}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.type}>{`\u25CF  ${type}`}</Text>
            <Text style={styles.date}>08:30:00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimeCard;

const styles = StyleSheet.create({
  mainCardView: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
    flexDirection: 'row',
    paddingLeft: 1,
    paddingRight: 1,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: 'Poppins-Regular',
    lineHeight: 24,
    margin: 4,
    marginTop: 12,
  },
  type: {
    fontSize: 14,
    color: 'blue',
    fontFamily: 'Poppins-Medium',
    lineHeight: 16,
    margin: 4,
  },
  date: {
    fontSize: 22,
    color: Colors.black,
    fontFamily: 'Poppins-Bold',
    lineHeight: 30,
    margin: 8,
  },
});
