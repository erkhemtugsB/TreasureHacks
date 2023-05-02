import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Adaptive Learning',
    text: 'Our AI algorithms learn from your interactions and adjust the virtual reality world to your preferences, creating a truly personalized experience',
  },
  {
    title: 'Collaborative Building',
    text: 'Multiple users can work together to design and build virtual reality environments in real-time, perfect for creative teams, game developres, and educators',
  },
  {
    title: 'Smart Quests',
    text: 'Embark on exciting adventures guided by our AI-powered characters, designed to be challanging and entertaining',
  },
  {
    title: 'Real-Time Translation',
    text: 'Translate your voice and text into any language in real-time, perfect for international teams or players who want to communicate with others who speak a different language',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Step into the future today and make it happen. The future is already here, you just need to realize it.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;