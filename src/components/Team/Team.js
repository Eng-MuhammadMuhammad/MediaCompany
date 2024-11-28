import React from 'react';
import styles from './Team.module.css';

const teamMembers = [
  { id: 1, name: 'John Doe', description: 'Web Developer', imgSrc: '/imgs/team-01.jpg' },
  { id: 2, name: 'Jane Smith', description: 'UI/UX Designer', imgSrc: '/imgs/team-02.jpg' },
  { id: 3, name: 'Mike Johnson', description: 'Backend Engineer', imgSrc: '/imgs/team-03.jpg' },
  { id: 4, name: 'Emily Brown', description: 'Project Manager', imgSrc: '/imgs/team-04.jpg' },
  { id: 5, name: 'Chris Lee', description: 'Data Scientist', imgSrc: '/imgs/team-05.png' },
  { id: 6, name: 'Sophia White', description: 'Frontend Developer', imgSrc: '/imgs/team-06.png' },
  { id: 7, name: 'Liam Wilson', description: 'Marketing Specialist', imgSrc: '/imgs/team-07.jpg' },
  { id: 8, name: 'Olivia Green', description: 'Content Writer', imgSrc: '/imgs/team-08.jpg' },
];

const Team = () => {
  return (
    <div className={styles.team} id="team">
      <h2 className={styles.mainTitle}>Team Members</h2>
      <div className={styles.container}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.box}>
            <div className={styles.data}>
              <img src={member.imgSrc} alt={member.name} className={styles.image} />
              <div className={styles.social}>
                <a href="/"><i className="fab fa-facebook-f"></i></a>
                <a href="/"><i className="fab fa-twitter"></i></a>
                <a href="/"><i className="fab fa-linkedin-in"></i></a>
                <a href="/"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className={styles.info}>
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
