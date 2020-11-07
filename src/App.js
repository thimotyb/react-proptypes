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
        <Component name={"try to put and int here or to delete this prop and look into the console"} />
      </header>
    </div>
  );
}

export default App;
