import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Home from "./screens/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Switch>
        <Route path={'/'} exact={true} component={Home} />
        
    </Switch>
      <Footer />
    </>
  )
}

export default App;
