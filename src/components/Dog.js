import React from 'react';
import { Link } from 'react-router-dom';

const Dog = props => {
  const about = () => props.about.map((sentence, index) => <p className="card-text" key={index}>{sentence}</p>);

  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={props.image} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className={props.age}></p>
        {about()}
        <Link to="/dogs" className="btn btn-primary">All Dogs</Link>
      </div>
    </div>
  )
}

export default Dog;