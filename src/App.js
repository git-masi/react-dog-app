import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dogs from './components/Dogs';
import Dog from './components/Dog';
import whiskey from './assets/images/whiskey.jpg'
import hazel from './assets/images/hazel.jpg'
import tubby from './assets/images/tubby.jpg'

function App(props) {

  return (
    <div>
      <Navbar links={props.dogs}/>
      <div className="container">
        <Switch>
          <Route exact path="/dogs" render={() => <Dogs dogs={props.dogs}/>}/>
          <Route exact path="/dogs/:name"
            render={routeProps => {
                const dogRouteName = routeProps.match.params.name;
                const dogObj = props.dogs.find(dog => dog.name.toLowerCase() === dogRouteName.toLowerCase());
                if (dogObj.length === 0) return <Redirect to="/" />;
                return (
                  <div className="container mt-3 mb-3">
                    <Dog 
                      {...routeProps}
                      name={dogObj.name}
                      age={dogObj.age}
                      image={dogObj.src}
                      about={dogObj.facts}
                    />
                  </div>
                );
              }
            }
          />
          <Route render={() => <h1>Oops, page not found</h1>} />
        </Switch>
      </div>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]
}

export default App;