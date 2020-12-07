
import './App.css';
import NavBar from './components/global/nav/NavBar/NavBar'
import logo from './assets/logo2.png'


function App() {
  return (
    <header className="container-fluid">
      
    <figure className="text-center">
      <img src={logo} alt="logo" className="img-fluid "></img>
    </figure>
    <NavBar/>
    </header>
  );
}

export default App;
