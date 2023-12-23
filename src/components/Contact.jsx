export default function Contact() {
  return (
    <div className="w-screen md:w-[1440px] bg-slate-400 ">
      <div className="w-screen md:w-[1440px] h-auto md:h-[1559px] relative bg-white">
      <div className="w-screen md:w-[765px] md:h-auto h-auto  md:left-[198px] md:top-[29px] md:absolute  text-black md:text-5xl text-2xl font-bold font-['Montserrat'] px-3">
          Contact Mohan Tayade 🙋🏻
          <br /><br />
        </div>
        
        
        <div className="w-screen md:w-[1143px] h-auto md:h-[1442px]  md:left-[198px] top-12 md:top-[127px] md:absolute overflow-hidden px-3 ">
          <span className="text-black md:text-[32px] text-xl font-semibold font-['Montserrat'] ">
            Lets Connect
            <br />
          </span>
          <span className="text-black md:text-3xl whitespace-normal font-medium font-['Montserrat']">
            Have a project in mind or just want to chat about the latest trends
            in web development? Feel free to reach out! Your ideas and inquiries
            are always welcome.

            <br />  <br />

          </span>
          <span className="text-black text-xl md:text-[32px] font-semibold font-['Montserrat']">
            Contact Information :<br />
          </span>
          <span className="text-black text-xl md:text-3xl font-medium font-['Montserrat']">
            Email:{" "}
          </span>
          <span className="text-black md:text-3xl font-medium font-['Montserrat'] underline">
            mohantayadeofficial@gmail.com
            <br />
          </span>
          <span className="text-black text-xl md:text-3xl font-medium font-['Montserrat']">
            LinkedIn:{" "}
          </span>
          <span className="text-black md:text-3xl font-medium font-['Montserrat'] underline">
            linkedin.com/in/mohan-tayade/
            <br />
          </span>
          <span className="text-black text-xl md:text-3xl font-medium font-['Montserrat']">
            GitHub:{" "}
          </span>
          <span className="text-black md:text-3xl font-medium font-['Montserrat'] underline">
            github.com/mohantayade
            <br /><br />
          </span>
          <span className="text-black text-xl md:text-[32px] font-semibold font-['Montserrat']">
            Get In Touch :<br />
          </span>
          <span className="text-black md:text-3xl font-medium font-['Montserrat']">
            Im available for freelance opportunities, collaborations, or even
            just a friendly conversation about all things web development. Lets
            discuss how we can bring your digital vision to life!
            <br /><br />
          </span>
          <span className="text-black text-xl md:text-[32px] font-semibold font-['Montserrat']">
            Location:
            <br />
          </span>
          <span className="text-black md:text-3xl font-medium font-['Montserrat']">
            📍 Yavatmal , India
            <br />
            Feel free to drop me a message using the form below, and Ill get
            back to you at the earliest convenience.
          </span>
          <div>
            <h1 className="text-[50px] font-extrabold font-myfont mt-10">CONTACT 📞</h1>
          </div>
          <div className="contact  h-[600px] text-center mt-5 rounded-3xl bg-neutral-700 ">
  <input type="text"  className="font-myfont my-5  rounded-2xl md:w-[40%] h-[60px] py-2 text-xl font-bold mt-10" placeholder="Name"/>
  <br />
<input type="email" className="font-myfont my-5 rounded-2xl md:w-[40%]  h-[60px] py-2 text-xl font-bold" placeholder="Email"/>
<br />
<input type="tel" name="mobile"  className=" font-myfont my-5 rounded-2xl md:w-[40%] h-[60px] py-2 text-xl font-bold" pattern="[0-9]{10}" required placeholder="Mobile Number"/>
<br />
<textarea type="text" className="font-myfont my-5 rounded-2xl md:w-[40%] h-[150px] py-2 text-xl font-bold" placeholder="Massage" />
<br />

<button className="bg-purple-500 text-white font-bold w-32 h-14 font-myfont rounded-xl">Submit</button>

</div>
        </div>
        
    


        
        </div>
        
    </div>
  );
}
