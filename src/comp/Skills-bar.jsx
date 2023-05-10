import html5 from '../logos/html5-logo.svg';
import javascript from '../logos/javascript-logo.svg';
import nodejs from '../logos/nodejs-1-logo-png-transparent.png';
import postgresql from '../logos/postgresql-logo-fotor-bg-remover-2023050520415.png';
import python from '../logos/python-logo.webp';
import reactlogo from '../logos/react-logo.webp';
import djangologo from '../logos/django-logo-fotor-bg-remover-20230505205627.png'
import typescript from '../logos/typescript-logo.png'
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

        <div className="skills-title">Front-End Skills</div>

        <div className='logo-box-1'>

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
              <img className="logos" src={nodejs}></img>
              <span className="logo-text">Node JS</span>
          </div>

          </div>
          <div className='logo-ring'>
          <div className="logo-inner-ring">
              <img className="logos" src={postgresql}></img>
              <span className="logo-text">Postgresql</span>
          </div>

          </div>
        </div>
      </div>

      <div className='logo-box-2'>
        <div className="skills-title">Back-End Skills</div>

        <div className='logo-box-1'> 
        <div className='logo-ring'>

        <div className="logo-inner-ring">
              <img className="logos" src={reactlogo}></img>
              <span className="logo-text">React</span>
        </div>
        </div>
          
          <div className='logo-ring'>
          <div className="logo-inner-ring">
              <img className="logos" src={djangologo}></img>
              <span className="logo-text">Django</span>
          </div>

          </div>
          <div className='logo-ring'>
              <div className="logo-inner-ring">
              <img className="logos" src={python}></img>
              <span className="logo-text">Python</span>
          </div>

          </div>
          <div className='logo-ring'>
          <div className="logo-inner-ring">
              <img className="logos" src={typescript}></img>
              <span className="logo-text">Typescript</span>
          </div>
          </div>

        </div>
      </div>

    </div>



    </div>
  )

}