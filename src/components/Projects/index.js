import './index.scss'
import springIcon from '../../assets/images/springbootprojectimage.png'
import bpLogo from '../../assets/images/BPLogo.png'
import Loader from 'react-loaders'

const handleMouseEnter = (event) => {
  event.target.play();
};

const handleMouseLeave = (event) => {
  event.target.pause();
};

const Projects = () => (
  <>
    <div className="projects-container">
      <div className="text-zone">
        <h1>Projects</h1>
        <div className='first-text-div'>
          <p>Here are some of the projects I've been working on lately:</p>
        </div>
        <div className="projects">

          <div className="project">
            <h2>Courier App</h2>
            <div className="project-row">
              <p>
              An example of a backend of a courier app, which are nowadays commonly
              used by “partner-couriers” in many food-delivering companies. This project
              was created using Java and Spring Boot, as well as PostgreSQL database
              to store data. Despite its simple architecture this project is still well
              structured and designed. This project is accesible under https://github.com/GeHa6yKuH/CourierApp.git.
              </p>
              <img src={springIcon} alt="Project 1" />
            </div>
          </div>

          <div className="project">
            <h2>Game Prototype</h2>
            <div className="project-row">
              <p>
              This project is a story game in a space setting prototype made usig one of the most powerful comercial
              game engines - unreal engine 5 of its latest version (5.4). The project is still in development, however
              almost all of the planed mechanics for this first-person game are already in there, implemented and
              well working. As a main programmer I work together with CGI, game, UI/UX and level designers in order to
              complete this interesting game prototype and most likely complete its development and deploy the game in the
              future. The logic of the game is being implemented using mostly c++ scripts with unreal engine framework.
              However we are also using integrated visual programming elements (Blueprints) in order to make development
              more efficient so that the logic of the c++ code is combined with visual scripts.

              </p>
              <video
              src="ue5gamevid.mp4"
              width="300"
              height="200"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              muted
              loop
            />
            </div>
          </div>

          <div className="project">
            <h2>Website Portfolio</h2>
            <div className="project-row">
              <p>
              What you are seeing (and probably even readig) right now is also created by me. I am not a front-end developer,
              but I still managed to create this beatiful (just my opinion) website using react framework on js. This 
              project was inspired by https://bobangajicsm.github.io/portfolio/contact.html. However I added a lot of my own
              styles and logic in here so that it looks great and represents my personality and soul. I hope that makes sence:)
              </p>
              <img src={bpLogo} alt="Project 1" />
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <Loader/>
  </>
)

export default Projects
