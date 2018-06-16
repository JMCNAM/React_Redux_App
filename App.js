/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
// -------------------------
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


  export default class App extends Component {

    componentWillMount(){
        console.log('App component will mount');
        // Initialize Firebase
          const config = {
              apiKey: 'AIzaSyCHX3Fum0rZf0DooWibB2pUDtwUl-yum3Q',
              authDomain: 'reactreduxappdb.firebaseapp.com',
              databaseURL: 'https://reactreduxappdb.firebaseio.com',
              projectId: 'reactreduxappdb',
              storageBucket: 'reactreduxappdb.appspot.com',
              messagingSenderId: '779039974697'
          };
          firebase.initializeApp(config);
          console.log('Firebase initialised');
    }
    render() {
        return (
          <Provider store={createStore(reducers)}>
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native!
            </Text>
              <Text style={styles.instructions}>
                To get started, edit App.js
            </Text>
              <Text style={styles.instructions}>
                Login Form
              </Text>
              <LoginForm />
            </View>
          </Provider>


        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

            //     



