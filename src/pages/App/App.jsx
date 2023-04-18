import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';

function App() {

  const [ user, setUser ] = useState(null)


  return (
    <div className="App">
      <h1>App</h1>
      { user ? (
        <>
          < NavBar />
          <Routes>
          </Routes>
        </>
      ) : (
        < LoginPage setUser={setUser} />
      )
      }
    </div>
  );
}

export default App;
