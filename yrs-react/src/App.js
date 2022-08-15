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
          <img class="main-image" src={props.main_img_src} alt="main"></img>
        </article>
        <div id="list-grid">
          <List title="This is list 1 text title." description="This is list 1 text description. This is list 1 text description. This is list 1 text description. This is list 1 text description. This is list 1 text description." img_src="data/list_image_1.JPG" author="Suyoung Park" date="14 Aug 2022"></List>
          <List title="This is list 1 text title." description="This is list 1 text description. This is list 1 text description. This is list 1 text description. This is list 1 text description. This is list 1 text description." img_src="data/list_image_1.JPG" author="Suyoung Park" date="14 Aug 2022"></List>
          <List title="This is list 1 text title." description="This is list 1 text description. This is list 1 text description. This is list 1 text description. This is list 1 text description. This is list 1 text description." img_src="data/list_image_1.JPG" author="Suyoung Park" date="14 Aug 2022"></List>
          <List title="This is list 1 text title." description="This is list 1 text description. This is list 1 text description. This is list 1 text description. This is list 1 text description. This is list 1 text description." img_src="data/list_image_1.JPG" author="Suyoung Park" date="14 Aug 2022"></List>
          <List title="This is list 1 text title." description="This is list 1 text description. This is list 1 text description. This is list 1 text description. This is list 1 text description. This is list 1 text description." img_src="data/list_image_1.JPG" author="Suyoung Park" date="14 Aug 2022"></List>
        </div>
      </div>
    </div>
  );
}

function List(props){
  return (
    <div class="List">
      <div id="list-subgrid">
        <img class="list-image" src={props.img_src} alt={props.title}></img>
        <h3>{props.title}</h3>
        <p class="list-description">{props.description}</p>
        <p class="list-author">{props.author}</p>
        <p class="list-date">{props.date}</p>
      </div>
    </div>
  );
}

function Footer(props){
  return (
    <div class="Footer"></div>
  );
}

function App() {
  // const data = import()

  return (
    <div class="App">
      <Header></Header>
      <Nav></Nav>
      <Article main_img_src="data/main_image.png"></Article>
      <Footer></Footer>
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
