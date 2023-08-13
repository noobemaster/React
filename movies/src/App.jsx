import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./nav";
import Movie from "./movie";

function App() {
  const [movieList, setMovieList] = useState([]);
  const getaMovie = () => {
    for (let i = 1; i <= 10; i++) {
      let id = Math.ceil(Math.random() * 9999999);
      const url = `http://www.omdbapi.com/?i=+tt${id}&apikey=272e6847`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let movie = movieList.push(data);
          setMovieList([...movie]);
        });
    }
    console.log(movieList.length);
  };
  //getaMovie();
  const getMovie = async () => {
    let id = Math.ceil(Math.random() * 9999999);
    const url = `http://www.omdbapi.com/?i=+tt${id}&apikey=272e6847`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    for (let i = 1; i <= 10; i++) {
      getMovie()
        .then((data) => {
          let movie = movieList.push(data);
          setMovieList([...movie]);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }, []);
  return (
    <>
      <Nav changeMovie={(lock) => setMovieList(lock)} />
      <br />
      <main style={{ textAlign: "center" }} onLoad={getMovie}>
        <button onClick={getMovie} className="btn btn-primary">
          GET RANDOM MOVIE
        </button>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {movieList.map((movie) => {
            return <Movie movie={movie} />;
          })}
        </div>
      </main>
    </>
  );
}

export default App;
