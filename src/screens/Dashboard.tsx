import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Dashboard = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#dbd7d2'}}>
      <Text>{auth().currentUser?.email}</Text>
      <Button
        title="logout"
        onPress={async () => {
          await auth().signOut();
          // await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        }}
      />
    </View>
  );
};

export default Dashboard;

const style = StyleSheet.create({
  section: {
    width: 200,
    height: 50,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: 'red',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
});
