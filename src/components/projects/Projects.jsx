import { forwardRef, useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Data } from './Data';

const Projects = forwardRef(function Projects(props, ref) {
  const [animateCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });
  const projectData = Data;

  useEffect(() => {
    setAnimatedCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimatedCard({ y: 0, opacity: 1 });
    }, 500);
  }, []);

  return (
    <div id='Projects' className='md:flex justify-center items-center md:pl-16 md:pr-16  md:mt-16'>
      <motion.div
        ref={ref}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className='flex items-center justify-center text-2xl font-bold text-gray-800'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className='py-4 text-4xl font-bold text-center text-black-800 uppercase m-10'> Projects</div>
        </motion.h2>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'
        >
          {projectData.map((project, index) => (
            <div key={index} className='relative border-2 border-transparent hover:border-gray-800 rounded-lg mb-4 md:w-[400px]'>
              <div className="relative rounded-lg overflow-hidden ">
                <img src={project.image} alt={project.name} className='w-full h-full' />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className='absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 bg-black/50 hover:opacity-100 transition-opacity duration-300'
                >
                  <a href={project.projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='text-white mx-4'
                    >
                      <AiFillEye size={30}/>
                    </motion.div>
                  </a>
                  <a href={project.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='text-white'
                    >
                      <AiFillGithub size={25}/>
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className='mt-4'>
                <h4 className='text-lg font-semibold text-gray-800'>{project.title}</h4>
                <p className='text-sm text-gray-600 mt-2'>{project.description}</p>
                <div className='text-sm text-gray-600 mt-2'>
                  Stack/Tools:
                  {project.stacks.map((stack, index) => (
                    <span key={index}> {stack},</span>
                  ))}
                </div>
                <div className='mt-4 flex'>
                  <a href={project.projectLink} target='_blank' rel='noreferrer' className='text-gray-500 hover:text-gray-800 mr-4'>
                    <FiExternalLink />
                  </a>
                  <a href={project.codeLink} target='_blank' rel='noreferrer' className='text-gray-500 hover:text-gray-800'>
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

export default Projects;
