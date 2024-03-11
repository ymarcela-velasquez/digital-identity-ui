import logo from './assets/identidad.png';
import './App.css';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: '#186077', fontSize: '36px', fontWeight: 'bold' }}>Identidad Digital</p>
        {
          !user.length > 0 ? <Login setUser={setUser}/> : <Home user={user} setUser={setUser}/>
        }
      </header>
    </div>
  );
}

export default App;
