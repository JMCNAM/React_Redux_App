import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
//import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import RouterComponent from './Router';

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
      // Send arg is for initial state.
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
          <Provider store={store}>
              <RouterComponent />
          </Provider>
        );
    }
}
 
