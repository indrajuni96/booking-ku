import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'


import "assets/scss/style.scss";
import LandingPage from "pages/landingPage";
import DetailsPage from "pages/detailsPage";
import Example from "pages/example"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
