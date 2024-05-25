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
            <h2>Project 1</h2>
            <div className="project-row">
              <p>
                This is a project I've been working on lately. It's a really
                cool project that I'm excited to share with you.
              </p>
              <img src={springIcon} alt="Project 1" />
            </div>
          </div>

          <div className="project">
            <h2>Project 2</h2>
            <div className="project-row">
              <p>
                This is another project I've been working on lately. It's a
                really cool project that I'm excited to share with you.
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
            <h2>Project 3</h2>
            <div className="project-row">
              <p>
                This is yet another project I've been working on lately. It's a
                really cool project that I'm excited to share with you.
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
