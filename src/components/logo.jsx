import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className='flex'>
      <motion.div
        whileHover={{ backgroundColor:['#001b50'], 
        transition: {
          duration: 1,
        },
      }}    initial={{ backgroundColor: '#000' }}
        className='w-10 h-10 md:w-16 md:h-16 bg-[#000] text-white flex items-center justify-center rounded-full text-2xl md:text-4xl font-bold '
      >
        <a href="/main">ES</a>
      </motion.div>
    </div>
  );
};

export default Logo;
