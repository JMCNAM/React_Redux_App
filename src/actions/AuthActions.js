import { Actions } from 'react-native-router-flux'
// Action types.
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED ,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START,
} from './types';
// Action creators
export const emailChanged = (text) => {
    // Action creator returns an action.
    console.log("EmailChanged action");
    return {
        type: EMAIL_CHANGED, // Link between action and reducer.
        payload: text
    };
};
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};
// Asynchronos action-creator.
export const loginUser = ({email, password}) => {
    const firebase = require("firebase");
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_START }); // Loading.
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( user => {
                loginUserSucces(dispatch, user);
            }).catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then( user => {
                    loginUserSucces(dispatch, user);
                }).catch( (error) => {
                    console.log(error); // firebase gotcha.
                    loginUserFail(dispatch);
                });
            }
        );
    };
};
// Helper Methods.
const loginUserSucces = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user      
    })
    Actions.main()
};
const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
};

