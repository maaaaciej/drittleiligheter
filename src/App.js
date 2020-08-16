import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import Feed from "./pages/feed/feed.component";
import About from "./pages/about/about.component";
import ThankYou from "./pages/thankyou/thankyou.component";
import Upload from "./pages/upload/upload.component";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/about" component={About} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/thankyou" component={ThankYou} />
      </Switch>
    </div>
  );
};

export default App;
