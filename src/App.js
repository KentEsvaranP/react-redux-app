import logo from './logo.svg';
import './App.css';
import LoginUseReducer from './login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginUseReducer/>
      </header>
    </div>
  );
}

export default App;
