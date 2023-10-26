import React from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProfile } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr'; 
import { BsPerson } from 'react-icons/bs';
import Logo from './logo';


import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{ 
        setNav(!nav)
    }
        return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-99 md:hidden' />
        { 
        nav ?(
            <div className='fixed w-full h-screen bg-black/90 flex flex-col justify-center items-center z-20'>
                <a href="main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome  size={20} />
                    <span className='pl-4'>Home</span>
                </a>
                <a href="projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects  size={20} />
                    <span className='pl-4'>Projects</span>
                </a>
                <a href="contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail  size={20} />
                    <span className='pl-4'>Contact</span>
                </a>
                <a href="main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson  size={20} />
                    <span className='pl-4'>Resume</span>
                </a>
            </div>
            
        ) 
       
       :(

<header className="md:block hidden w-full font-medium px-32 py-4 ">
    <div className='flex items-center justify-between'>
     <div className="flex items-center">
        <Logo />
        </div>
    
<nav className="relative flex items-center">
    <a href="/" className="mr-4">Home</a>
    <a href="/projects" className="mx-4">Projects</a>
    <a href="/contact" className="mx-4">Contact</a>
    <a href="/resume" className="ml-4">Resume</a>
    <span className="h-[1px] w-0 bg-gray-900 absolute left-0 -bottom-0.5 group-hover:w-full transition-width ease duration-300">&nbsp;</span>
  </nav>
  </div>
</header>
       )}
       <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
            <a href="main" className='rounded-full, bg-transparent shadow-lg bg-gray-300 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineHome />
            </a>
            <a href="projects" className='rounded-full, bg-transparent shadow-lg bg-gray-300 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <GrProjects />
            </a>
            <a href="contact" className='rounded-full, bg-transparent shadow-lg bg-gray-300 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
            </a>
            <a href="main" className='rounded-full, bg-transparent shadow-lg bg-gray-300 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsPerson />
            </a>

        </div>
    
</div>

    </div>
  )
}

export default Navbar

// import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProfile } from 'react-icons/ai';
// import { GrProjects } from 'react-icons/gr'; 
// import { BsPerson } from 'react-icons/bs';
// import Logo from './logo';

// const desktopNavLinks = [
//     { url: '/', label: 'Home', className: 'mr-4' },
//     { url: '/projects', label: 'Projects', className: 'mx-4' },
//     { url: '/contact', label: 'Contact', className: 'mx-4' },
//     { url: '/resume', label: 'Resume', className: 'ml-4' },
// ];

// const NavLink = ({ icon, label, classes }) => (
//     <a href="main" className={classes}>
//         {icon}
//         <span className='pl-4'>{label}</span>
//     </a>
// );

// const Navbar = () => {
//     const [nav, setNav] = useState(false);

//     const handleNav = () => { 
//         setNav(!nav);
//     }

//     const commonNavLinkClasses = 'rounded-full bg-gray-300 shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300';

//     return (
//         <div>
//             <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-99 md:hidden' />
//             { 
//                 nav ? (
//                     <div className='fixed w-full h-screen bg-black/90 flex flex-col justify-center items-center z-20'>
//                         {/* Navigation links */}
//                         <NavLink icon={<AiOutlineHome size={20} />} label="Home" classes={commonNavLinkClasses} />
//                         <NavLink icon={<GrProjects size={20} />} label="Projects" classes={commonNavLinkClasses} />
//                         <NavLink icon={<AiOutlineMail size={20} />} label="Contact" classes={commonNavLinkClasses} />
//                         <NavLink icon={<BsPerson size={20} />} label="Resume" classes={commonNavLinkClasses} />
//                     </div>
//                 ) : (
//                     <header className="md:block hidden w-full font-medium px-32 py-4">
//                         <div className='flex items-center justify-between'>
//                             <div className="flex items-center">
//                                 <Logo />
//                             </div>
//                             <nav className="relative flex items-center">
//                                 {desktopNavLinks.map((link, index) => (
//                                     <a key={index} href={link.url} className={link.className}>
//                                         {link.label}
//                                     </a>
//                                 ))}
//                             </nav>
//                         </div>
//                     </header>
//                 )}
//                 <div className='md:block hidden fixed top-[25%] z-10'>
//                     <div className='flex flex-col'>
//                         {desktopNavLinks.map((link, index) => (
//                             <NavLink key={index} icon={link.icon} label={link.label} classes={commonNavLinkClasses} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//     );
// }

// export default Navbar;



