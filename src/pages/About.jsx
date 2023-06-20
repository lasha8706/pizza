import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg"
import "../styles/About.css"

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style = {{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p> 
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Corrupti veniam est excepturi optio asperiores reprehenderit. 
                Accusantium nam id optio neque odio ex reprehenderit sed, 
                eos quod quisquam error quas? Iste.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Corrupti veniam est excepturi optio asperiores reprehenderit. 
                Accusantium nam id optio neque odio ex reprehenderit sed, 
                eos quod quisquam error quas? Iste.
                 
            </p>
        </div>
    </div>
  )
}

export default About
