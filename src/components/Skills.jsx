import HTML from '../assets/images/html.png';
import Ruby from '../assets/images/Ruby.jpg';
import tailwind from '../assets/images/tailwind.png';
import CSS from '../assets/images/css.png';
import react from '../assets/images/react.png';
import JS from '../assets/images/javascript.png';
import rails from '../assets/images/rails.png';
import redux from '../assets/images/redux.png';
import git from '../assets/images/git.png';
import figma from '../assets/images/figma.png';
import post from '../assets/images/post.png';
import next from '../assets/images/nexty.png';

const Skills = () => {
  return (
    <div id="skills" className="w-full p-4 md:m-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h1 className='py-4 text-4xl font-bold text-center text-black-800 uppercase'>
       my <span className='text-[#327FC3]'>skills</span>
      </h1>
        <h2 className="text-xl tracking-widest uppercase py-4">My Skill sets</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={HTML} alt="HTML" width="64px" height="64px" />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={CSS} alt="CSS" width="64px" height="64px" />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={git} alt="CSS" width="64px" height="64px" />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>GIT</h3>
              </div>
            </div>
          </div>
           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={JS} alt="JavaScript" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div> 
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={react} alt="React" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={redux} alt="React" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REDUX</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={tailwind} alt="Tailwind" width="64px" height="64px" />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={Ruby} alt="Ruby" width="64px" height="64px" />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>RUBY</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={rails} alt="Rails" width="64px" height="64px" />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>RAILS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={post} alt="Rails" width="64px" height="64px" />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={figma} alt="Rails" width="64px" height="64px" />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>FIGMA</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={next} alt="Next" width="64px" height="64px" />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>NEXT.JS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
