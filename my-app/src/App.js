import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Home from './screens/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import Todo from './screens/Secciones/Todo';
import Loader from './screens/Loader/Loader';

function App() {
  return (
    <>
    <React.Fragment>
    <div class="todo">
    <Header/>
  
    <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/ver-todas/jewelery'} component={Todo} />
        <Route path={''} component={Loader} />
    </Switch>
    
    <Footer />
    </div>
    </React.Fragment>
    </>
  )
};

export default App;
