import { FaTwitter, FaFacebookF,FaLinkedinIn, FaGithub} from 'react-icons/fa'


const Links = () => {
    const twitterUrl = 'https://twitter.com/CjayStev';
    const facebookUrl = 'https://web.facebook.com/chijokes';
    const linkedinUrl = 'https://www.linkedin.com/in/stevenemmanuel/';
    const githubUrl = 'https://github.com/emmanuelsteven';
  return (
    <div className=' flex justify-between pt-6 max-w-[200px] w-full'>
    <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
           <FaTwitter size={20} className='hover:scale-105 hover:text-blue-500'/>
         </a>
         <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-105 hover:text-blue-500">
           <FaFacebookF size={20} />
         </a>
         <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-105 hover:text-blue-500">
           <FaLinkedinIn size={20} />
         </a>
         <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-105 hover:text-blue-500">
           <FaGithub size={20} />
         </a>
    </div>
  )
}

export default Links