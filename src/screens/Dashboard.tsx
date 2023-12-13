import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import PostCard from '../components/Card/PostCard';
import useTheme from '../hooks/useTheme';
import {testData} from '../utils/data';

const Dashboard = () => {
  const theme = useTheme();
  return (
    <View style={[style.container, {backgroundColor: theme.colors.background}]}>
      <Text style={{color: theme.colors.text, textAlign: 'center'}}>
        {auth().currentUser?.email}
      </Text>
      <Button
        title="logout"
        onPress={async () => {
          await auth().signOut();
          // await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        }}
      />
      <Button title="Dark mode" onPress={theme.toggleTheme} />
      <PostCard title="Todo list" description={testData} />
    </View>
  );
};

export default Dashboard;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
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
