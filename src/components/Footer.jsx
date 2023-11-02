import { FaCopyright } from 'react-icons/fa';
import Links from './Links';

const Footer = () => {
  return (
    <div  id='Footer' className="bg-white h-18 w-full z-50 flex flex-col justify-center items-center">
    
    <Links />
      <div className="flex items-center mt-2">
        <FaCopyright className="text-gray-400 mr-1" size={14} />
        <p className="text-gray-800">{new Date().getFullYear()} CjayDev</p>
      </div>
    </div>
  );
};

export default Footer;

