import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Home from './screens/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Todo from './screens/Secciones/Todo';


function App() {
  return (
    
    <React.Fragment>
    <div class="todo">
  <Header/>

    <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/ver-todas/jewelery'} component={Todo} />
    </Switch>
    
  <Footer />
    </div>
    </React.Fragment>
    
  )
};

export default App;
