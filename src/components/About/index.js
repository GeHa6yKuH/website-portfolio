import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faJava } from '@fortawesome/free-brands-svg-icons'
import cppIcon from '../../assets/images/cppicon.png'
import ueIcon from '../../assets/images/ueicon.png'
import springIcon from '../../assets/images/springicon.png'
import sqlIcon from '../../assets/images/sqlicon.png'
import Loader from 'react-loaders'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    /> 
                </h1>
                <p>
                I am passionate about creating games with Unreal Engine 5 and proficient in backend development using Java and the Spring framework.
                As an enthusiastic and self-motivated programmer, I actively participate in diverse projects, regardless of the technology involved. 
                For instance, during a recent technical test, I successfully completed tasks in Lua, a language I encountered for the first time, within the given timeframe. 
                I thrive on learning new technologies that help me achieve my goals and contribute to innovative solutions.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} color='#red' />
                    </div>
                    <div className='face2'>
                        <img src={ueIcon} alt='ue icon' width={130} />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faGitAlt} color='#CC0000' />
                    </div>
                    <div className='face4'>
                        <img src={cppIcon} alt='cpp icon' width={200} />
                    </div>
                    <div className='face5'>
                        <img src={springIcon} alt='spring icon' width={130} />    
                    </div>
                    <div className='face6'>
                        <img src={sqlIcon} alt='sql icon' width={130} />
                    </div>
                </div>
            </div>
            </div>
            <Loader/>
        </>
    )
}

export default About