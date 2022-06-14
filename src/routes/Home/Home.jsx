/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { MdOutlineDesignServices, MdOutlineDns, MdCode, MdOutlinePublic } from 'react-icons/md'
import { FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa'
import profile3 from '../../images/profile3.jpg'
import profile2 from '../../images/profile2.jpg'
import profile4 from '../../images/profile4.jpg'
import Resume from '../../images/Resume(Noah Lopez).pdf'


const Home = () => {
  return (

    <section className='home'>
      <div className='home__landing'>
        <div className='home__landing--container'>
          <div className="home__socials">
            <a className='home__socials-items' href="https://www.linkedin.com/in/nhlopez/" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
            <a className='home__socials-items' href="https://dribbble.com/NHLopez" target="_blank" rel="noreferrer noopener"><FaDribbble /></a>
            <a className='home__socials-items' href="https://github.com/NHLopez" target="_blank" rel="noreferrer noopener"><FaGithub /></a>
          </div>

          <div className="home__info">
            <h1 className="home__title">Web Developer
              {/* <span>& UI/UX Designer</span> */}
            </h1>
            <h3 className="home__sub-title">About Me</h3>
            <p className="home__desc">
              Hello and welcome to my portfolio! My name is Noah Lopez and I am 23 years old. Since graduating from
              University, I have been using what I learned to create on the web. I take pride in creating
              beautiful, usable, and professional websites.


            </p>
            <div className='home__cta'>
              <Link className="btn" to='/portfolio'>Explore More </Link>
              <Link className="btn" to='/contact'>Lets Talk</Link>
              <a href={Resume} class="btn" download><i class="uil uil-download-alt"></i>Resume</a>
            </div>

          </div>

          <div className="home__profile-area">
            <div className="home__outer-circle">
              <MdOutlineDesignServices className='home__circle-item' />
              <MdOutlineDns className='home__circle-item' />
              <MdCode className='home__circle-item' />
              <MdOutlinePublic className='home__circle-item' />
            </div>
            <div className="home__img">
              <img src={profile4} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home