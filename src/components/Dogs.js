import React from 'react';
import { withRouter } from 'react-router-dom';
import './Dogs.css';

const Dogs = props => {
  const clickHandler = (name) => {
    props.history.push(`/dogs/${name}`);
  }

  const dogs = props.dogs.map((dog, index) => (
    <div className="col-md-4" key={index}>
      <img src={dog.src} className="rounded-circle img-fluid" alt={dog.name} onClick={() => clickHandler(dog.name)}/>
      <h3 className="text-center mt-3">{dog.name}</h3>
    </div>
  ))

  return (
    <div className="Dogs">
      <h1 className="display-1 text-center mb-3">Meet Our Pups</h1>
      <div className="container">
        <div className="row">
          {dogs}      
        </div>
      </div>
    </div>
  )
}

export default withRouter(Dogs);