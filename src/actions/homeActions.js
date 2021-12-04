import { beginAjaxCall } from './ajaxStatusActions';
import * as types from './homeActionTypes';
import { enableNotification } from './notificationActions';

export function loadHomePageSuccess(data) {
    return {type: types.LOAD_HOME_PAGE_SUCCESS, homePagedata: data};
}

export function loadHomePage() {
    return dispatch => {
        dispatch(beginAjaxCall('get groups'));
        dispatch(loadHomePageSuccess('Home page loaded successfully!'));
        // return homeService.getHomePageAPImethod()
        //     .then((result) => {
        //         dispatch(loadHomePageSuccess(result));
        //     })
        //     .catch(() => {
        //         dispatch(enableNotification('critical', 'failed to load home page'));
        //     });
    };
}