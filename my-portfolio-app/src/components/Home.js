import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='overlay'>
      <h1>Welcome to my Portfolio</h1>
      <p>
        I am a software engineer with a passion for creating web applications. I am proficient in HTML, CSS, and JavaScript. I am also experienced in different languages, C, Python. Frameworks like React, I am currently learning Python and Django. I am looking for opportunities to work with a team of developers to create amazing applications.
      </p>
      <Link to="/projects" className='btn-project'>Projects</Link>
      </div>
    </div>
  );
};

export default Home