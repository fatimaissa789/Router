import React from "react";
import AddMovie from "./AddMovie";
import Search from "./Search";
import Card from "./Card";
import { useState } from "react";
import { donnes } from "./MOCK_DATA";
import { Link } from "react-router-dom";

function Accueil() {
  const [movies, setMovies] = useState(donnes);
  const [searchMovies, setSearchWord] = useState("");

  const addMovie = (newMovie) => setMovies([...movies, newMovie]);
  const gestionSearch = (e) => setSearchWord(e.target.value);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>

      
      </nav>

      <Search gestionSearch={gestionSearch} />
      <Card
        movieArray={
          searchMovies
            ? movies.filter((movie) =>
                movie.Titre.toLocaleLowerCase().includes(
                  searchMovies.toLowerCase()
                )
              )
            : movies
        }
      />
      <AddMovie Add={addMovie} />
    </div>
  );
}

export default Accueil;
