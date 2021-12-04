import { render } from 'react-dom';
import { bindActionCreators, connect } from 'redux';

const HomePage = (props) => {

    if(props.isLoggeindUSer)
    props.loadHomePage();
    /**your JSX ***/
    return ('');
}

/***HOC examples***/
const matchDispatchToProps = (dispatch) => {
    /**U can use manyactions with bindActionCreators */
    return bindActionCreators({
        loadHomePage
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        homePagedata: state.homePagedata
        /**You can get previously added stored data for home page like login and themes data 
        loggedinUSer: state.loggedinUSer
        selectedTheme: state.theme.selectedTheme*/
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(HomePage);

/***Hooks examples ****/
/***way 1 react-redux hooks***/
import React, { useEffect, useState, Fragment, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default HomePage = () => {
    const firstName = useSelector(state => state.userFirstName);
    const lastName = useSelector(state => state.userLastName);
    const dob = useSelector(state => state.userDob);

    const dispatch = useDispatch();
    /**your JSX ***/
    return (
      <>
         <div>{firstName}</div>
         <div>{lastName}</div>
         <div>{dob}</div>
         <button onClick={dispatch({type: "SET_USER_FIRST_NAME", payload: "Kent"})}></button>
         <button onClick={dispatch({type: "SET_USER_LAST_NAME", payload: "P"})}></button>
      </>
    );
}


/**way 3**/
/*we can see the login page example...*/
useReducer