import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import Page from "./Page";
import pic from "../assets/Pic.svg";
import frontPic from "../assets/3dFront.png";
import backPic from "../assets/backend.png";
import uiuxPic from "../assets/uiux.png";
import aro from "../assets/aero.png";
import insta from "../assets/insta.svg";
import face from "../assets/face.svg";
import git from "../assets/git.svg";
import link from "../assets/link.svg";
import mlogo from "../assets/mlogo.svg";
import { Link } from "react-router-dom";
// images
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
// import NavbarMob from "./NavbarMob";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//

//

function Hero() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("contact");
  }
  function handleClickAbout() {
    navigate("about");
  }
  function handleClickProject() {
    navigate("project");
  }
  


  // carusal
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show one card at a time on mobile
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for tablets and larger screens
        settings: {
          slidesToShow: 1, // Show three cards at a time on desktop
          slidesToScroll: 1,
        },
      },
    ],
  };
  // carusal

  // mouse start
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%", transition: { duration: 0.5, type: "tween" } },
  };

  // mouse effect
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  console.log(mousePosition);
  const [cursorVariant, setCursorVeriant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: "difference",
      backgroundColor: "white",
    },
  };

  const textEnter = () => setCursorVeriant("text");

  const textLeave = () => setCursorVeriant("default");
  // mouse end

  return (
    <div className="overflow-hidden ">
      <div className="h-screen w-screen bg-white overflow-hidden ">
        <div >
          {/* <Navbar />
          <NavbarMob /> */}
        </div>
{/* pic hero */}
        <div className="main   md:flex">
          <div className="right  md:h-screen md:w-[50%] md:relative md:pt-7 md:mx-0 mx-3 pt-2 ">
            <div>
              <div className="name md:absolute  md:left-24 md:leading-[80px] leading-10 left-5 w-screen">
                <h2
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className="font-extrabold font-['Montserrat'] md:text-[50px] text-[40px]"
                >
                  <AnimatedText text="HI👋" />
                </h2>
                <h1
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className="font-extrabold font-['Montserrat'] md:text-[85px] text-[40px]"
                >
                  <AnimatedText text="I’Am Mohan, a"/>
                </h1>
                <h1
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className=" text-black font-extrabold font-['Montserrat'] md:text-[80px] text-[40px]"
                >
                  <AnimatedText text="Web Developer" />
                </h1>
              </div>
              <div className="">
                <motion.p
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="md:absolute md:text-lg md:left-24 left-5 md:top-[300px] top-[240px] md:w-[600px] w-screen text-sm pt-3 md:pt-0 whitespace-normal"
                >
                  Passionate MERN web developer dedicated to crafting seamless
                  digital experiences. Specializing in MongoDB, Express.js,
                  React, and Node.js
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                variants={{
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                whileInView="visible"
                className="md:absolute md:left-24 md:top-96 md:flex md:gap-5 flex gap-4 pt-3 md:pt-0 pb-3 md:pb-0 "
              >
                <motion.button
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClick}
                  className="bg-purple-400 md:px-5 md:py-2 rounded-lg md:font-bold  px-7 py-1 font-myfont"
                >
                  Contact
                </motion.button>
                <motion.button
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="border-black border-2 md:px-5 md:py-2 md:font-bold  font-myfont rounded-lg px-5 py-1 font-medium"
                >
                  Download CV ⬇️
                </motion.button>
              </motion.div>
            </div>
          </div>

          <div className="left    md:h-screen md:w-[50%] md:relative md:left-0   w-screen absolute py-6 px-9 ">
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              whileInView="visible"
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
              src={pic}
              className="w-[300px]   md:w-[550px] md:absolute md:top-5 md:left-28 md:rounded-[45px] rounded-[45px]"
            ></motion.img>
          </div>
        </div>
      </div>

      {/* Page 2 start form hear */}

      <motion.section className="container relative h-screen w-screen bg-white overflow-hidden md:block hidden">
        <div className="absolute origin-top-left top-[18%] rotate-[7.42deg] w-[1800px] h-60 bg-purple-400"></div>
        <div className="absolute origin-top-left top-[18%] rotate-[7.42deg]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            
            className="absolute origin-top-left top-[23%] rotate-[7.42deg]"
          >
            <motion.div
              animate={{ x: -scrollY }}
              transition={{
                type: "tween",
                duration: 0.6,
              }}
              className="w-screen h-28 text-8xl font-extrabold whitespace-nowrap"
            >
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="absolute -left-12 tracking-tighter text-white stroke-black stroke-2 "
              >
                Code Together !<span>- Design Together !</span>- Code Together !
                <span>- Design Together !</span>- Code Together !
                <span>- Design Together !</span> -
              </div>
            </motion.div>

            <motion.div
              animate={{ x: scrollY }}
              transition={{
                type: "tween",
                duration: 0.5,
              }}
              className="w-screen  h-28  text-8xl  font-extrabold text-center whitespace-nowrap"
            >
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="absolute -left-[2000px] tracking-tighter"
              >
                Design -<span>Code -</span> Development <span>-Design</span>-
                Code <span>- Development</span>- Design -<span>code -</span>{" "}
                Development <span>-Design</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* page 2  hear carusal */}
      <div className="h-auto pb-5 w-screen bg-[#414141] overflow-hidden">
        <h2
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="md:ml-40 ml-6 md:pt-10 pt-6 text-white md:text-[44px] text-[25px] font-extrabold font-myfont overflow-hidden"
        >
          <AnimatedText text="LATEST PROJECT 🔥" />
        </h2>

        <Slider {...settings} className="md:mx-40 mx-0 overflow-hidden  ">
          {/* Repeat this block for each card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="p-4  "
          >
            {/* Card content goes here */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="bg-gray-200  p-6 w-[330px] h-[493px] rounded-[30px] mx-auto"
            >
              Card 1
            </motion.div>
          </motion.div>
          {/* Repeat this block for each card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="p-4  "
          >
            {/* Card content goes here */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="bg-gray-200  p-6 w-[330px] h-[493px] rounded-[30px] mx-auto"
            >
              Card 1
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="p-4  "
          >
            {/* Card content goes here */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="bg-gray-200  p-6 w-[330px] h-[493px] rounded-[30px] mx-auto"
            >
              Card 1
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="p-4  "
          >
            {/* Card content goes here */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="bg-gray-200  p-6 w-[330px] h-[493px] rounded-[30px] mx-auto"
            >
              Card 1
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="p-4  "
          >
            {/* Card content goes here */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="bg-gray-200  p-6 w-[330px] h-[493px] rounded-[30px] mx-auto"
            >
              Card 1
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="p-4  "
          >
            {/* Card content goes here */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="bg-gray-200  p-6 w-[330px] h-[493px] rounded-[30px] mx-auto"
            >
              Card 1
            </motion.div>
          </motion.div>
        </Slider>
        <div className="text-center md:mt-8 mt-10">
          <motion.button
          onClick={handleClickProject}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white text-[22px] border-4 rounded-2xl px-5 py-2 font-bold "
          >
            All Projects
          </motion.button>
        </div>
      </div>

      {/* page 3 */}
      <section className="w-screen h-auto overflow-hidden py-10 mb-16">

        <div className="mb-10 md:px-0 md:flex md:gap-24 md:justify-center md:h-96 h-[45rem] w-screen   ">
          <motion.div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
           className="content-center  ">
            <img className="w-[25rem] px-4" src={frontPic} />
          </motion.div>
          <motion.div 
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
           className=" h-[30rem] md:w-[25rem] w-screen md:pt-0 pt-10 ">
            <div className=" text-black font-['Montserrat'] text-[3rem] font-extrabold leading-[normal] w-[351px] text-center md:text-left  ">FRONT-END</div>
            <div className="flex-shrink-0 w-[351px] h-[309px] text-black font-['Montserrat']  leading-[normal] whitespace-normal text-center md:text-left ">
              <h1 className="text-yellow-300 font-bold text-4xl">Languages </h1>
              <p className="font-medium text-2xl">HTML, Pug, CSS, Sass, Git</p>  
              <h1 className="text-yellow-300 font-bold text-4xl">Tools</h1>
              <ul className="font-medium text-2xl ">
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>CSS</li>
              <li>GitHub</li>
              <li>React JS</li>
              </ul>
              
            </div>
          </motion.div>
        </div>

        <div className="mb-10 md:px-0 md:flex md:gap-24 md:justify-center md:h-96 h-[45rem] w-screen ">
          <motion.div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
           className="content-center  ">
            <img className="w-[25rem] px-4" src={backPic} />
          </motion.div>
          <motion.div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
           className=" h-[30rem] md:w-[25rem] w-screen md:pt-0 pt-10 md:order-first">
            <div className=" text-black font-['Montserrat'] text-[3rem] font-extrabold leading-[normal] w-[351px] text-center md:text-center  ">BACK-END</div>
            <div className="flex-shrink-0 w-[351px] h-[309px] text-black font-['Montserrat']  leading-[normal] whitespace-normal text-center md:text-center ">
              <h1 className="text-yellow-300 font-bold text-4xl">Languages </h1>
              <p className="font-medium text-2xl">JavaScript</p>  
              <h1 className="text-yellow-300 font-bold text-4xl">Tools</h1>
              <ul className="font-medium text-2xl ">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Next.JS</li>
              </ul>
              
            </div>
          </motion.div>
        </div>

        <div className=" md:px-0 md:flex md:gap-24 md:justify-center md:h-96 h-[45rem] w-screen">
          <motion.div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
           className="content-center  ">
            <img className="w-[25rem] px-4" src={uiuxPic} />
          </motion.div>
          <motion.div 
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className=" h-[30rem] md:w-[25rem] w-screen md:pt-0 pt-10 ">
            <div className=" text-black font-['Montserrat'] text-[3rem] font-extrabold leading-[normal] w-[351px] text-center md:text-left  ">UI/UX DESIGN</div>
            <div className="flex-shrink-0 w-[351px] h-[309px] text-black font-['Montserrat']  leading-[normal] whitespace-normal text-center md:text-left ">
              <h1 className="text-yellow-300 font-bold text-4xl">Things I enjoy designing.</h1>
              <p  className="font-medium text-2xl">UX, UI, Web, Apps, Logos</p>  
              <h1 className="text-yellow-300 font-bold text-4xl">Tools</h1>
              <ul  className="font-medium text-2xl ">
              <li>Affinity Designer</li>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Webflow</li>
              <li>Sketch</li>
              </ul>
              
            </div>
          </motion.div>
        </div>

      </section>

      {/* page 4 */}

      <section className="w-screen h-screen bg-image bg-cover bg-center flex items-center  justify-center rounded-3xl ">
<div className="flex-row" >
<motion.div
onMouseEnter={textEnter}
onMouseLeave={textLeave}
initial={{ opacity: 0, y: -100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{
  duration: 0.5,
  ease: "easeOut",
}}
 className="text-center text-yellow-300 text-base font-semibold font-['Montserrat'] tracking-[27.84px]">VISION</motion.div>

<motion.div 
onMouseEnter={textEnter}
onMouseLeave={textLeave}

className="text-center text-white md:text-[64px] text-[20px] font-extrabold tracking-tighter font-['Montserrat']"><AnimatedText className="" text="Turning Code into Creative Solutions" /></motion.div>

<div className=" text-white font-myfont font-medium text-sm md:text-base whitespace-normal text-center">
Welcome to a digital realm where lines of code transcend mere syntax,<br /> 
transforming into <span>creative solutions </span>that breathe life into your ideas.
</div>
<motion.div
onClick={handleClickAbout}
onMouseEnter={textEnter}
onMouseLeave={textLeave}
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{
  duration: 0.5,
  ease: "easeOut",
}}
 className=" text-center mx-auto mt-7"><button className=" text-white font-myfont font-medium text-xl border-2 rounded-xl px-9 py-2">About ME</button></motion.div>


</div>
      </section>


{/* page footer */}
<section className="h-screen w-screen relative  ">

  <div 
  className="absolute bottom-0 h-[600px] w-screen rounded-tl-3xl rounded-tr-3xl bg-neutral-700  ">


<motion.div
onMouseEnter={textEnter}
onMouseLeave={textLeave}
initial={{ opacity: 0, x: -100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{
  duration: 0.5,
  ease: "easeOut",
}}
 className="w-[80%] mx-auto pt-24">
<div className="text-white md:text-6xl text-4xl font-bold font-['Montserrat'] leading-tight mt-8">Developing<br/>Apps Like a<br/>Boss 🔥</div>

  <motion.button 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
   onClick={handleClick}
   className="w-[179px] md:w-[279px] h-[68px] md:h-[88px] bg-white rounded-[30px]  text-center text-black md:text-4xl text-2xl font-semibold font-['Montserrat'] flex gap-3 items-center justify-center mt-7">CONTACT <img className="w-5 md:w-9" src={aro} /></motion.button>
  <div className=" flex mt-8 gap-5">
  
  <Link to="https://www.linkedin.com/in/mohan-tayade/" target="_blank" rel="noreferrer"><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}  src={link}/></Link>
 
  

<Link to="https://www.instagram.com/mohan_tayade_/?hl=en" target="_blank" rel="noreferrer"><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} src={insta}/>
</Link>

  <Link to="https://www.facebook.com/mohantayade007" target="_blank" rel="noreferrer"><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} src={face}/></Link>

<Link to="https://github.com/mohantayade" target="_blank" rel="noreferrer">
<motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} src={git}/>
</Link>
  
</div>
</motion.div>

  

  <motion.div
  initial={{ opacity: 0}}
  whileInView={{ opacity: 1}}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
   className="text-center text-white md:text-xl text-base font-semibold font-['Montserrat'] mt-12 md:mt-0">Handcrafted by me ⓒ Mohan Tayade</motion.div>

  </div>


  <motion.img
  initial={{ opacity: 0}}
  whileInView={{ opacity: 1}}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
   className=" hidden md:block absolute md:right-[10px] right-[-80px] md:bottom-[-180px] bottom-[0px] w-[800px]" src={mlogo} />

  <motion.div 
  onMouseEnter={textEnter}
  onMouseLeave={textLeave}
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
   className="absolute left-[10%] md:flex gap-20 md:top-12 top-1 h-40 w-[80%] rounded-3xl  bg-purple-400 justify-center items-center">
  <div className="w-[242px] h-[46px] text-white md:text-3xl text-2xl ml-14 md:ml-0 font-bold font-['Montserrat'] pt-2 md:pt-0">Start a Project</div>

  <div className="text-center text-white md:text-sm text-xs whitespace-normal font-medium font-['Montserrat'] px-3 md:px-0 ">Interested in working together?<br/> We should queue up a time to chat. I’ll buy the coffee.</div>

  <motion.button  whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
   className="w-[127px] md:w-[227px] h-[53px] md:h-[73px] ml-20 md:ml-0 md:mt-0 mt-2 bg-purple-400 rounded-[30px] border-4 border-purple-500 border-opacity-90 text-white md:text-2xl text-base font-bold font-['Montserrat']"> Hire Me</motion.button>
  </motion.div>
</section>


      {/* cursor section */}
      <motion.div
        variants={variants}
        animate={cursorVariant}
        transition={{ duration: 0.1, type: "tween" }}
        className="mouse bg-black h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none sm:block hidden"
      ></motion.div>
    </div>
  );
}

export default Hero;
