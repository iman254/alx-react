import logo from './Holberton-logo.jpg'
import './App.css';
import { getFullYear, getfooterCopy } from './utils';

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard    
        </h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()}- {getfooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
