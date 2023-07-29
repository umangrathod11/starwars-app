import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import './Loader.css';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch films data from the API
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Films</h2>
      {loading ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Movie Id</th>
              <th>Title</th>
              <th>Director</th>
              <th>Producer</th>
            </tr>
          </thead>
          <tbody>
            {films.map((film, index) => (
              <tr key={film.title}>
                <td>{index + 1}</td>
                <td>{film.title}</td>
                <td>{film.director}</td>
                <td>{film.producer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Films;
