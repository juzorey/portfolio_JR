import { Link } from "react-router-dom"
export default function NavBar(){


function scroll(){
var element = document.querySelector('.skills-bar-container')
  element.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"});

}
  return(



    <div className="navbar">
      <div className="navbar-inner">
        <div className="nav-name">Jose Reyes</div>
        <div className="nav-links">
          <Link to="/" className="nav-links-underline">RESUME</Link>
          <Link to="/" className="nav-links-underline" onClick={scroll}>SKILLS</Link>{/* scrolls down*/}
          <Link to="/" className="nav-links-underline">PROJECTS</Link>


        </div>
      </div>

    </div>
  )

}