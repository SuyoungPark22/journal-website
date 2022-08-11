import logo from './logo.svg';
import './App.css';

function Header(props){
  return (
    <div class="Header">
      <h1>Researchers' Society</h1>
    </div>
  );  
}

function Nav(props){
  return (
    <div class="Nav">
      <div id="grid">
        <p class="nav-element">Explore content</p>
        <p class="nav-element">About us</p>
        <p class="nav-element">Members</p>
      </div>
    </div>
  );
}

function Article(props){
  return (
    <div class="Article">
      <div class="Main Article">
        asdf
      </div>
      <div class="List Article">
        asdf
      </div>
    </div>
  );
}

function App() {
  return (
    <div class="App">
      <Header></Header>
      <Nav></Nav>
    </div>
  );
}




    
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </div> */}

export default App;
