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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default People;
