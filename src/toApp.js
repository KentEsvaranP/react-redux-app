import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';


const store = configureStore();


<Provider store={store}>

</Provider>

