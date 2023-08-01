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
      .then(async (data) => {
        // Fetch related data for each film
        const filmsWithData = await Promise.all(
          data.results.map(async (film) => {
            const charactersData = await fetchRelatedData(film.characters);
            const planetsData = await fetchRelatedData(film.planets);
            const starshipsData = await fetchRelatedData(film.starships);
            const vehiclesData = await fetchRelatedData(film.vehicles);
            const speciesData = await fetchRelatedData(film.species);

            return {
              ...film,
              characters: charactersData.map((character) => character.name),
              planets: planetsData.map((planet) => planet.name),
              starships: starshipsData.map((starship) => starship.name),
              vehicles: vehiclesData.map((vehicle) => vehicle.name),
              species: speciesData.map((specie) => specie.name),
            };
          })
        );

        setFilms(filmsWithData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const fetchRelatedData = async (urls) => {
    const fetchPromises = urls.map(async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    });
    return Promise.all(fetchPromises);
  };

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
              <th>Characters</th>
              <th>Planets</th>
              <th>Starships</th>
              <th>Vehicles</th>
              <th>Species</th>
            </tr>
          </thead>
          <tbody>
            {films.map((film, index) => (
              <tr key={film.title}>
                <td>{index + 1}</td>
                <td>{film.title}</td>
                <td>{film.director}</td>
                <td>{film.producer}</td>
                <td>
                  {film.characters.map((character, characterIndex) => (
                    <div key={characterIndex}>{character}</div>
                  ))}
                </td>
                <td>
                  {film.planets.map((planet, planetIndex) => (
                    <div key={planetIndex}>{planet}</div>
                  ))}
                </td>
                <td>
                  {film.starships.map((starship, starshipIndex) => (
                    <div key={starshipIndex}>{starship}</div>
                  ))}
                </td>
                <td>
                  {film.vehicles.map((vehicle, vehicleIndex) => (
                    <div key={vehicleIndex}>{vehicle}</div>
                  ))}
                </td>
                <td>
                  {film.species.map((specie, specieIndex) => (
                    <div key={specieIndex}>{specie}</div>
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

export default Films;
