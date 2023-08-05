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
        <form>
        <label for='email'>Email:</label>
        <input type="email" id='email' name='email'></input>
        <label for='pwd'>Password:</label>
        <input type='password' id='password' name='password'></input>
        <button className='button'>OK</button>
        </form>

      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()}- {getfooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
