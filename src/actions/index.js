import { EMAIL_CHANGED } from './types';

export const emailChanged = (text) => {
    // Action creator returns an action.
    console.log("EmailChanged action");
    return {
        type: EMAIL_CHANGED, // Link between action and reducer.
        payload: text
    };
};