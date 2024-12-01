import React from 'react';
import styles from './Testimonials.module.css';


import testi_photo_1 from '../../assets/imgs/avatar-01.png'
import testi_photo_2 from '../../assets/imgs/avatar-02.png'
import testi_photo_3 from '../../assets/imgs/avatar-03.png'
import testi_photo_4 from '../../assets/imgs/avatar-04.png'
import testi_photo_5 from '../../assets/imgs/avatar-05.png'

const testimonialsData = [
  {
    name: 'Abed alhosami',
    title: 'Web Developer',
    image: testi_photo_1,
    rating: 2,
    feedback: 'Abed has a strong foundation in web development and provided valuable insights into front-end technologies. Although some deadlines were challenging, his effort and dedication were evident throughout the project.',
  },
  {
    name: 'Majd Mohammad',
    title: 'Data Expert',
    image: testi_photo_2,
    rating: 3,
    feedback: 'Majd has a keen eye for data analysis and was instrumental in uncovering trends that helped guide our decision-making. His expertise helped us streamline processes and understand our data better.',
  },
  {
    name: 'Jon Raski',
    title: 'UI UX Designer',
    image: testi_photo_3,
    rating: 4,
    feedback: 'Jon’s creativity shines in every project he takes on. His UI designs are not only visually appealing but also user-friendly. Working with Jon was a pleasure, and he consistently exceeded expectations.',
  },
  {
    name: 'Sami Haloni',
    title: 'Designer',
    image: testi_photo_4,
    rating: 4,
    feedback: 'Sami brings a fresh perspective to design, with a great balance of functionality and aesthetics. His work was well-received by our clients, and his adaptability to feedback made him an asset to the team.',
  },
  {
    name: 'Sora Loren',
    title: 'Content Writer',
    image: testi_photo_5,
    rating: 2,
    feedback: 'Sora has a creative approach to content writing and developed engaging pieces for our blog. Her storytelling abilities were impressive, though some edits were required to align with brand voice.',
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
      <h2 className={styles.mainTitle}>Testimonials</h2>
      <div className={styles.container}>
        {testimonialsData.map((testimonial, index) => (
          <div className={styles.box} key={index}>
            <img src={testimonial.image} alt={testimonial.name} className={styles.image} />
            <h3>{testimonial.name}</h3>
            <span className={styles.title}>{testimonial.title}</span>
            <div className={styles.rate}>
              {[...Array(5)].map((_, i) => (
                <i key={i} className={i < testimonial.rating ? `${styles.filled} fas fa-star` : 'far fa-star'}></i>
              ))}
            </div>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
