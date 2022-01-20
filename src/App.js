import React from "react";
import HomePage from "./pages/homepage.component";
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
