import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projecttwo, projectThree , ProjectFour,projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Hira Dental Lab"
          des=" Developed hiradentallab.com using HTML, CSS, JavaScript, and Bootstrap for frontend
          design. Employed Django Python for backend functionality and utilized SQLite 3 for secure database
          management. Revolutionized dental solutions with innovative technology and precision craftsmanship. 
         https://hiradentallab.com"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="  Developed a dynamic dental e-commerce platform using React.js and Django Python, with MySQL for database management. Key features: responsive design, intuitive UI, secure authentication, comprehensive product catalog, efficient search, seamless checkout, order management, dynamic admin panel, and scalable architecture. Demonstrates proficiency in React.js, Django, and MySQL, delivering tailored solutions.
          https://hira-tech.co.uk/"
          src={projecttwo}
        />
        <ProjectsCard
          title="Denture Repairs"
          des="Frontend design for denturerepairscoventry.co.uk was created with HTML, CSS,
          JavaScript, and Bootstrap. used SQLite 3 for safe database administration and Django Python for backend
          functionality. dentistry solutions that have been transformed by cutting-edge technology and expert
          craftsmanship. 
     https://denturerepairscoventry.co.uk"
          src={projectThree}
        />
         <ProjectsCard
          title=" Cubes Smashed: An Interactive Web Game Project"
          des="Welcome to Cubes Smashed, an engaging web game where players unleash their skills in cube destruction! Developed using HTML, CSS, and JavaScript, this dynamic game offers thrilling gameplay with a time-bound challenge.
Players are challenged to destroy cubes within a time limit, enjoying seamless gameplay with responsive controls and dynamic visuals. Choose from adjustable difficulty levels to tailor the challenge to your skills. The game features a responsive design, ensuring an optimal experience across all devices. Compete for high scores with friends via the integrated leaderboard.

Explore Cubes Smashed now and test your cube destruction skills!

Check out the game here: https://hina-developer.github.io/My-Game.github.io/"
          src={ProjectFour}
        />
        <ProjectsCard
          title=" E-commerce Admin Panel"
          des="I developed a robust e-commerce admin panel using React to streamline online store management.Its intuitive interface and comprehensive features enable administrators to handle orders, invoices, customers, products, and staff effectively. This project showcases my ability to integrate complex backend functionality with a modern and responsive frontend, delivering a high-quality solution for e-commerce management.

Customer management capabilities enable administrators to handle customer profiles, view order histories, and implement support features. The product management section allows for adding, updating, and deleting products, managing categories and stock, and handling product images and descriptions"
          src={projectFive}
        />
      </div>
    </section>
  );
}

export default Projects