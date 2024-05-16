import './index.scss'
import LogoS from '../../assets/images/BPLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faEnvelope,
  faDiagramProject,
  faRocket,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faRocket} className='icons faRocket' color="#8e7cc3" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} className='icons faUser' color="#8e7cc3" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faDiagramProject} className='icons faDiagramProject'  color="#8e7cc3" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} className='icons faEnvelope' color="#8e7cc3" />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar
