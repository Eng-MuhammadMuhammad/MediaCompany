import React from 'react';
import styles from './Skills.module.css';

import skill_photo from '../../assets/imgs/skills.png'

const Skills = () => {
  const skillsData = [
    { name: 'HTML', level: '80%' },
    { name: 'CSS', level: '95%' },
    { name: 'JavaScript', level: '70%' },
    { name: 'Python', level: '75%' },
  ];

  return (
    <div className={styles.ourSkills} id="our-skills">
      <h2 className={styles.mainTitle}>Our Skills</h2>
      <div className={styles.container}>
        <img src={skill_photo} alt="Skills" />

        <div className={styles.skills}>
          {skillsData.map((skill, index) => (
            <div className={styles.skill} key={index}>
              <h3>
                {skill.name} <span>{skill.level}</span>
              </h3>
              <div className={styles.theProgress}>
                <span style={{ width: skill.level }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
