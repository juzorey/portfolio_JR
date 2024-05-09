import reactlogo from '../logos/react-logo.webp';
import djangologo from '../logos/django-logo-fotor-bg-remover-20230505205627.png'
import { motion, animate } from "framer-motion"
import { useState } from 'react';
import {FiArrowUpRight} from 'react-icons/fi'
import fakeGif from '../logos/gif.gif'
import foodIt from '../logos/Screenshot 2024-05-02 at 1.50.40 PM.png'
import triviata from '../logos/Triviata screen.png'
import fakeUber from '../logos/Fake-Uber Screen.png'

import js from '../logos/javascript.8e1dd761.png'
import react from '../logos/react.29ea9910.png'
import django from '../logos/django.c0db5538 (1).png'
import python from '../logos/python.7fb67ff9.png'
import html from '../logos/html.f98fd478.png'
import chart from '../logos/chart.b9a99ea9.png'
import node from '../logos/node.3453ba81.png'
import postgresql from '../logos/postgresql.4a498288.png'
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



<div className="circle2-2"></div>


          <div className="project-container2">
            
            
            <div className="first">
              
              <div className= "project-name"><h6>Food - It</h6></div>
              <div className="languages-used">
                <div className="lang-btn">
                <img className="tech-logo" src= {js} alt=" Logo" />
                </div>

                <div className="lang-btn">
                <img class="tech-logo" src= {postgresql} alt=" Logo" />
                </div>
                
                <div className="lang-btn">
                <img class="tech-logo" src= {react} alt=" Logo" />
                </div>

                <div className="lang-btn">
                <img class="tech-logo" src= {django} alt=" Logo" />
                </div>

                <div className="lang-btn">
                <img class="tech-logo" src= {chart} alt=" Logo" />
                </div>
            
              </div>

              <div className="two-button">
                <a href='https://github.com/juzorey/Food-It' target="_blank" > 
                <div className="source-code btn2">
                  <div className='source-link-name'>Source Code </div> 
                  <FiArrowUpRight className="fi-arrow down"/>
                </div>
                </a>
                <div className="live-code btn2">
                  {/* <div className='source-link-name'>Live Site</div>
                  <FiArrowUpRight className="fi-arrow rotate"/> */}
                  </div>
              </div>

            </div>
{/* 
            <div className="two-button">
                <btn className="source-code btn2"><a target="_blank" href="google.com "></a>Source Code </btn>
                <btn className="live-code btn2"><a target="_blank" href="google.com "></a>Live Site</btn>
              </div> */}
          



            

          </div>
          <div className='hidden-container-info'> 

          <div className="container-2">

            <div className="description">
                  <p>A full stack admin panel that helps track and analyze the calorie intake and exercise. I use Django for the backend and React for the fronten
            <ul className='bullets'>

              <li>Create a web app that helps users analyze their calories and exercise on a daily, weekly, monthly view</li>
              <li>The backend is made with Django. And secured with simple-JWT authentication. Access permissions depending on user role. RESTful API send JSON.</li>
              <li>React front end and full CRUD API for the user to add, remove, and update food dairy.</li>
              <li>The react Frontend uses styled-components with graph.js to make it easy to analyze the calorie data</li>
              <li>Utilized and Agile method with daily stand-ups and planning with Trello</li>

            </ul>

                  
              </p>
            </div>


            <div className='fumb'>
              <img  className='motion-pic' src={foodIt}/>
            </div>

          </div>


    </div>
          
        </motion.div>


        <motion.div className="projects" whileHover={{height:600}} transition={{
          duration:.4
        }}> 



