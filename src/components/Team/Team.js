import React from 'react';
import styles from './Team.module.css';

import team_photo_1 from '../../assets/imgs/team-01.jpg'
import team_photo_2 from '../../assets/imgs/team-02.jpg'
import team_photo_3 from '../../assets/imgs/team-03.jpg'
import team_photo_4 from '../../assets/imgs/team-04.jpg'
import team_photo_5 from '../../assets/imgs/team-05.png'
import team_photo_6 from '../../assets/imgs/team-06.png'
import team_photo_7 from '../../assets/imgs/team-07.jpg'
import team_photo_8 from '../../assets/imgs/team-08.jpg'

const teamMembers = [
  { id: 1, name: 'John Doe', description: 'Web Developer', imgSrc: team_photo_1 },
  { id: 2, name: 'Jane Smith', description: 'UI/UX Designer', imgSrc: team_photo_2 },
  { id: 3, name: 'Mike Johnson', description: 'Backend Engineer', imgSrc: team_photo_3 },
  { id: 4, name: 'Emily Brown', description: 'Project Manager', imgSrc: team_photo_4 },
  { id: 5, name: 'Chris Lee', description: 'Data Scientist', imgSrc: team_photo_5 },
  { id: 6, name: 'Sophia White', description: 'Frontend Developer', imgSrc: team_photo_6 },
  { id: 7, name: 'Liam Wilson', description: 'Marketing Specialist', imgSrc: team_photo_7 },
  { id: 8, name: 'Olivia Green', description: 'Content Writer', imgSrc: team_photo_8 },
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
