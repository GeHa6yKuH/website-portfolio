import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faDiscord
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faDiagramProject,
  faRocket,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="subT" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faRocket} color="#8e7cc3" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#8e7cc3" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faDiagramProject} color="#8e7cc3" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#8e7cc3" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                className='linkedIn' 
                target='_blank' 
                rel='noreffer' 
                href='https://www.linkedin.com/in/bogdans-podaļevičs-7a380529a'>
                    <FontAwesomeIcon icon={faLinkedin} color="#9f7a7a" />
                </a>
            </li>
            <li>
                <a 
                target='_blank' 
                rel='noreffer' 
                href='https://github.com/GeHa6yKuH'>
                    <FontAwesomeIcon icon={faGithub} color="#9f7a7a" />
                </a>
            </li>
            <li>
                <a 
                target='_blank' 
                rel='noreffer' 
                href='discord:bigdarian'>
                    <FontAwesomeIcon icon={faDiscord} color="#9f7a7a" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
