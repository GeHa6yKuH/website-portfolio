import './index.scss'
import springIcon from '../../assets/images/springbootprojectimage.png'
import bpLogo from '../../assets/images/BPLogo.png'
import Loader from 'react-loaders'

const Projects = () => (
  <>
    <div className="projects-container">
      <div className="text-zone">
        <h1>Projects</h1>
        <p>Here are some of the projects I've been working on lately:</p>
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
              <img src={"https://placehold.co/300x200"} alt="Project 1" />
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
