import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";

const App = () => (
  <div>

<Route exact path="/" component={Home}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/about" component={About}/>
    <Navigation />
  </div>
);

export default App;
