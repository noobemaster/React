import { useState } from "react";

const Nav = ({ changeMovie }) => {
  const [movie, setmovie] = useState("");
  const find = () => {
    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=272e6847`)
      .then((res) => res.json())
      .then((data) => {
        changeMovie([data]);
      })
      .catch((err) => console.error("error:" + err));
    setmovie("");
  };
  function look(e) {
    setmovie(e.target.value);
  }
  return (
    <nav className="navbar bg-body-tertiary" id="nav">
      <div className="container-fluid">
        <h1 className="navbar-brand">
          <big>MOVIE CAVE</big>
        </h1>
        <span className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={movie}
            onChange={look}
          />
          <button className="btn btn-secondary" onClick={find}>
            Search
          </button>
        </span>
      </div>
    </nav>
  );
};
export default Nav;
