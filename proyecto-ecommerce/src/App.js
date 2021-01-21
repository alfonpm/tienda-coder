import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/global/header/Header'
import ItemDetailContainer from './components/Producto/Detalle/ItemDetailContainer'
import Footer from './components/global/Footer/Footer'
import CartContainer from './components/Cart/CartContainer'
import Error from './components/global/Error'
import ItemListContainer from './components/Producto/ItemListContainer'
import {Store} from './store'
import { useState } from 'react';
import Checkout from './components/Producto/Checkout/Checkout'

function App() {
  const [data, setData] = useState({
    items:[],
    cantidad:0,
  
  });

  return (
    <Store.Provider value={[data, setData]}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path="/cart">
          <CartContainer />
        </Route>
        <Route exact path="/categoria/:categ">
        <ItemListContainer/>
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer/>
        </Route>
        <Route path="/Checkout">
        <Checkout/>
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </Store.Provider>
  );
}

export default App;