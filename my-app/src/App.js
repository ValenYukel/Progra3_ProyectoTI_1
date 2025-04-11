import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Home from './screens/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import VerTodo from './screens/VerTodo/VerTodo';


function App() {
  return (
    
    <React.Fragment>
    <div className="todo">
  <Header/>

    <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path="/categoria/:categoria" component={VerTodo} />
    </Switch>
    
  <Footer />
    </div>
    </React.Fragment>
    
  )
};

export default App;
