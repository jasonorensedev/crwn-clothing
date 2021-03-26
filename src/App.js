import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route, Link  } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

function App() {
  //Route 
  //component that we want to render
  // path string equal of location URL when the URL is / render the component
  // exact default true it means that it should be exact of the path before it renders
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
 