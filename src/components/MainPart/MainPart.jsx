import React, { useState, useEffect } from 'react'
import './MainCss.css'

function MainPart() {
    const words = ["Web Developer", "Computer Technician", "UI/UX Designer", "Graphic Designer", "Cyber Security"];
    
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);   
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                
                setText(currentWord.substring(0, text.length - 1));
                setSpeed(75); 
            } else {
                setText(currentWord.substring(0, text.length + 1));
                setSpeed(150);
            }

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 2000); // استنى ثانيتين قبل المسح
            } 
            else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length); // انقل للكلمة اللي بعدها
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, speed, words]);

    return (
        <div id='MainPart' className="MainPart">
            <h1>Hi There I'm</h1>
        <div className="WhoJop">
            <span className='spand'>Ahmed Taher</span>
            <span className='ps'>
                {text}
                <span className="cursor">|</span>
            </span>
        </div>
            <div className="p">
                <p>I am a passionate front-end web developer with experience in creating responsive and user-friendly websites.</p>
            </div>
            <a href="#contact-section" style={{textDecoration : "none",color:"white"}}><button id='btn' className="button">Contact</button></a>
            <div className="socialLink">
                <a href="https://www.facebook.com/profile.php?id=61578296423872" className="facebook" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.tiktok.com/@eng.ahmed.vortex?_r=1&_t=ZS-95BLm4bcUpF" className="tiktok" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok"></i></a>
                <a href="https://github.com/ahmed-dev-githu/" className="github" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    )
}

export default MainPart
