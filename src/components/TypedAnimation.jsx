import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypedAnimation = () => {
  return (
    <div className="text-center">
      <TypeAnimation
        sequence={[
          'I am Emmanuel Steven',
          2000,
          'A full-stack developer',
          2000,
          'Web Blogger',
          2000,
          'Tech Enthusiast',
          2000,
          'Learner',
          2000
        ]}
        wrapper="div"
        cursor={true}
        speed={50}
        className="text-[.25xl]font-bold text-gray-800"
        repeat={Infinity}
      />
    </div>
  );
};

export default TypedAnimation;
