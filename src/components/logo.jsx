import React from 'react';
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className='flex'>
      <motion.div
        whileHover={{ backgroundColor:['f5f5f5','#121212','green','blue', 'red'], 
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }
      }}
        className='w-10 h-10 md:w-16 md:h-16 bg-gray-900 text-white flex items-center justify-center rounded-full text-2xl md:text-4xl font-bold '
      >
        <a href="/main">ES</a>
      </motion.div>
    </div>
  );
};

export default Logo;
