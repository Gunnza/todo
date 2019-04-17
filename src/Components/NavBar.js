import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = () => {
  return (
  <div>
    <Link to="/">
      <button>Home</button>
    </Link>
    <Link to="/about">
      <button>About</button>
    </Link>
  </div>
  );
};

export default NavBar
