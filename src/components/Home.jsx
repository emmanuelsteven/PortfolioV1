import React from 'react'
import remImage from '../assets/images/Em.png';
import EyeTrackingComponent from './eyeTracker';
import TypedAnimation from './TypedAnimation';
import { FaTwitter, FaFacebookF,FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row  items-center justify-between w-full'>
      <div className='flex items-center justify-between w-full'>
         <img className='w-full  h-50vh  objec-left scale-x-[-1] md:w-[90%]'src={remImage} alt="invalid" />
         </div>
         <EyeTrackingComponent />
         <div className='w-30% m-auto h-full  flex flex-col justify-center lg:items-start items-center'>
      <h1 className='sm:text-5xl text-4xl font-bold text-gray-800  mb-4'>Turning ideas into substance with codes and designs </h1> 
      <p className='flex flex-col sm:text-2xl text-1xl pt-4 text-gray-800  m-1'>As a skilled full-stack developer , i am dedicated to turning ideas into innovative web applications.Explore my latest projects and publications, showcasing my expertise...would love to hear from you 
   </p>
  
   <TypedAnimation /> 
   <div className=' flex justify-between pt-6 max-w-[200px] w-full'>
   <FaTwitter className='cursor-pointer' size={20} />
   <FaFacebookF className='cursor-pointer' size={20} />
   <FaLinkedinIn  className='cursor-pointer' size={20}/>
   <FaGithub className='cursor-pointer' size={20} />
   </div>
      </div>
    </div> 
  )
}

export default Home