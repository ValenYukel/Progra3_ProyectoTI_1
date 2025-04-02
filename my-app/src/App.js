import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Home from "./screens/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import VerTodas from "./components/Secciones/VerTodas";
import Todo from "./screens/Secciones/Todo";
import Loader from './screens/Loader/Loader';

function App() {
  return (
    <>
    <React.Fragment>
    
    <Header/>
    
    <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/ver-todas/jewelery'} component={Todo} />
        <Route path={''} component={Loader} />
    </Switch>
    
    <Footer />
    
    </React.Fragment>
    </>
  )
};

export default App;
