import React from 'react';
import styles from './Articles.module.css'; 
import '../general.module.css'

const Articles = () => {
  const articles = [
    {
      title: "The Future of Web Development",
      description: "The world of web development is rapidly evolving. With advancements in AI and modern frameworks, the way we build websites and applications is changing. Learn about the latest trends and technologies shaping the industry.",
      imgSrc: "/imgs/cat-01.jpg",
      link: "/articles/future-of-web-development"
    },
    {
      title: "React 18 and its New Features",
      description: "React 18 has brought several new features, including concurrent rendering and automatic batching. Explore the enhancements that make React faster and more efficient.",
      imgSrc: "/imgs/cat-02.jpg",
      link: "/articles/react-18-features"
    },
    {
      title: "Introduction to JavaScript ES6+",
      description: "ES6+ introduced several new features to JavaScript, such as arrow functions, async/await, and template literals. Get to know the latest improvements and how they impact your code.",
      imgSrc: "/imgs/cat-03.jpg",
      link: "/articles/javascript-es6-plus"
    },
    {
      title: "Designing for Accessibility",
      description: "In the modern web, accessibility is crucial. Learn how to design websites and apps that are usable for everyone, including those with disabilities.",
      imgSrc: "/imgs/cat-04.jpg",
      link: "/articles/designing-for-accessibility"
    },
    {
      title: "Understanding CSS Grid Layout",
      description: "CSS Grid Layout is a powerful tool for creating complex layouts with ease. Learn how to use this modern CSS feature to design flexible and responsive websites.",
      imgSrc: "/imgs/cat-05.jpg",
      link: "/articles/css-grid-layout"
    },
    {
      title: "Optimizing Your Website for Speed",
      description: "Website speed is crucial for user experience and SEO. Discover techniques to optimize your website’s load time and improve performance.",
      imgSrc: "/imgs/cat-06.jpg",
      link: "/articles/website-speed-optimization"
    },
    {
      title: "The Rise of Progressive Web Apps (PWAs)",
      description: "Progressive Web Apps combine the best of web and mobile apps. Learn how PWAs can improve user engagement and performance on mobile devices.",
      imgSrc: "/imgs/cat-07.jpg",
      link: "/articles/progressive-web-apps"
    },
    {
      title: "Exploring the World of APIs",
      description: "APIs are the backbone of modern web development. Discover how APIs work, and how they enable communication between different software systems.",
      imgSrc: "/imgs/cat-08.jpg",
      link: "/articles/exploring-apis"
    }
  ];

  return (
    <div className={styles.articles} id="articles">
      <h2 className={styles.mainTitle}> Latest Articles</h2>
      <div className={styles.container}>
        {articles.map((article, index) => (
          <div key={index} className={styles.box}>
            <img src={article.imgSrc} alt={article.title} />
            <div className={styles.content}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
            <div className={styles.info}>
              <a href={article.link}>Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
