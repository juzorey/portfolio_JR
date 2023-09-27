import { Link } from "react-router-dom"


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
  fetch(`Jose Reyes Resume 9-25-23.pdf`).then(response=>{
    response.blob().then(blob=>{
      const fileURL = window.URL.createObjectURL(blob)
      let alink = document.createElement('a')
      alink.href =fileURL
      alink.download = 'Jose Reyes Resume 9-25-23.pdf'
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


        </div>
      </div>

    </div>
  )

}