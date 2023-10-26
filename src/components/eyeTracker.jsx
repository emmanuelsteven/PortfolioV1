import React, { useEffect } from 'react';

const EyeTrackingComponent = () => {
  useEffect(() => {
    const pupils = document.querySelectorAll('.eye .pupil');

    const handleMouseMove = (e) => {
      pupils.forEach((pupil) => {
        const rect = pupil.getBoundingClientRect();
        const x = (e.clientX - rect.left) / 30 + 'px';
        const y = (e.clientY - rect.top) / 30 + 'px';
        pupil.style.transform = `translate3d(${x}, ${y}, 0px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="flex items-center justify-center h-96">
      <div className="eye w-32 h-24 rounded-full bg-white flex items-center justify-center">
        <div className="pupil w-16 h-16 rounded-full bg-black"></div>
      </div>
      <div className="eye w-32 h-24 rounded-full bg-white flex items-center justify-center">
        <div className="pupil w-16 h-16 rounded-full bg-black"></div>
      </div>
    </div>
  );
};

export default EyeTrackingComponent;
