import { Link } from "react-router-dom"
export default function NavBar(){



  return(
    <div className="navbar">
      <div className="navbar-inner">
        <div className="nav-name">Jose Reyes</div>
        <div className="nav-links">
          <Link to="/" className="nav-links-underline">RESUME</Link>
          <Link to="/" className="nav-links-underline">SKILLS</Link>{/* scrolls down*/}
          <Link to="/" className="nav-links-underline">PROJECTS</Link>


        </div>
      </div>

    </div>
  )

}