import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Cake Heaven</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cakes">Cakes</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
