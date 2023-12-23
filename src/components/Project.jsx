import { Link } from "react-router-dom";

export default function Project() {
  return (
    <>
   <div className="w-screen h-auto relative bg-white">

   <div className="md:w-auto  text-black md:text-[64px] text-3xl px-5 md:px-0  my-0 md:my-4 font-bold font-['Montserrat'] md:mx-40 pt-3">PROJECTS 🔥</div>
  <div className=" w-screen h-auto block ">

    <div className="w-screen md:h-[500px] h-auto mt-10 md:mt-0 md:flex md:justify-center md:items-center md:gap-10  ">
        
         <img className="w-[666px] md:h-[405px] h-[300px]  rounded-[30px]" src="https://via.placeholder.com/666x405" />
         
    
        <div className="md:w-[578px] w-screen md:h-[281px] h-auto md:mt-0 mt-5  tracking-wide ">
           <h1 className="text-black md:text-[64px] text-3xl font-bold font-['Montserrat'] md:leading-[60px] ">Dynamic Bookshelf 💡</h1>
           <p className="text-black text-xl font-medium font-['Montserrat'] tracking-wide  ">DynamicBookshelf is a MERN stack-powered web application designed to revolutionize how book enthusiasts manage and share their reading journeys.</p>
           <Link to="projectPage" >
            <button className="bg-purple-500 text-white w-32 h-10 font-bold font-myfont rounded-xl my-4 ">Read More »</button>
          
        </Link>
        </div>
        
    </div>
   
    <div className="w-screen md:h-[500px] h-auto mt-10 md:mt-0 md:flex md:justify-center md:items-center md:gap-10  ">
        
        <img className="w-[666px] md:h-[405px] h-[300px]  rounded-[30px]" src="https://via.placeholder.com/666x405" />
        
   
       <div className="md:w-[578px] w-screen md:h-[281px] h-auto md:mt-0 mt-5  tracking-wide ">
          <h1 className="text-black md:text-[64px] text-3xl font-bold font-['Montserrat'] md:leading-[60px] ">Dynamic Bookshelf 💡</h1>
          <p className="text-black text-xl font-medium font-['Montserrat'] tracking-wide  ">DynamicBookshelf is a MERN stack-powered web application designed to revolutionize how book enthusiasts manage and share their reading journeys.</p>
       </div>
   </div>
  
   <div className="w-screen md:h-[500px] h-auto mt-10 md:mt-0 md:flex md:justify-center md:items-center md:gap-10  ">
        
        <img className="w-[666px] md:h-[405px] h-[300px]  rounded-[30px]" src="https://via.placeholder.com/666x405" />
        
   
       <div className="md:w-[578px] w-screen md:h-[281px] h-auto md:mt-0 mt-5  tracking-wide ">
          <h1 className="text-black md:text-[64px] text-3xl font-bold font-['Montserrat'] md:leading-[60px] ">Dynamic Bookshelf 💡</h1>
          <p className="text-black text-xl font-medium font-['Montserrat'] tracking-wide  ">DynamicBookshelf is a MERN stack-powered web application designed to revolutionize how book enthusiasts manage and share their reading journeys.</p>
       </div>
   </div>
  

   

  </div>

   
  
  {/* <img className="w-[666px] h-[405px] left-[138px] top-[1210px] absolute rounded-[30px]" src="https://via.placeholder.com/666x405" />
  <img className="w-[666px] h-[405px] left-[662px] top-[706px] absolute rounded-[30px]" src="https://via.placeholder.com/666x405" />
  <img className="w-[666px] h-[405px] left-[662px] top-[1750px] absolute rounded-[30px]" src="https://via.placeholder.com/666x405" />
 
  <div className="w-[478px] h-[281px] left-[850px] top-[1255px] absolute"><span className="text-black text-[64px] font-bold font-['Montserrat']">Dynamic Bookshelf 💡<br/></span><span className="text-black text-xl font-medium font-['Montserrat'] tracking-wide">DynamicBookshelf is a MERN stack-powered web application designed to revolutionize how book enthusiasts manage and share their reading journeys.</span></div>
  <div className="w-[478px] h-[281px] left-[138px] top-[720px] absolute"><span className="text-black text-[64px] font-bold font-['Montserrat']">Dynamic Bookshelf 💡<br/></span><span className="text-black text-xl font-medium font-['Montserrat'] tracking-wide">DynamicBookshelf is a MERN stack-powered web application designed to revolutionize how book enthusiasts manage and share their reading journeys.</span></div>
  <div className="w-[478px] h-[281px] left-[138px] top-[1764px] absolute"><span className="text-black text-[64px] font-bold font-['Montserrat']">Dynamic Bookshelf 💡<br/></span><span className="text-black text-xl font-medium font-['Montserrat'] tracking-wide">DynamicBookshelf is a MERN stack-powered web application designed to revolutionize how book enthusiasts manage and share their reading journeys.</span></div> */}
</div>
    </>
  )
}
