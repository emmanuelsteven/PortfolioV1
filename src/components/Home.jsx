import remImage from '../assets/images/Em.png';
import EyeTrackingComponent from './eyeTracker';
import TypedAnimation from './TypedAnimation';
import Links from './Links';

const Home = () => {
  return (
    <div  id='Home' className='flex flex-col md:flex-row  items-center justify-between w-full bg-blue-50  m-auto md:pl-20 p-4 py-16'>
      <div  className='flex items-center justify-between w-full mt-32'>
         <img className='w-full  h-50vh  objec-left scale-x-[-1] md:w-[90%]'src={remImage} alt="invalid" />
         </div>
         <EyeTrackingComponent />
         <div className='w-30% m-auto h-full  flex flex-col justify-center lg:items-start items-center'>
      <h1 className='sm:text-5xl text-4xl font-bold text-gray-800  mb-4'>Hey there, I am Emmanuel Steven<br /> A Full-stack web developer </h1> 
      <p className='flex flex-col sm:text-2xl text-2 pt-4 text-gray-800  m-1'>
      With a background in developing efficient software applications in a global market. More than 1300+ hours of experience, including mentoring 10+ junior developers to achieve concrete goals on a strict deadline.
   </p>
   <TypedAnimation /> 
   <Links />
      </div>
    </div> 
  )
}

export default Home