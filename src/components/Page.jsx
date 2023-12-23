import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Page = () => {
 
  
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

  return (
    <div className='h-screen w-screen bg-[#414141] overflow-hidden'>
      <h2 
      className='md:ml-40 ml-6 md:pt-10 pt-6 text-white md:text-[44px] text-[25px] font-extrabold font-myfont'>LATEST PROJECT 🔥</h2>
      <Slider {...settings} className='md:mx-40 '>
      {/* Repeat this block for each card */}
      <div className="p-4 ">
        {/* Card content goes here */}
        <div className="bg-gray-200  p-6 w-[330px] h-[493px] rounded-[30px]">
          Card 1
        </div>
      </div>
      <div className="p-4">
        {/* Card content goes here */}
        <div className="bg-gray-200 p-6 w-[330px] h-[493px] rounded-[30px]">
          Card 2
        </div>
      </div>
      <div className="p-4">
        {/* Card content goes here */}
        <div className="bg-gray-200 p-6 w-[330px] h-[493px] rounded-[30px]">
          Card 3
        </div>
      </div>
      {/* Repeat for more cards */}
      <div className="p-4">
        {/* Card content goes here */}
        <div className="bg-gray-200 p-6 w-[330px] h-[493px] rounded-[30px]">
          Card 3
        </div>
      </div>
      <div className="p-4">
        {/* Card content goes here */}
        <div className="bg-gray-200 p-6 w-[330px] h-[493px] rounded-[30px]">
          Card 3
        </div>
      </div>

    </Slider>
    <div className='text-center md:mt-8 mt-16'>
    <button className='text-white text-[22px] border-4 rounded-2xl px-5 py-2 font-bold '>All Projects</button>
    </div>
   
    </div>
    
  );
};

export default Page;


