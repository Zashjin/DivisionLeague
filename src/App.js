import './App.css';
import Teams from './Components/Teams/Teams' 
import CreateYourTeam  from './Components/Create/Create'
import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/Navbar'
import FreeAgents from './Components/Free-Agents/Free-Agents'
import Agents from "./Components/ShowAgents/ShowAgents"



function App() {
 return(
   <div>
      <NavBar />
      <Home />
      <Teams />
      <Agents />
      <CreateYourTeam />
      <FreeAgents />

  
  
</div>
    
  );
}


export default App;