<div className="circle2-2"></div>


          <div className="project-container2">
            
            
            <div className="first">
              
              <div className= "project-name"><h6>Fake-Uber</h6></div>
              <div className="languages-used">
                <div className="lang-btn">
                <img className="tech-logo" src= {js} alt=" Logo" />
                </div>

                <div className="lang-btn">
                <img class="tech-logo" src= {postgresql} alt=" Logo" />
                </div>
                
                <div className="lang-btn">
                <img class="tech-logo" src= {react} alt=" Logo" />
                </div>

                <div className="lang-btn">
                <img class="tech-logo" src= {django} alt=" Logo" />
                </div>

                <div className="lang-btn">
                <img class="tech-logo" src= {chart} alt=" Logo" />
                </div>
            
              </div>

              <div className="two-button">
                <a href='https://github.com/juzorey/Fake-uber' target="_blank" >
                <div className="source-code btn2">
                  <div className='source-link-name'>Source Code </div> 
                  <FiArrowUpRight className="fi-arrow down"/>
                </div>
                </a>
                <div className="live-code btn2">
                  {/* <div className='source-link-name'>Live Site</div>
                  <FiArrowUpRight className="fi-arrow rotate"/> */}
                  </div>
              </div>

            </div>
{/* 
            <div className="two-button">
                <btn className="source-code btn2"><a target="_blank" href="google.com "></a>Source Code </btn>
                <btn className="live-code btn2"><a target="_blank" href="google.com "></a>Live Site</btn>
              </div> */}
          



            

          </div>
          <div className='hidden-container-info'> 

          <div className="container-2">

            <div className="description">
                  <p>A full stack Uber clone that utilized the Binance blockchain to make transitions. Using React for both ends and using
Solano to write the blockchain contracts
            <ul className='bullets'>
            <li> Goal is to create a decentralized uber clone that uses blockchain solano to code smart contracts. </li>
                <li> Built with full ERN stack (React, Express, Node JS)</li>
                <li> Full create, read, update, delete (CRUD) operations hitting all RESTful API calls.</li>

            </ul>

                  
              </p>
            </div>


            <div className='fumb'>
              <img  className='motion-pic' src={fakeUber}/>
            </div>

          </div>


    </div>
          
        </motion.div>



        <motion.div className="projects" whileHover={{height:600}} transition={{
          duration:.4
        }}> 



<div className="circle2-2"></div>


          <div className="project-container2">
            
            
            <div className="first">
              
              <div className= "project-name"><h6>Triviata</h6></div>
              <div className="languages-used">
                <div className="lang-btn">
                <img className="tech-logo" src= {js} alt=" Logo" />
                </div>

                <div className="lang-btn">
                <img class="tech-logo" src= {postgresql} alt=" Logo" />
                </div>
                
                <div className="lang-btn">
                <img class="tech-logo" src= {react} alt=" Logo" />
                </div>

                <div className="lang-btn">
                <img class="tech-logo" src= {django} alt=" Logo" />
                </div>

                <div className="lang-btn">
                <img class="tech-logo" src= {chart} alt=" Logo" />
                </div>
            
              </div>

              <div className="two-button">
                <a href='https://github.com/lastnameisgold/triviata_app_frontend' target="_blank">  
                <div className="source-code btn2">
                  <div className='source-link-name'>Source Code </div> 
                  <FiArrowUpRight className="fi-arrow down"/>
                </div>
                </a>
                <div className="live-code btn2">
                  {/* <div className='source-link-name'>Live Site</div>
                  <FiArrowUpRight className="fi-arrow rotate"/> */}
                  </div>
              </div>

            </div>
{/* 
            <div className="two-button">
                <btn className="source-code btn2"><a target="_blank" href="google.com "></a>Source Code </btn>
                <btn className="live-code btn2"><a target="_blank" href="google.com "></a>Live Site</btn>
              </div> */}
          



            

          </div>
          <div className='hidden-container-info'> 

          <div className="container-2">

            <div className="description">
                  <p>A fullstack app that utilizes React for both ends. Traviata is a study help app that users can make their flashcards sets to
study for any topic. In the future will implement a second side of the app to have a trivia mode
            <ul className='bullets'>

              <li>With an Agile team create a web app that creates flashcards for studying with a full CRUD on all models.</li>
              <li> React front end connected with a Node/Express server to a PostgreSQL database and React backend. Used JWT for user authentication</li>
              <li> Themed and styled using CSS with styled-components</li>
              <li> Utilizing a trunk git workflow I managed pull requests and handled merge conflicts for the team</li>
              <li> PostgreSQL database and Express backend</li>

            </ul>

                  
              </p>
            </div>


            <div className='fumb'>
              <img  className='motion-pic' src={triviata}/>
            </div>

          </div>


    </div>
          
        </motion.div>






</div>)
}