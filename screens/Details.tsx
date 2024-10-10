import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type detailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

function Details({route, navigation}: detailsProps) {

    const {username, password} = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Details Page</Text>
      <Text style={styles.headerText}>Your login Details :</Text>
      <Text style={styles.usernameText}>Username : {username}</Text>
      <Text style={styles.usernameText}>Password : {password}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  inputBox: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#333',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    marginBottom: 5,
    // textAlign: 'center',
  },
  usernameText:{
    fontSize: 19,
    fontWeight: '600',
    color: '#333',
    marginTop: 5,
    marginBottom: 5,
    // textAlign: 'center',
  }
});

export default Details;
