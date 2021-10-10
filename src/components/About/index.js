import React from 'react';
import coverImage from '../../assets/images/20210918_175104_035.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Full Stack Web Developer</h1>
      <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="cover" />
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
        </p>
      </div>
    </section>
  );
}

export default About;
