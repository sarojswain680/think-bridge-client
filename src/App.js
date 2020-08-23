import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import AddProduct from '../src/Component/Product/addProduct';
import Product from '../src/Component/Product/index';
import NavBar from '../src/Component/NavBar/index';



class App extends Component {

  render() {
    return (
      <BrowserRouter className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Product} />
          <Route exact path="/add" component={AddProduct} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default withRouter(App);