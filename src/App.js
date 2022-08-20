import logo from './logo.svg';
import './App.css';
import BarraNavegacion from './components/NavBar';
function App() {
  return (
    <div className="App">
         <BarraNavegacion />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Andres Martinez</p>
        <p>On Cases Store</p>
        <a className="App-link"href="https://reactjs.org"target="_blank"rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;
