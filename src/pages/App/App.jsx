import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import { movies } from '../../data';


function App() {

  const [ user, setUser ] = useState(null)


  return (
    <div className="App">
      { user ? (
        <>
          < NavBar user={user} />
          <Routes>
            <Route path="/" element={< MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={< MovieDetailPage/>} />
            <Route path="/actors" element={< ActorListPage/>} />
          </Routes>
        </>
      ) : (
        <Routes>
          < Route path="/" element={<LoginPage setUser={setUser} />} />
        </Routes>
      )
      }
    </div>
  );
}

export default App;
