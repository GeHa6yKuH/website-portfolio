import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const RefForm = useRef()


    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_f5ekegm',
                'template_hxht303',
                RefForm.current,
                'yNAkKLId5LOshRmWz'
            )
            .then(
                () => {
                    alert('Thank you for your message!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send a message!')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't',
                        ' ', 'm', 'e']}
                        idx={15} 
                        />
                    </h1>
                    <p>
                    Feel free to send Your message any time:{")"}
                    </p>
                    <div className='contact-form'>
                        <form ref={RefForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className='emailtext'>
                        Or contact me via email: bogdanspodalevics@gmail.com
                    </div>
                </div>
            </div>
            <Loader/>
        </>
    )
}

export default Contact