// Action types.
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED 
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
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( user => {
                dispatch({
                    type: 'LOGIN_USER_SUCESS',
                    payload: user
                });
            });
    };
};
