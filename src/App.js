import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Product/Products/Products';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';



const App = (handleAddProduct) => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products}  />
        <Route exact path="/products/:id" component={Product}  />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
