import html5 from '../logos/html.png';
import javascript from '../logos/java-script.png';
import nodejs from '../logos/node.png';
import postgresql from '../logos/database.png';
import python from '../logos/python.png';

import css3 from '../logos/css-3.png';
import sql from '../logos/sql-server.png';
import net from '../logos/website.png';
import docker from '../logos/docker.png';
import django from '../logos/django.png';
import react from '../logos/atom.png';
import aws from '../logos/aws.png';
import typescript from '../logos/typescript.png';
import c from '../logos/c-logo.png'
import mySql from '../logos/mysql.png'
import cSharp from '../logos/c-sharp.png'
import swift from '../logos/swift.png'
import solidity from '../logos/solid.png'

export default function SkillsBar(){

  // require.context(
  //   directory,
  //   (useSubdirectories = true),
  //   (regExp = /^\.\/.*$/),
  //   (mode = 'sync')
  // );


  return(
    <div className="skills-bar-container">
     
    <div className='logo-box-container'> 
      

      <div className='logo-box-2'>
      
      {/* <div className="circle"></div> */}
      <div className="circle2"></div>
      {/* <div className="circle3"></div> */}
      <div className="circle4"></div>
        <div className="skills-title">Languages</div>

        <div className='logo-box-1'>
     

        <div className='logo-ring'>
              <div className="logo-inner-ring">
              <img className="logos" src={python}></img>
              <span className="logo-text">Python</span>
            </div>
          </div>

          <div className='logo-ring'>
            <div className="logo-inner-ring">
              <img className="logos" src={html5}></img>
              <span className="logo-text">HTML5</span>
            </div>

          </div>
          <div className='logo-ring'>

          <div className="logo-inner-ring">
              <img className="logos" src={javascript}></img>
              <span className="logo-text">Javascript</span>
          </div>


          </div>
        
        
          <div className='logo-ring'>

          <div className="logo-inner-ring">
              <img className="logos" src={c}></img>
              <span className="logo-text">C++</span>
          </div>
          </div>

          <div className='logo-ring'>

          <div className="logo-inner-ring">
              <img className="logos" src={css3}></img>
              <span className="logo-text">Css3</span>
          </div>
          </div>
          <div className='logo-ring'>

          <div className="logo-inner-ring">
              <img className="logos" src={sql}></img>
              <span className="logo-text">Sql</span>
          </div>
          </div>
           <div className='logo-ring'>

          <div className="logo-inner-ring">
              <img className="logos" src={solidity}></img>
              <span className="logo-text">Solidity</span>
          </div>
          </div>
           <div className='logo-ring'>

          <div className="logo-inner-ring">
              <img className="logos" src={cSharp}></img>
              <span className="logo-text">Sql</span>
          </div>
          </div>

           <div className='logo-ring'>

          <div className="logo-inner-ring">
              <img className="logos" src={swift}></img>
              <span className="logo-text">Swift</span>
          </div>

          </div>


        </div>
      </div>

      <div className='logo-box-2'>
        <div className="skills-title">Developer Tools</div>

        <div className='logo-box-1'> 
        <div className='logo-ring'>

        <div className="logo-inner-ring">
              <img className="logos" src={react}></img>
              <span className="logo-text">React</span>
        </div>
        </div>
        <div className='logo-ring'>

          <div className="logo-inner-ring">
              <img className="logos" src={aws}></img>
              <span className="logo-text">AWS</span>
          </div>
          </div>
          <div className='logo-ring'>

          <div className="logo-inner-ring">
              <img className="logos" src={docker}></img>
              <span className="logo-text">Docker</span>
          </div>
          </div>
          <div className='logo-ring'>

          <div className="logo-inner-ring">
              <img className="logos" src={net}></img>
              <span className="logo-text">.Net Core</span>
          </div>
          </div>
        <div className='logo-ring'>

          <div className="logo-inner-ring">
              <img className="logos" src={nodejs}></img>
              <span className="logo-text">Node JS</span>
          </div>

          </div>
          
          <div className='logo-ring'>
          <div className="logo-inner-ring">
              <img className="logos" src={django}></img>
              <span className="logo-text">Django</span>
          </div>

          </div>
         
          <div className='logo-ring'>
          <div className="logo-inner-ring">
              <img className="logos" src={typescript}></img>
              <span className="logo-text">Typescript</span>
          </div>
          </div>
          <div className='logo-ring'>
          <div className="logo-inner-ring">
              <img className="logos" src={postgresql}></img>
              <span className="logo-text">PostgreSql</span>
          </div>
         

          </div>
          <div className='logo-ring'>
          <div className="logo-inner-ring">
              <img className="logos" src={mySql}></img>
              <span className="logo-text">MySql</span>
          </div>
         

          </div>

        </div>
      </div>

    </div>



    </div>
  )

}