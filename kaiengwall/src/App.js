import './App.css';
import {NavBar} from './NavBar';
import {Border} from './Border'; 
import {AboutMe} from './AboutMe';
function App() {
  return (
    <div>
      <NavBar/>
      <div className = "main">
        <div >
          <h1 className = "construct">WEBSITE UNDER CONSTRUCTION</h1>
          <h1 className = "welcomeTitle">Welcome to my Website</h1>
        </div>
      <AboutMe/>
      </div>
      <Border/>
    </div>
  );
}

export default App;
