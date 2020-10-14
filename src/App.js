import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import './App.css';
import {About} from './components/About'
import {Home} from './components/Home'
import {Products} from './components/Products'
import {ProductItem} from './components/ProductItem'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
      </nav>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route exact path='/products' component={Products}/>
        <Route path='/products/:id' component={ProductItem}/>
        <Route path='*' component={()=><h2>404-Not Found</h2>}/>
      </Switch>
    </div>
  );
}

export default App;
