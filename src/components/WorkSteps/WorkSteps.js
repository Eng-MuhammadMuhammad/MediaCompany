import React from 'react';
import styles from './WorkSteps.module.css';

import work_photo_1 from '../../assets/imgs/work-steps-1.png'
import work_photo_2 from '../../assets/imgs/work-steps-2.png'
import work_photo_3 from '../../assets/imgs/work-steps-3.png'
import work_photo_4 from '../../assets/imgs/work-steps.png'

const workStepsData = [
  {
    title: 'Market Analysis',
    description: 'Conduct thorough research to understand the market, competition, and target audience for strategic decision-making.',
    imageSrc: work_photo_1
  },
  {
    title: 'Business Planning',
    description: 'Develop a comprehensive business plan that outlines the project’s scope, objectives, and strategies for growth.',
    imageSrc: work_photo_2
  },
  {
    title: 'Project Execution',
    description: 'Implement the business plan effectively, ensuring all teams are aligned and tracking progress to meet project milestones.',
    imageSrc: work_photo_3
  }
];

const WorkSteps = () => {
  return (
    <div className={styles.workSteps} id="work-steps">
      <h3 className={styles.mainTitle}>Work Steps</h3>
      <div className={styles.container}>
        <img src={work_photo_4} alt="Work Steps" className={styles.image} />
        <div className={styles.info}>
          {workStepsData.map((step, index) => (
            <div key={index} className={styles.box}>
              <img src={step.imageSrc} alt={step.title} />
              <div className={styles.text}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSteps;
