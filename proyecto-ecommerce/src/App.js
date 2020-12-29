import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/global/header/Header'
import ItemDetailContainer from './components/Producto/Detalle/ItemDetailContainer'
import Footer from './components/global/Footer/Footer'
import CartContainer from './components/Cart/CartContainer'
import Error from './components/global/Error'
import ItemListContainer from './components/Producto/ItemListContainer'
function App() {
  return (
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
        <Route path="/item/:itemid">
          <ItemDetailContainer/>
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;