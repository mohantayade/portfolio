/* eslint-disable react/prop-types */
import { motion  } from "framer-motion";



function AnimatedText({ text }) {
  // eslint-disable-next-line react/prop-types
  const words = text.split("  ");
  
  const container ={
    hidden:{
        opacity: 0
    },
    visible:{
        opacity:1,
        transition:{ staggerChildren: 0.1 ,delaChildren: 0.2 }
    },
  };


  const chaild={
visible:{
opacity: 1,
y:0,
transition:{
    type:"spring",
    dumping:12,
    stiffness:100,
}
},
hidden:{
    opacity: 0,
    y:20,
    transition:{
        type:"spring",
        dumping:12,
        stiffness:100,
    },
}
  };

  return (
    <motion.div
    className={{overflow:"hidden",display:"flex" }}
variants={container}
initial="hidden"
whileInView="visible"
    >

      {words.map((words, index) => (
        <motion.span 
        variants={chaild}
        className={{marginRight: "10px"}}
        key={index}
        >
            {words}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimatedText;
