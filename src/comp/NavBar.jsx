import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaFilePdf} from 'react-icons/fa'


export default function NavBar(){


function scroll(){
var element = document.querySelector('.skills-bar-container')
  element.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"});

}
function scroll2(){
  var el = document.querySelector('.project-cabinet');
  el.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
}


const downloadClick = ()=>{
  fetch(`Jose Reyes Resume 03-12-24.pdf`).then(response=>{
    response.blob().then(blob=>{
      const fileURL = window.URL.createObjectURL(blob)
      let alink = document.createElement('a')
      alink.href =fileURL
      alink.download = 'Jose Reyes Resume 03-10-24.pdf'
      alink.click()
    })
  })
}


  return(



    <div className="navbar">
      <div className="navbar-inner">
        <div className="nav-name">Jose Reyes</div>
        <div className="nav-links">
          <Link to="/" className="nav-links-underline" onClick={downloadClick} value="download">RESUME</Link>
          <Link to="/" className="nav-links-underline" onClick={scroll}>SKILLS</Link>{/* scrolls down*/}
          <Link to="/" className="nav-links-underline" onClick={scroll2}>PROJECTS</Link>
         <a href="www.linkedin.com/in/jose-r-reyes"  className="nav-links-underline" target ="_blank"><FaLinkedin class="i-linkedin" /></a>
         <a href="https://github.com/juzorey"  className="nav-links-underline" target ="_blank"><FaGithub class="i-github" /></a>





        </div>
      </div>

    </div>
  )

}