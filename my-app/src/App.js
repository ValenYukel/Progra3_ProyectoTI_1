import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Home from "./screens/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  return (
    <>
    <React.Fragment>
    
    <Header/>
    
    <Switch>
        <Route path={'/'} exact={true} component={Home} />
    </Switch>
    
    <Footer />
    
    </React.Fragment>
    </>
  )
}

export default App;
