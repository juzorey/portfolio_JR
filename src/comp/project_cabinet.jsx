//here is going to hold the project cabinets
export default function Cabinet(){
  return(
    <div className="project-cabinet">

      <div className="title-name"><h2>Projects</h2></div>
      
      <div className="project-container">
       
        <div className="projects"> 

          <div className="project-container2">
            <div className="first">
              <div className= "project-name"><h6>NAME</h6></div>
              <div className="description"><p>Here are the details about the project that was done in 1 day</p></div>
            </div>



            <div className="two-button">
              <div><button className="source-code btn2">source</button></div>
              <div><button className="live-code btn2">live</button></div>
            </div>

          </div>
        </div>
      


      </div>
    </div>
  )
}