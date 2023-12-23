import { NavLink ,Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { motion } from 'framer-motion'

function Navbar() {

  

  return (
    <motion.nav
    
    initial={{ opacity: 0 ,y:-100 }}
              variants={{
                visible:{opacity: 1, y:0,
                  transition:{duration: 0.4 , ease:"easeInOut"}
                }}}
              whileInView="visible"
               className="hidden md:block">

        <div className="md:flex md:justify-between md:max-w-[1370px] md:mx-auto ">
            <div><Link to=''><img className='w-[120px] lg:w-[200px] ' src={Logo} /></Link></div>
            <div className='md:flex items-center gap-12 mr-10'>
                <ul className='md:flex md:gap-12 md:font-myfont md:font-semibold '>
             <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             >
             <NavLink
                 to=''
                className={({isActive})=>`rounded-xl ${isActive ? "text-purple-600":"text-black"}  font-semibold`}>HOME</NavLink>
             </motion.div>

             <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             >
             <NavLink
                 to='about'
                 className={({isActive})=>`rounded-xl ${isActive ? "text-purple-600":"text-black"}  font-semibold`}>ABOUT</NavLink>
             </motion.div>

             <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             >
             <NavLink
                 to='project'
                 className={({isActive})=>`rounded-xl ${isActive ? "text-purple-600":"text-black"}  font-semibold`}>PROJECT</NavLink>
             </motion.div>
                
             <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             >
             <NavLink
                 to='contact'
                className={(isActive)=>`w-[116.41px] h-[36.06px] ${isActive ? "bg-purple-600" : "bg-purple-400"}  rounded-xl text-white font-semibold py-2 px-3`}>CONTACT</NavLink>
             </motion.div>
                </ul>
                
            </div>
          
        </div>
       
    </motion.nav>
  )
}

export default Navbar
