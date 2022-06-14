import React from 'react'
import { FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container container ">
        <div className="contact__left">
          <h2 className='contact__heading'>Let's Talk</h2>
          <p className='contact__desc'>
            Feel feel to contact me at anytime. I'm a Web Developer with a focus on the MERN stack. However,
            I am still exploring other captivating libraries, frameworks, and
            technologies! If you're looking for a developer to add to your team, I'd love to hear from you!
          </p>
          <ul className="contact__socials">
            <a className='contact__socials-items' href="https://www.linkedin.com/in/nhlopez/"><FaLinkedin /></a>
            <a className='contact__socials-items' href="https://dribbble.com/NHLopez"><FaDribbble /></a>
            <a className='contact__socials-items' href="https://github.com/NHLopez"><FaGithub /></a>
          </ul>
        </div>
        <form action="https://formspree.io/f/mknyqnbd" method="POST">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="text" name="email" placeholder="Your Email" />
          <textarea name="message" rows="6" placeholder="Message"></textarea>
          <button type="submit" class="btn">Send<i class="uil uil-arrow-right"></i></button>
        </form>
      </div>
    </section>
  )
}

export default Contact