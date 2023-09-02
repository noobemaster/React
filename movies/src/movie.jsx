const Movie = ({ movie }) => {
  const {
    Title,
    Year,
    Genre,
    Plot,
    Poster,
    Rated,
    Released,
    Ratings,
    imdbID,
    totalSeasons,
  } = movie;
  return (
    <>
      {Poster &&
        (Poster === "N/A" ? (
          ""
        ) : (
          <div
            key={imdbID}
            className="card"
            style={{ maxWidth: 540, marginRight: 30 }}
          >
            <div className="row g-2">
              <div className="col-md-4" style={{ paddingTop: 20 }}>
                <img
                  src={Poster}
                  className="img-fluid rounded-start"
                  alt="movie poster"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{Title}</h3>
                  <div className="card-text">
                    <h5></h5>
                    <h6>Year: {Year} </h6>
                    <h6>Rated: {Rated}</h6>
                    {totalSeasons && <h6>N.o seasons: {totalSeasons}</h6>}
                    <h6>Genre: {Genre}</h6>
                    <h6>Release date: {Released}</h6>
                    <h6>
                      Ratings: {Ratings.length ? Ratings[0].Value : " N/A"}
                    </h6>
                    <br />
                    <h6>Plot</h6>
                    {Plot}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
export default Movie;
