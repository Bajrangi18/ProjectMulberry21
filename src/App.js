import {
  useState
} from "react"; 
import SideBar from "./Components/SideBar";
import MainView from "./Components/MainView";
import "./App.css";

function App() { 

  const [screen, setScreen] = useState(0);
  //function plus(e) { 
  //  e.preventDefault(); 
  //  setResult((result) => result + Number(inputRef.current.value)); 
  //}; 

  return ( 
    <div className="App"> 
          <SideBar setScreen={setScreen} />
          <MainView screenNum={screen}/>
    </div> 
  ); 
} 
 
export default App; 
