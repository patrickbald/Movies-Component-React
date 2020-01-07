import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  // state holds the data and information that will be used in the component
  state = {
    movies: getMovies() // initialize movies array
  };

  // to handle delete event
  // dont forget to add unique id to each movie element with key={}
  handleDelete = movie => {
    // create new movies array without the movie that was deleted using filer()
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    // reset the state to the new movies array
    this.setState({ movies: movies });
  };

  render() {
    if (this.state.movies.length === 0)
      return <p>There are no movies in the database</p>;

    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

// export the movies component to be used in App.js
export default Movies;
