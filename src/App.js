import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
import { createStore } from 'redux';
//import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


  export default class App extends Component {

    componentWillMount(){
        console.log('App component will mount');
        const firebase = require("firebase");// Fix for firebase import.
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
              <LoginForm />
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
