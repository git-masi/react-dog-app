import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = props => {
  const links = () => {
    return props.links.map((dog, index) => <NavLink className="nav-link" exact to={`/dogs/${dog.name}`} key={index}>{dog.name}</NavLink>)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/dogs">DogShelter</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          {links()}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;