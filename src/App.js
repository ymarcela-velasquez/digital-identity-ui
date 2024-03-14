import logo from './assets/identidad.png';
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { RegisterForm } from './components/RegisterForm';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { SideNavigation } from './components/SideNavigation';
import { Transfer } from './components/Transfer';
import { Service } from './components/Service';
import { Contest } from './components/Contest';
import { Document } from './components/Document';

function App() {

  const [user, setUser] = useState([])

  return (
    <Router >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ color: '#186077', fontSize: '36px', fontWeight: 'bold' }}>Identidad Digital</p>
          {
            !user.length > 0 ? ( <> <Login setUser={setUser}/> 
            <p>¿No tienes una cuenta? <a href="#" onClick={() => setUser('register')}>Regístrate aquí</a></p>
            </>) : (
              <>
              <Home user={user} setUser={setUser}/>
              <SideNavigation/>
              <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/documents' element={<Document/>} />
                <Route path='/transfer-request' element={<Transfer/>} />
                <Route path='/services' element={<Service/>} />
                <Route path='/participate-contests' element={<Contest/>} />
              </Routes>
              </>

            )
          }        
          {user === 'register' && <RegisterForm setUser={setUser} />}
        </header>
      </div>
    </Router>
  );
}

export default App;
