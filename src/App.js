import logo from './logo.svg';
import './App.css';
import Component from './Component';
/**
 * Replace Component.js with one of the other proptypes examples in the ./js folder
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Component user={ { nome: "gigio", livello: "low" } } age={42} />
      </header>
    </div>
  );
}

export default App;
