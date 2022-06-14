import React from 'react'
import './Skill.css'

const Skill = ({technology}) => {
    return (
        <div className="skill">
            <div className="skill__title">
                <div className="skill__img">
                    <img src={technology} alt="" class="skill__icon"></img>
                </div>
            </div>
        </div>
    )
}

export default Skill