import pic from "../assets/Pic.svg";
import insta from "../assets/insta.svg";
import face from "../assets/face.svg";
import git from "../assets/git.svg";
import link from "../assets/link.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
function About() {
  return (
    <div >
      <div className="md:w-[1440px] w-screen  md:ml-10 -mt-40 md:relative -z-10  ">
        <div className="md:w-[414px] left-[598px] top-[274px] md:absolute text-black md:text-[64px] text-2xl px-3 md:px-0 font-bold font-['Montserrat'] md:mt-0 mt-40">
          👋 HI there!{" "}
        </div>
        <div className="md:w-[703px] md:h-[243px] left-[598px] top-[377px] md:absolute text-black md:text-2xl px-3 md:px-0 py-3 md:py-0 font-semibold font-['Montserrat'] ">
          Greetings! Im Mohan Tayade, a seasoned web developer <br />
          passionate about shaping digital landscapes.
          <br />
          With a proven track record in MERN (MongoDB, Express.js, React,
          Node.js) application development, I transform concepts into dynamic,
          user-centric realities.
        </div>
        <img
          className="md:w-[386px] w-[300px] md:h-[376px] left-[139px] top-[228px] md:absolute rounded-[60px] mx-auto my-5 "
          src={pic}
        />
        <div className="md:w-[1143px] md:h-[880px] left-[139px] top-[670px] md:absolute px-3 md:px-0 py-3 md:py-0 ">
          <span className="text-purple-600 md:text-[32px] font-semibold font-['Montserrat']">
            What Sets Me Apart:
            <br />
          </span>
          <span className="text-black md:text-xl font-medium font-['Montserrat'] ">
            As a dedicated professional, I dont just stop at coding. My skills
            extend into the realm of UI/UX design, ensuring that every
            application I create is not only functional but also visually
            appealing and user-friendly.
            <br />
          </span>
          <span className="text-black md:text-xl font-semibold font-['Montserrat']">
            <br />
          </span>
          <span className="text-purple-600 md:text-[32px] font-semibold font-['Montserrat']">
            Technical Proficiency:
            <br />
          </span>
          <span className="text-black md:text-xl font-medium font-['Montserrat']">
            Specializing in the MERN stack, I navigate the intricacies of
            MongoDB for robust data management, Express.js for scalable
            server-side development, React for building engaging user
            interfaces, and Node.js for efficient server operations.
            Additionally, my expertise includes frontend frameworks like
            Tailwind CSS and Bootstrap, adding finesse to the visual aspects of
            my creations.
            <br />
          </span>
          <span className="text-black md:text-xl font-semibold font-['Montserrat']">
            <br />
          </span>
          <span className="text-purple-600 md:text-[32px] font-semibold font-['Montserrat']">
            Beyond Code:
            <br />
          </span>
          <span className="text-black md:text-xl font-medium font-['Montserrat']">
            I believe in the power of collaboration and continuous learning.
            Beyond the technicalities, my journey involves staying abreast of
            the latest industry trends, exploring innovative solutions, and
            fostering a holistic approach to web development.
            <br />
          </span>
          <span className="text-black md:text-xl font-semibold font-['Montserrat']">
            <br />
          </span>
          <span className="text-purple-600 md:text-[32px] font-semibold font-['Montserrat']">
            Lets Collaborate:
            <br />
          </span>
          <span className="text-black md:text-xl font-medium font-['Montserrat']">
            Whether youre a startup looking to establish a digital presence or
            an established business aiming to revamp your online experience, Im
            here to collaborate. Lets turn your ideas into captivating,
            functional, and user-friendly digital solutions.
            <br />
          </span>
          <span className="text-black md:text-xl font-semibold font-['Montserrat']">
            <br />
          </span>
          <span className="text-purple-600 md:text-[32px] font-semibold font-['Montserrat']">
            Join Me on This Journey:
            <br />
          </span>
          <span className="text-black md:text-xl font-medium font-['Montserrat']">
            Embark on a journey of digital excellence with me, Mohan Tayade.
            Together, we can create innovative, impactful, and memorable online
            experiences. Explore the possibilities and lets bring your vision to
            life!
          </span>
        </div>

        <div className="md:w-[1440px] w-screen h-24 md:h-[233px] left-0 top-[1451px] md:absolute bg-neutral-700 rounded-tl-[30px] rounded-tr-[30px] flex items-center justify-between " >
        <div className=" flex mt-8 gap-6 mx-7 md:mx-20 mb-6 md:mb-0">
          <Link
            to="https://www.linkedin.com/in/mohan-tayade/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              src={link}
            />
          </Link>

          <Link
            to="https://www.instagram.com/mohan_tayade_/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              src={insta}
            />
          </Link>

          <Link
            to="https://www.facebook.com/mohantayade007"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              src={face}
            />
          </Link>

          <Link
            to="https://github.com/mohantayade"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              src={git}
            />
          </Link>
        </div>
        <Link
          to="/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-64  invert md:block hidden"
            src={logo}
          />
        </Link>
        
        </div>
       
      </div>
    </div>
  );
}

export default About;
