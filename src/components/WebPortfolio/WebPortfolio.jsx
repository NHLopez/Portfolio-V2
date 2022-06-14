import React from 'react'
import Project from './Project/Project'
import './WebPortfolio.css'
// import images from '../../data/images'
import projects from '../../data/projects.js'

const WebPortfolio = () => {
    return (
        <section className='web-portfolio'>
            <div className='web-portfolio__container'>
                <div className='web-portfolio__heading'>
                    <h2 className='web-portfolio__title'>Web Pages</h2>
                    <p>
                        From a background in design, I love creating pages where I am able to actually create enjoyable
                        interactions and experiences for everyone. This section contains several types of websites & web apps
                        I have worked on.
                    </p>
                </div>

                <div className='web-portfolio__projects'>
                    {projects.map(({ id, image, title, github, demo, techs }) => {
                        return (
                            <>
                                <Project key={id} image={image} title={title} github={github} demo={demo} techs={techs} />
                            </>
                        )
                    })
                    }
                </div>
            </div>

        </section>
    )
}

export default WebPortfolio