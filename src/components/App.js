import React from "react";
import Home from './Home';
import NavBar from "./NavBar";
import About from "./About";
import {username,city} from './Home';
import {image} from './About';
function App() {

  return (
    <div>
      <NavBar />
      <Home  username="Liza" city="New York"/>
      <About image="https://i.imgur.com/mV8PQxj.gif" />
    </div>
  );
}

export default App;