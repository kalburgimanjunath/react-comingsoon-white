import React from 'react';
import './style.css';
import Video from './Video';
import About from './About';
export default function App() {
  return (
    <div className="app">
      <video width="100%" height="auto" autoplay loop>
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="rightpart">
        <About />
      </div>
    </div>
  );
}
