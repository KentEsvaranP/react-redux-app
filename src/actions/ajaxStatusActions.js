import * as types from './actionTypes';

export function beginAjaxCall(action_name) {
    return { type: types.BEGIN_AJAX_CALL + action_name.toUpperCase() };
}

export function ajaxCallError() {
    return { type: types.AJAX_CALL_ERROR };
}