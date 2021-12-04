import * as types from './actionTypes';

export function enableNotification(type, message) {
    return {
        type: types.ENABLE_NOTIFICATION,
        message,
        value: type
    };
}

export function disableNotification() {
    return {
        type: types.DISABLE_NOTIFICATION
    };
}