import React from 'react'
import Skill from './Skill/Skill'
import './Project.css'

const Project = ({ id, image, title, github, demo, techs }) => {
  return (
    <section className='project'>
      <div className='project__piece' key={id}>
        <div className='project__img--container'>
          <img className='project__img' src={image} alt="" />
        </div>
        <h4 className='project__heading'>{title}</h4>

        <div className='project__skills'>
          {techs.map((tech) => {
            return (
              <>
                <Skill technology={tech}/>
              </>
            )
          })}
        </div>
        <div className='project__cta'>
          <a href={github} target="_blank" rel="noreferrer noopener" className='btn btn-primary'> Github</a>
          <a href={demo} target="_blank" rel="noreferrer noopener" className='btn btn-primary'> Live Demo</a>
        </div>
      </div>
    </section>
  )
}

export default Project 
