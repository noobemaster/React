import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./nav";
import Movie from "./movie";

function App() {
  const [movieList, setMovieList] = useState([]);
  const get = () => {
    for (let i = 1; i <= 5; i++) {
      let id = Math.ceil(Math.random() * 9999999);
      fetch(`http://www.omdbapi.com/?i=+tt${id}&apikey=272e6847`)
        .then((res) => res.json())
        .then((data) => {
          movieList.unshift(data);
          setMovieList([...movieList]);
        });
    }
  };
  localStorage.setItem("movie", [movieList]);
  useEffect(() => get(), []);
  return (
    <>
      <Nav changeMovie={(lock) => setMovieList(lock)} />
      <br />
      <main style={{ textAlign: "center" }}>
        <button
          onClick={get}
          className="btn btn-primary"
          style={{ marginBottom: 10 }}
        >
          GET RANDOM FILM
        </button>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {movieList &&
            movieList.length > 0 &&
            movieList.map((movie) => {
              return <Movie movie={movie} />;
            })}
        </div>
      </main>
    </>
  );
}

export default App;
