import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
      <Navbar />
      <Switch>
        <Route exact path="/dogs" render={() => <Dogs dogs={props.dogs}/>}/>
        <Route exact path="/dogs/:name" render={routeProps => <Dog {...routeProps} />}/>
        <Route render={() => <h1>Oops, page not found</h1>} />
      </Switch>
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
