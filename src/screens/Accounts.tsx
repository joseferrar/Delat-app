import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import Button from '../components/Button/Button';
import {useAppDispatch} from '../features';
import {showModal} from '../features/commonSlice';
import ConfirmModal from '../components/Modal/ConfirmModal';
import {Logout} from '../services/userService';
import useTheme from '../hooks/useTheme';
import AlermIcon from '../components/icons/AlermIcon';
import PenIcon from '../components/icons/PenIcon';
import Input from '../components/Input/Input';
import ArrowRightIcon from '../components/icons/ArowRightIcon';
import SelectList from '../components/List/SelectList';

const Accounts = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.displayName}>{auth()?.currentUser?.displayName}</Text>
      <Button title="logout" onPress={() => dispatch(showModal(true))} />
      <ConfirmModal onSubmit={() => dispatch(Logout())} /> */}
      <View style={[styles.topCard, {backgroundColor: '#393E46'}]}>
        <View
          style={{
            overflow: 'hidden',
            flexDirection: 'row',
            marginTop: 12,
          }}>
          <View>
            <Image
              source={{
                uri: 'https://cdn-icons-png.freepik.com/512/219/219988.png',
              }}
              style={{
                height: 110,
                width: 110,
                borderRadius: 80,
              }}
            />
          </View>
          <View style={{padding: 12, width: 110}}>
            <Text
              style={{
                color: '#A29F9E',
                paddingTop: 5,
                fontFamily: 'Poppins-Bold',
                fontSize: 18,
              }}>
              Hello,
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
              }}>
              {auth()?.currentUser?.displayName}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 30,
              borderWidth: 1,
              borderColor: '#fff',
              width: 30,
              height: 30,
              marginTop: 25,
              padding: 6,
              marginLeft: 'auto',
            }}>
            <PenIcon width={15} height={15} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomCard}>
        <ScrollView showsVerticalScrollIndicator={false} style={{padding: 12}}>
          <SelectList title="Change Password" />
          <Button
            title="logout"
            onPress={() => dispatch(showModal(true))}
            // style={{marginBottom: 80}}
          />
          <ConfirmModal onSubmit={() => dispatch(Logout())} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  token_btn: {
    marginTop: 16,
  },
  displayName: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'green',
    textAlign: 'center',
  },
  topCard: {
    flex: 0.8,
    padding: 12,
  },
  bottomCard: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 4,
    padding: 4,
    marginTop: -16,
  },
  heading: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
  },
});
