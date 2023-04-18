import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

function App() {

  const [ user, setUser ] = useState(null)
  return (
    <div className="App">
      <h1>App</h1>
      <>
        < NavBar />
      </>
    </div>
  );
}

export default App;
