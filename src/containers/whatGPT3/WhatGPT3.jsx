import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Experience immersive virtual reality worlds like never before with AIGems, the AI-powered platform that generates stunning environments and interactive characters." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="SmartWorlds" text="Discover unique virtual reality worlds created by our AI algorithms using the latest machine learning and natural language processing techniques." />
      <Feature title="Characters" text="Interact with characters that respond to your voice and gestures in real-time using advanced computer vision and natural language processing" />
      <Feature title="InstantCreation" text="Generate your own virtual reality worlds quickly and easily with our pre-build assets and intuitive tools, perfecet for artists, developers, and gamers" />
    </div>
  </div>
);

export default WhatGPT3;