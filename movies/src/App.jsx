import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./nav";
import Movie from "./movie";

function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const get = async () => {
      for (let i = 1; i <= 10; i++) {
        let id = Math.ceil(Math.random() * 9999999);
        //const url = ()=>
        await fetch(`http://www.omdbapi.com/?i=+tt${id}&apikey=272e6847`)
          .then((res) => res.json())
          .then((data) => {
            movieList.push(data);
            setMovieList([...movieList]);
          });
      }
    };
    get();
  }, []);

  return (
    <>
      <Nav changeMovie={(lock) => setMovieList(lock)} />
      <br />
      <main style={{ textAlign: "center" }}>
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
