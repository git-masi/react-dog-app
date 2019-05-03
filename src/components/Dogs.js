import React from 'react';
import { withRouter } from 'react-router-dom';

const Dogs = props => {
  const clickHandler = (name) => {
    props.history.push(`/dogs/${name}`);
  }

  const dogs = props.dogs.map((dog, index) => (
    <div className="text-center" key={index}>
      <img src={dog.src} className="rounded-circle" alt={dog.name} onClick={() => clickHandler(dog.name)}/>
    </div>
  ))

  return (
    <div>
      {dogs}
    </div>
  )
}

export default withRouter(Dogs);