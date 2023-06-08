import reactlogo from '../logos/react-logo.webp';
import djangologo from '../logos/django-logo-fotor-bg-remover-20230505205627.png'
import {FiArrowUpRight} from 'react-icons/fi'
//here is going to hold the project cabinets
export default function Cabinet(){
  return(
    <div className="project-cabinet">

      <div className="title-name"><h2>Projects</h2></div>
      
      <div className="project-container">
       
        <div className="projects"> 

          <div className="project-container2">
            <div className="first">
              <div className= "project-name"><h6>Food - It</h6></div>
              <div className="description"><p>Here are the details about the project that was done in 1 day</p></div>
            </div>
            <div className="languages-used">
              <div className="lang-btn">
                REACT
              </div>
              <div className="lang-btn">
                DJANGO
              </div>
              <div className="lang-btn">
                CSS
              </div>
              <div className="lang-btn">
                POSTGRESQL
              </div>

            </div>
          

            <div className="two-button">
              <div className="source-code btn2"><div className='source-link-name'>Source Code </div> <FiArrowUpRight className="fi-arrow down"/></div>
              <div className="live-code btn2"><div className='source-link-name'>Live Site</div><FiArrowUpRight className="fi-arrow rotate"/></div>
            </div>

          </div>
        </div>
        

        <div className="projects"> 

          <div className="project-container2">
            <div className="first">
              <div className= "project-name"><h6>Fake - Uber</h6></div>
              <div className="description"><p>Here are the details about the project that was done in 1 day</p></div>
            </div>

            <div className="languages-used">
              <div className="lang-btn">
                REACT
              </div>
              <div className="lang-btn">
                DJANGO
              </div>

            </div>

            <div className="two-button">
              <div className="source-code btn2"><div className='source-link-name'>Source Code </div> <FiArrowUpRight className="fi-arrow down"/></div>
              <div className="live-code btn2"><div className='source-link-name'>Live Site</div><FiArrowUpRight className="fi-arrow rotate"/></div>
            </div>

          </div>
        </div>
        <div className="projects"> 

          <div className="project-container2">
            <div className="first">
              <div className= "project-name"><h6>Triviata</h6></div>
              <div className="description"><p>Here are the details about the project that was done in 1 day</p></div>
            </div>

            <div className="languages-used">
              <div className="lang-btn">
                REACT
              </div>
              <div className="lang-btn">
                DJANGO
              </div>

            </div>

            <div className="two-button">
              <div className="source-code btn2"><div className='source-link-name'>Source Code </div> <FiArrowUpRight className="fi-arrow down"/></div>
              <div className="live-code btn2"><div className='source-link-name'>Live Site</div><FiArrowUpRight className="fi-arrow rotate"/></div>
            </div>

          </div>
        </div>
        <div className="projects"> 

          <div className="project-container2">
            <div className="first">
              <div className= "project-name"><h6>Example</h6></div>
              <div className="description"><p>Here are the details about the project that was done in 1 day</p></div>
            </div>

            <div className="languages-used">
              <div className="lang-btn">
                REACT
              </div>
              <div className="lang-btn">
                DJANGO
              </div>

            </div>

            <div className="two-button">
              <div className="source-code btn2"><div className='source-link-name'>Source Code </div> <FiArrowUpRight className="fi-arrow down"/></div>
              <div className="live-code btn2"><div className='source-link-name'>Live Site</div><FiArrowUpRight className="fi-arrow rotate"/></div>
            </div>

          </div>
        </div>
        
      


      </div>
    </div>
  )
}