import logo from './logo.svg';
import './App.css';

function Header(props){
  return (
    <div class="Header">
      <div class="container">
        <h1>Researchers' Society</h1>
      </div>
    </div>
  );  
}

function Nav(props){
  return (
    <div class="Nav">
      <div class="nav-maxwidth">
        <div class="container">
          <div id="nav-grid">
            <p class="nav-element">Explore content</p>
            <p class="nav-element">About us</p>
            <p class="nav-element">Members</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Article(props){
  return (
    <div class="Article">
      <div class="container">
        <article id="main-grid">
          <div class="main-text">
            <h2>This is main text title.</h2>
            <p>This is main text description.</p>
          </div>
          <div class="main-image">
            This is main image.
          </div>
        </article>
        <div class="list">
          This is list article.
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div class="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
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
