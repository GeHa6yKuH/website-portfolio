import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { useState } from 'react'
import AnimatedText from './components/AnimatedText'
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const letterTextArray = Array.from('const char* name = "Bogdans Podalevics";')

  return (
    <div
      style={{ position: 'relative', height: '100vh', overflow: 'auto' }}
      className="maindiv"
    >
      <video autoPlay loop muted className="bg-video">
        <source src="spacevid.mp4" type="video/mp4" />
      </video>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
      <div
        style={{
          position: 'absolute',
          right: 50,
          bottom: 0,
          height: '20%',
          width: '1.5px',
          backgroundColor: 'yellow',
        }}
      ></div>

      <div className="vertical-text">
        <AnimatedText
          letterClass={letterClass}
          strArray={letterTextArray}
          idx={0}
        />
      </div>

      <ul>
        <li>
          <a
            className="linkedIn"
            target="_blank"
            rel="noreffer noreferrer"
            href="https://www.linkedin.com/in/bogdans-podaļevičs-7a380529a"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#9f7a7a" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreffer noreferrer" href="https://github.com/GeHa6yKuH">
            <FontAwesomeIcon icon={faGithub} color="#9f7a7a" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreffer noreferrer" href="discord:bigdarian">
            <FontAwesomeIcon icon={faDiscord} color="#9f7a7a" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default App

{
  /* <div className='text-zone'>
        <AnimatedText  
        letterClass={letterClass}
        strArray={letterTextArray} 
        idx={15}
        />
      </div> */
}
