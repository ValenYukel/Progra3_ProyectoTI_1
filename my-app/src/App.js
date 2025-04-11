import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Home from './screens/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import VerTodoPopulares from './screens/VerTodo/VerTodoPopulares';
import VerTodoEstrenos from './screens/VerTodo/VerTodoEstrenos';

function App() {
  return (
    
    <React.Fragment>
    <div className="todo">
  <Header/>

    <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path="/vertodo-pop/:vertodo" component={VerTodoPopulares} />
        <Route path="/vertodo-est/:vertodo" component={VerTodoEstrenos} />
    </Switch>
    
  <Footer />
    </div>
    </React.Fragment>
    
  )
};

export default App;
