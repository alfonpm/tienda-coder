import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/global/header/Header'
import Home from './components/Home/Home'
import WomanContainer from './components/Woman/WomanContainer'
import ManContainer from './components/Man/ManContainer'
import ChildContainer from './components/Child/ChildContainer'
import Footer from './components/global/Footer/Footer'
import CartContainer from './components/Cart/CartContainer'
import Detail from './components/Producto/Detalle/ItemDetailContainer'
import Error from './components/global/Error'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/WomanContainer">
          <WomanContainer />
        </Route>
        <Route exact path="/ManContainer">
          <ManContainer />
        </Route>
        <Route exact path="/ChildContainer">
          <ChildContainer />
        </Route>
        <Route exact path="/CartContainer">
          <CartContainer />
        </Route>
        <Route path="/detail">
          <Detail />
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