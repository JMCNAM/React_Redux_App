import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Setting a timer']);
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
//import firebase from 'firebase';
import reducers from './reducers';

import firebase from 'firebase';
import RouterComponent from './Router';
  export default class App extends Component {

    componentWillMount(){
        // const firebase = require("firebase");// Fix for firebase import.
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
      // Send arg is for initial state.
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
          <Provider store={store}>
              <RouterComponent/>
          </Provider>
        );
    }
}
 
