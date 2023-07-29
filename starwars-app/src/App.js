// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Films from './films';
import People from './People';
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';
import Header from './Header';

const App = () => {
  return (
    
      <div>
        <Header />
        <Routes>
          <Route path="/films" element={<Films />} />
          <Route path="/people" element={<People />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/species" element={<Species />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </div>
    
  );
};

export default App;
