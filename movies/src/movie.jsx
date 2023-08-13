const Movie = ({ movie }) => {
  let { Title, Year, Genre, Plot, Poster, Rated, Released, Ratings } = movie;
  return (
    <>
      {Poster &&
        (Poster === "N/A" ? (
          ""
        ) : (
          <div className="card" style={{ maxWidth: 540, marginRight: 30 }}>
            <div className="row g-2">
              <div className="col-md-4">
                <img
                  src={Poster}
                  className="img-fluid rounded-start"
                  alt="movie poster"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title"></h3>
                  <div className="card-text">
                    <h5>{Title}</h5>
                    <h6>Year: {Year} </h6>
                    <h6>Rated: {Rated}</h6>
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
