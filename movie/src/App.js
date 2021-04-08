import React from "react";

function App() {
  const movies = [
    { title: "minicho1", year: 2001 },
    { title: "minicho2", year: 2002 },
    { title: "minicho3", year: 2003 },
    { title: "minicho4", year: 2004 },
  ];
  const renderMovies = movies.map((movie) => {
    return (
      <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );
  }); // map을 쓰면 array에서 Item을 하나씩 가져와서 원하는 형태로 변경 가능.
  return (
    <div className="App">
      <h1>Movie List</h1>
      {renderMovies}
      {/* <div className="movie">
        <div className="movie-title">{movies[0].title}</div>
        <div className="movie-year">{movies[0].year}</div>
      </div>
      <div className="movie">
        <div className="movie-title">{movies[1].title}</div>
        <div className="movie-year">{movies[1].year}</div>
      </div>
      <div className="movie">
        <div className="movie-title">{movies[2].title}</div>
        <div className="movie-year">{movies[2].year}</div>
      </div>
      <div className="movie">
        <div className="movie-title">{movies[3].title}</div>
        <div className="movie-year">{movies[3].year}</div>
      </div> */}
    </div>
  );
}

export default App;
