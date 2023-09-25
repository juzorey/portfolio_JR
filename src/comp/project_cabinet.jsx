import reactlogo from '../logos/react-logo.webp';
import djangologo from '../logos/django-logo-fotor-bg-remover-20230505205627.png'
import { motion, animate } from "framer-motion"
import { useState } from 'react';
import {FiArrowUpRight} from 'react-icons/fi'
import fakeGif from '../logos/gif.gif'
//here is going to hold the project cabinets

export default function Cabinet(){


  const[isShown, setIsShown] = useState (false)
  const draw = {
    hidden:  {opacity:0},

    show: {opacity: 1},
    transition: {ease:[.6,.01,-.05,.95],
    durartion:1.6,},

    exit:{opacity:0,
      transition: {ease:"easeInOut",
    duration:0.8}

    }

  };
  const expandedTemplate = (
  <div>
    extend here
  </div>
  )
  

  return(
    <div className="project-cabinet">

      <div className="title-name"><h2>Projects</h2></div>
      

       
        <motion.div className="projects" whileHover={{height:600}} transition={{
          duration:.4
        }}> 



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
          <div className='hidden-container-info'> 
            <div className='project-summary-info'> lodfjgnldfjbgksjdbgljsdbnlkgnlsdngks
            </div>

            <div className='fumb'>
              <img  className='motion-pic' src={fakeGif}/>
            </div>
          </div>

        {/* {isShown && (
        <motion.div
        className='black-motion' 
        variants={draw}
        intial="hidden"
        animate="show"
        exit="exit"
        >
          I'll appear when you hover over the button.
        </motion.div>
      )}  */}

          
        </motion.div>




        <motion.div className="projects" whileHover={{height:600}} transition={{
          duration:.4
        }}> 

          <div className="project-container2">
            <div className="first">
              <div className= "project-name "><h6>Fake - Uber</h6></div>
              <div className="description "><p>Here are the details about the project that was done in 1 day</p></div>
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
          
          <div className='hidden-container-info'> 
            <div className='project-summary-info'> lodfjgnldfjbgksjdbgljsdbnlkgnlsdngks
            </div>

            <div className='fumb'>
              <img  className='motion-pic' src={fakeGif}/>
            </div>
          </div>

        </motion.div>

<motion.div className="projects" whileHover={{height:600}} transition={{
  duration:.4
}}> 
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
          <div className='hidden-container-info'> 
            <div className='project-summary-info'> lodfjgnldfjbgksjdbgljsdbnlkgnlsdngks
            </div>

            <div className='fumb'>
              <img  className='motion-pic' src={fakeGif}/>
            </div>
          </div>


        </motion.div>

        <motion.div className="projects" whileHover={{height:600}} transition={{
  duration:.4
}}> 
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
          <div className='hidden-container-info'> 
            <div className='project-summary-info'> lodfjgnldfjbgksjdbgljsdbnlkgnlsdngks
            </div>

            <div className='fumb'>
              <img  className='motion-pic' src={fakeGif}/>
            </div>
          </div>
          </motion.div>
        
  

      </div>

  )
}