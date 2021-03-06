const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'field': {
        return {
          ...state,
          [action.fieldName]: action.payload,
        };
      }
      case 'login': {
        return {
          ...state,
          error: '',
          isLoading: true,
        };
      }
      case 'success': {
        return {
          ...state,
          isLoggedIn: true,
          isLoading: false,
        };
      }
      case 'error': {
        return {
          ...state,
          error: 'Incorrect username or password!',
          isLoggedIn: false,
          isLoading: false,
          username: '',
          password: '',
        };
      }
      case 'logOut': {
        return {
          ...state,
          isLoggedIn: false,
        };
      }
      default:
        return state;
    }
  }
export default LoginReducer;