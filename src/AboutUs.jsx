// src/AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="aboutus">
      <h2 className="aboutus-title">About Paradise Nursery</h2>
      <p className="aboutus-body">
        Paradise Nursery is an online plant shop dedicated to bringing the calm,
        beauty, and health benefits of houseplants into every home. We curate
        easy-to-care-for plants for beginners, as well as unique varieties for
        experienced plant lovers.
      </p>
      <p className="aboutus-body">
        Our collection includes air-purifying plants, aromatic and medicinal
        herbs, and low-maintenance greenery that thrive in modern indoor spaces.
        Each plant is hand-picked, carefully packaged, and delivered with clear
        care instructions so you can grow your own corner of paradise.
      </p>
      <p className="aboutus-body">
        At Paradise Nursery, our mission is simple: make it effortless for you
        to discover, learn about, and enjoy plants that fit your lifestyle.
      </p>
    </section>
  );
};

export default AboutUs;
