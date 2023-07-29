import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import './Loader.css'
const Species = () => {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch species data from the API
    fetch('https://swapi.dev/api/species/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch species data.');
        }
        return response.json();
      })
      .then((data) => {setSpecies(data.results)
        setLoading(false);

    })
      .catch((error) => {console.log(error)
        setLoading(false);

    });
  }, []);

  return (
    <div>
      <h2>Species</h2>
      {loading ? ( // Check if loading is true
        <Loader /> // Display the loader if loading is true
      ) : (
      <table>
        <thead>
          <tr>
            <th>Species Id</th>
            <th>Name</th>
            <th>Classification</th>
            <th>Average Height</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {species.map((specie, index) => (
            <tr key={specie.name}>
              <td>{index + 1}</td>
              <td>{specie.name}</td>
              <td>{specie.classification}</td>
              <td>{specie.average_height}</td>
              <td>{specie.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default Species;
