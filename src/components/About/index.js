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

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
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
            <Loader type="pacman" />
        </>
    )
}

export default About