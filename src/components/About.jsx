import devImage from '../assets/images/devyy.jpg';

const About = () => {
  return (
    <div  id='About' className=" max-w-[1040] m-auto md:pl-20 p-4 py-16 bg-blue-50 ">
      <h1 className="uppercase text-4xl font-bold text-center text-black-800 mb-4">
        about me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex max-w-[768px]">
            <h2 className="uppercase text-3xl text-drop-animation">Hi there <br /> I am Emmanuel Steven </h2>
            <img src={devImage} alt="dev" className="max-w-[68%]" />

          </div>
          <div className="p-4">
            <p className="flex flex-wrap items-center justify-center text-xs md:text-lg w-full">
              Throughout my professional journey, I have undertaken a diverse
              array of projects, honing my skills and expertise in the field.
              Notably, I have had the privilege of studying at Microverse, a
              renowned online full stack school, where I further expanded my
              knowledge and refined my abilities.
            </p>
            <p className="flex flex-wrap flex row items-center justify-center text-xs md:text-lg w-full">
              The rigorous curriculum at Microverse exposed me to a wide
              range of real-world projects, providing invaluable hands-on
              experience and fostering a deep understanding of industry best
              practices.I strive to build intuitive and visually appealing
              interfaces that enhance user interactions. <br />
              Driven by a constant curiosity for the latest technologies and
              trends, I am always seeking opportunities to expand my skill set
              and explore new frameworks and libraries. My goal is to leverage
              my technical expertise and creativity to deliver innovative
              solutions and delightful user experiences.
              <br />
              When I am not coding, I could see another episode of Rick & Morty,
              I love cartoons.
            </p>
          </div>
        </div>
    
    </div>
  );
};

export default About;
