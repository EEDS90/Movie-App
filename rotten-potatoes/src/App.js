import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Components/Movie';
import './App.css';

const Movie_API = "http://www.omdbapi.com/?i=tt3896198&apikey=4d77e518&"
const Search_API = "http://www.omdbapi.com/?i=tt3896198&apikey=4d77e518&"

// this array displays all the information used for the Movies.
function App() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch(Movie_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });  

  }, []);

  return (
    <div className= "movie-container">
      {movies.length > 0 &&
         movies.map((movie) => <Movie key={movie}
      {...movie} />)}
    </div>
  );

} 

export default App;
