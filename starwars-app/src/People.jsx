import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import './Loader.css';

const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch people data from the API
    fetch('https://swapi.dev/api/people/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch people data.');
        }
        return response.json();
      })
      .then((data) => {
        setPeople(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Fetch related data for each person from the URL
  const fetchRelatedData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  return (
    <div>
      <h2>People</h2>
      {loading ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Person Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Birth Year</th>
              <th>Height</th>
              <th>Species</th>
              <th>Films</th>
              <th>Vehicles</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={person.name}>
                <td>{index + 1}</td>
                <td>{person.name}</td>
                <td>{person.gender}</td>
                <td>{person.birth_year}</td>
                <td>{person.height}</td>
                <td>
                  {person.species.map((speciesUrl) => (
                    <div key={speciesUrl}>
                      <a href={speciesUrl} target="_blank" rel="noopener noreferrer">
                        {speciesUrl}
                      </a>
                    </div>
                  ))}
                </td>
                <td>
                  {person.films.map((filmUrl) => (
                    <div key={filmUrl}>
                      <a href={filmUrl} target="_blank" rel="noopener noreferrer">
                        {filmUrl}
                      </a>
                    </div>
                  ))}
                </td>
                <td>
                  {person.vehicles.map((vehicleUrl) => (
                    <div key={vehicleUrl}>
                      <a href={vehicleUrl} target="_blank" rel="noopener noreferrer">
                        {vehicleUrl}
                      </a>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default People;
