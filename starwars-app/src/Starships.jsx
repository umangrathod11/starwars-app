import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import './Loader.css'
const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true); // Add the loading state


  useEffect(() => {
    // Fetch starships data from the API
    fetch('https://swapi.dev/api/starships/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch starships data.');
        }
        return response.json();
      })
      .then((data) => {setStarships(data.results)
        setLoading(false)})
      .catch((error) =>{ console.log(error)
        setLoading(false)});
  }, []);

  return (
    <div>
      <h2>Starships</h2>
      {loading ? ( // Check if loading is true
        <Loader /> // Display the loader if loading is true
      ) : (
      <table>
        <thead>
          <tr>
            <th>Starship Id</th>
            <th>Name</th>
            <th>Model</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {starships.map((starship, index) => (
            <tr key={starship.name}>
              <td>{index + 1}</td>
              <td>{starship.name}</td>
              <td>{starship.model}</td>
              <td>{starship.manufacturer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default Starships;
