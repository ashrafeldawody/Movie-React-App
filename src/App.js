import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Movies from './pages/movies'
import Movie from './pages/movie'
import Favorites from './pages/favorites'
import Appbar from './layouts/appbar';
import React from 'react';

import { createTheme,ThemeProvider,CssBaseline } from '@mui/material'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Appbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movies/:page" element={<Movies />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
        </ThemeProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;
