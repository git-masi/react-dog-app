import React from 'react';
import { Link } from 'react-router-dom';
import './Dog.css';

const Dog = props => {
  const about = () => props.about.map((sentence, index) => <p className="card-text" key={index}>{sentence}</p>);

  return (
    <div className="Dog row justify-content-center">
      <div className="col-11 col-lg-5">
        <div className="card">
          <img src={props.image} className="card-img-top" alt={props.name} />
          <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            <h4 className="card-subtitle text-muted mb-2">{props.age} years old</h4>
            {about()}
            <Link to="/dogs" className="btn btn-primary">All Dogs</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dog;