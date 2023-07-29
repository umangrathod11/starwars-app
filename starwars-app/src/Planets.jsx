import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import './Loader.css';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch planets data from the API
    fetch('https://swapi.dev/api/planets/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch planets data.');
        }
        return response.json();
      })
      .then((data) => {
        setPlanets(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Planets</h2>
      {loading ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Planet Id</th>
              <th>Name</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((planet, index) => (
              <tr key={planet.name}>
                <td>{index + 1}</td>
                <td>{planet.name}</td>
                <td>{planet.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Planets;
