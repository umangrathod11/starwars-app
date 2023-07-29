import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import './Loader.css'
const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true); // Add the loading state

  useEffect(() => {
    // Fetch vehicles data from the API
    fetch('https://swapi.dev/api/vehicles/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch vehicles data.');
        }
        return response.json();
      })
      .then((data) =>{ setVehicles(data.results)
        setLoading(false)})
      .catch((error) => {console.log(error)
        setLoading(false)});
  }, []);

  return (
    <div>
      <h2>Vehicles</h2>
      {loading ? ( // Check if loading is true
        <Loader /> // Display the loader if loading is true
      ) : (
      <table>
        <thead>
          <tr>
            <th>Vehicle Id</th>
            <th>Name</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, index) => (
            <tr key={vehicle.name}>
              <td>{index + 1}</td>
              <td>{vehicle.name}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.manufacturer}</td>
              <td>{vehicle.vehicle_class}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default Vehicles;
