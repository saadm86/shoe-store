import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import './App.css';
import {About} from './components/About'
import {Home} from './components/Home'
import {Products} from './components/Products'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Products'>Products</Link>
      </nav>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Products' component={Products}/>
        <Route exact path='*' component={()=><h2>404-Not Found</h2>}/>
      </Switch>
    </div>
  );
}

export default App;
