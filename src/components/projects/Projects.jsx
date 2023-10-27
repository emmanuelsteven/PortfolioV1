import React, { forwardRef, useEffect, useState } from 'react';
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
    <div>
      <motion.div
        ref={ref}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h2 className=' flex items-center justify-center text-2xl font-bold text-gray-800 m-4 underlined-h2'>
          My<span className='text-black-500'> Projects</span>
        </h2>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4'
        >
          {projectData.map((project, index) => (
            <div key={index} className='relative'>
              <div className=" relative rounded-lg overflow-hidden ">
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
                      className='text-white'
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={project.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='text-white'
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className='mt-4'>
                <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                <div className='text-sm text-gray-600 mt-2'>
                  Stack/Tools:
                  {project.stacks.map((stack, index) => (
                    <span key={index}> {stack},</span>
                  ))}
                </div>
                <div className='mt-4'>
                  <a href={project.projectLink} target='_blank' rel='noreferrer' className='text-blue-500 mr-4'>
                    <FiExternalLink />
                  </a>
                  <a href={project.codeLink} target='_blank' rel='noreferrer' className='text-blue-500'>
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
