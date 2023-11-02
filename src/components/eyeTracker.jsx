import { useEffect } from "react";

const EyeTrackingComponent = () => {
  useEffect(() => {
    const pupils = document.querySelectorAll('.eye .pupil');
    const eyeRadius = 8; // Adjust the radius as needed (half of the eye's width/height)
    
    const handleMouseMove = (e) => {
      pupils.forEach((pupil) => {
        const rect = pupil.getBoundingClientRect();
        const eyeCenterX = rect.left + eyeRadius;
        const eyeCenterY = rect.top + eyeRadius;
        
        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > eyeRadius) {
          // Calculate the angle and maximum allowed distance within the eye
          const angle = Math.atan2(dy, dx);
          const maxX = Math.cos(angle) * eyeRadius;
          const maxY = Math.sin(angle) * eyeRadius;
          
          pupil.style.transform = `translate3d(${maxX}px, ${maxY}px, 0px)`;
        } else {
          pupil.style.transform = `translate3d(${dx}px, ${dy}px, 0px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 

  return (
    <div className="fixed top-0 right-0 p-4 mr-4 mt-32 flex gap-5 md:flex hidden">
      <div className="eye w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
        <div className="pupil w-6 h-6 rounded-full bg-white"></div>
      </div>
      <div className="eye w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
        <div className="pupil w-6 h-6 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default EyeTrackingComponent;
