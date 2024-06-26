
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaLinkedin, FaFilePdf} from 'react-icons/fa'
import { BsArrowDown } from 'react-icons/bs'
import Cabinet from './comp/project_cabinet.jsx'
import SkillsBar from './comp/Skills-bar';
import NavBar from './comp/NavBar';
import Typewriter from './comp/TyperWriter.tsx'
import HeroImg from './img/Lovepik_com-401904071-minimalist-black-background.jpg'

function Home() {
  

  const downloadResume = ()=>{
    fetch('Jose Reyes Resume 05-02-24.pdf').then(response=>{response.blob().then(blob=>{
      const fileURL =window.URL.createObjectURL(blob) 
      let alink = document.createElement('a')
      alink.href = fileURL
      alink.download = 'Jose Reyes Resume 05-02-24'
      alink.click()
    })})
  }
  return (
  
    <div className='App' >
    <NavBar/>
    
      <header class="head">
      {/* <img className="hero-img" src={require('./img/Lovepik_com-401904071-minimalist-black-background.jpg')} /> */}
        <div className='inner-head'>
          <span className="inner-h"> Welcome, I'm Jose </span>
          <span className="inner-text"> I'm a Software Engineer Graduate from General Assembly and Miami University</span>



        </div>

        {/* <div className='left-head'> */}
        {/* <HeroImg/> */}

        {/* <h1>       */}
        {/* <Typewriter textArray={['Aloha!','Hello!']} delay={500} /> */}

        {/* </h1>
        <h1 style={{marginTop:-60}}>
          I'm Jose Reyes  
        </h1>
        </div> */}
  

        {/* <div className="right-head">
          <div className='right-head-text'>  <span className='right-head-text a'>Im a Software Engineer inspired to use the modern tools to surpass the current human limitation </span></div>
        
          <div class="link-container">
            <div class="contact-links">
              <button class="btn" onClick={downloadResume}><FaFilePdf class="i-resume" /><a target="_blank" href="google.com ">Resume</a></button>
              <button class="btn"><FaLinkedin class="i-linkedin" /><a target="_blank" href="www.linkedin.com/in/jose-r-reyes">LinkedIn</a></button>
              <button class="btn"><FaGithub class="i-github" /><a target="_blank" href="https://github.com/juzorey">Github</a></button>
            </div>
          </div> */}



        {/* <div className="project-arrow">
          <h5 className="project-header">Projects</h5>  
          <BsArrowDown class="arrow"/>

        </div> */}


        {/* </div> */}

      </header>

      <SkillsBar/>
        <Cabinet/>


      


    </div>
  );
}

export default Home;
