// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/species">Species</Link>
          </li>
          <li>
            <Link to="/starships">Starships</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
