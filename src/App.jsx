import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Image1 from './assets/1.png';
import Image2 from './assets/2.png';
import Image3 from './assets/3.png';
import Image4 from './assets/4.png';
import Image5 from './assets/5.png';
import Image6 from './assets/6.png';
import Image7 from './assets/7.png';
import Image8 from './assets/8.png';
import Image9 from './assets/9.png';
import Image10 from './assets/10.png';
import Image11 from './assets/11.png';
import Image12 from './assets/12.png';
import Image13 from './assets/13.png';
import Image14 from './assets/14.png';
import Image15 from './assets/15.png';
import Image16 from './assets/16.png';
import Image17 from './assets/17.png';

const App = () => {
  // You can replace these with your actual information
  const personalInfo = {
    name: "Ayush Shukla",
    bio: "A brief description about yourself. You can write about your interests, skills, or anything you'd like people to know about you.",
    email: "ayushshukla8540@gmail.com",
    location: "Noida, India",
    phone: "+91 9310063048",
    vsco: "https://vsco.co/ayushhshuklaa" 
  };

  // Add your image paths here
  const imagePaths = [
    { src: Image1, alt: 'Gallery image 1' },
    { src: Image2, alt: 'Gallery image 2' },
    { src: Image3, alt: 'Gallery image 3' },
    { src: Image4, alt: 'Gallery image 4' },
    { src: Image5, alt: 'Gallery image 5' },
    { src: Image6, alt: 'Gallery image 6' },
    { src: Image7, alt: 'Gallery image 7' },
    { src: Image8, alt: 'Gallery image 8' },
    { src: Image9, alt: 'Gallery image 9' },
    { src: Image10, alt: 'Gallery image 10' },
    { src: Image11, alt: 'Gallery image 11' },
    { src: Image12, alt: 'Gallery image 12' },
    { src: Image13, alt: 'Gallery image 13' },
    { src: Image14, alt: 'Gallery image 14' },
    { src: Image15, alt: 'Gallery image 15' },
    { src: Image16, alt: 'Gallery image 16' },
    { src: Image17, alt: 'Gallery image 17' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header with personal information */}
      <header className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{personalInfo.name}</h1>
        <p className="text-gray-600 mt-2 mb-4">{personalInfo.bio}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>{personalInfo.phone}</span>
          </div>
          {/* New VSCO link */}
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            <a href={personalInfo.vsco} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              My VSCO Profile
            </a>
          </div>
        </div>
      </header>

      {/* Image gallery */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Image Gallery</h2>
        
        {/* Images displayed linearly with equal width */}
        <div className="space-y-8">
          {imagePaths.map((image, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-2xl">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-md shadow-md object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;