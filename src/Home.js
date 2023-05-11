
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaLinkedin, FaFilePdf} from 'react-icons/fa'
import { BsArrowDown } from 'react-icons/bs'
import Cabinet from './comp/project_cabinet.jsx'
import SkillsBar from './comp/Skills-bar';
import NavBar from './comp/NavBar';

function Home() {
  return (
  
    <div className='App' >
    <NavBar/>
    
      <header class="head">
        <h1>Hello! I'm Jose Reyes</h1>

        <div className="right-head">
          <div className='right-head-text'>  <span className='right-head-text a'>Im a Software Engineer inspired to use the modern tools to surpass the current human limitation </span></div>
        
          <div class="link-container">
            <div class="contact-links">
              <button class="btn"><FaFilePdf class="i-resume" /><a target="_blank" href="google.com btn">Resume</a></button>
              <button class="btn"><FaLinkedin class="i-linkedin" /><a target="_blank" href="google.com">LinkedIn</a></button>
              <button class="btn"><FaGithub class="i-github" /><a target="_blank" href="google.com">Github</a></button>
            </div>
          </div>



        {/* <div className="project-arrow">
          <h5 className="project-header">Projects</h5>  
          <BsArrowDown class="arrow"/>

        </div> */}


        </div>

      </header>

      <SkillsBar/>
        <Cabinet/>


      


    </div>
  );
}

export default Home;
