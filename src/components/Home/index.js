import { Link } from "react-router-dom"
import './index.scss';
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'B', 'o', 'g', 'd', 'a', 'n', 's']
    const jobArray = ['J', 'a', 'v', 'a',
     ' ', '&', ' ',
     'c', '+', '+', ' ',
     'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']


     useEffect(() => {
        const originalText = document.getElementById('lag-anim-text').innerText;
        const randomChars = "!@#$%^&*()_+{}:\"<>?[];',./`~";
        const interval = 100;

        function randomChar() {
            return randomChars[Math.floor(Math.random() * randomChars.length)];
        }

        function animateText(element, text1, text2) {
            let textArray = text1.split('');
            let currentIndex = 0;
            let forward = true;
        
            const intervalId = setInterval(() => {
                if (forward) {
                    if (currentIndex < textArray.length) {
                        if (currentIndex == textArray.length - 1) {
                            textArray[currentIndex] = '';
                            currentIndex++;
                            return;
                        }
                        textArray[currentIndex] = randomChar();
                        currentIndex++;
                    } else {
                        forward = false;
                        currentIndex = 0;
                    }
                } else {
                    if (currentIndex < text2.length) {
                        if (currentIndex >= text1.length) {
                            textArray.push(text2[currentIndex]);
                        } else {
                            textArray[currentIndex] = text2[currentIndex];
                        }
                        currentIndex++;
                    } else {
                        clearInterval(intervalId);
                        setTimeout(() => {
                            animateText(element, text2, text1);
                        }, 1000);
                    }
                }
        
                element.innerText = textArray.join('');
            }, interval);
        }

        setTimeout(() => {
            animateText(document.getElementById('lag-anim-text'), originalText, 'Backend Engineer');
        }, 1000);
    }, []);


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>

                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray} 
                    idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}/>
                </h1>
                <h2 id="lag-anim-text">Game Programmer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
                <span className='stdcout'>
                std::cout {"<<"} Info {"<<"} std::endl;
                </span>
            </div>
        </div>
        <Loader/>
        </>
    )
}

export default Home