import './App.css';
import {NavBar} from './NavBar';
import {Border} from './Border';  
function App() {
  return (
    <div>
      <NavBar/>
      <div className = "main">
        <div >
          <h1 className = "welcomeTitle">Welcome to my Website</h1>
        </div>
        
      </div>
      <Border/>
    </div>
  );
}

export default App;
