
import './App.css';
import Home from './Home.js'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaLinkedin, FaFilePdf} from 'react-icons/fa'
import { BsArrowDown } from 'react-icons/bs'
import Cabinet from './comp/project_cabinet.jsx'
import SkillsBar from './comp/Skills-bar';
import NavBar from './comp/NavBar';

function App() {
  return (
  
    <div className="App">
    

     <Home/>
      


    </div>
  );
}

export default App;
