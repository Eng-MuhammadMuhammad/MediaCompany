import React from 'react';
import styles from './WorkSteps.module.css';

const workStepsData = [
  {
    title: 'Market Analysis',
    description: 'Conduct thorough research to understand the market, competition, and target audience for strategic decision-making.',
    imageSrc: '/imgs/work-steps-1.png'
  },
  {
    title: 'Business Planning',
    description: 'Develop a comprehensive business plan that outlines the project’s scope, objectives, and strategies for growth.',
    imageSrc: '/imgs/work-steps-2.png'
  },
  {
    title: 'Project Execution',
    description: 'Implement the business plan effectively, ensuring all teams are aligned and tracking progress to meet project milestones.',
    imageSrc: '/imgs/work-steps-3.png'
  }
];

const WorkSteps = () => {
  return (
    <div className={styles.workSteps} id="work-steps">
      <h3 className={styles.mainTitle}>Work Steps</h3>
      <div className={styles.container}>
        <img src="/imgs/work-steps.png" alt="Work Steps" className={styles.image} />
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
