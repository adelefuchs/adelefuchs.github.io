// components/ScrapbookPage.js
import React from 'react';
import './ScrapbookPage.css';

const ScrapbookPage = () => (
  <div className="scrapbook-page">
    <img src="/public/photo.jpg" alt="My Photo" className="photo" />
    <p className="intro-text">Hello! I'm [Your Name]</p>
    <div className="sticker sticker1">Welcome</div>
    <div className="sticker sticker2">About Me</div>
    {/* Add more elements as needed */}
  </div>
);

export default ScrapbookPage;
