import { IoMdSearch } from "react-icons/io";
import './Hero.css'
const HeroSection = () => {
  return (
    <div className='max-w-[1600px] w-[95%] mx-auto rounded-2xl font-Lexend'>
      <div className="hero rounded-b-2xl lg:rounded-2xl min-h-[600px] lg:min-h-[700px] bg-image">
  <div className="hero-overlay rounded-b-2xl lg:rounded-2xl bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" w-[90%] lg:w-[80%] space-y-10">
      <h1 className="mb-5 text-2xl lg:text-6xl  font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5 text-[18px]">Discover mouthwatering delights on RacipeCalories, where culinary inspiration meets easy recipes for every occasion. Taste the joy today!.</p>
      <div className=" flex flex-row justify-center gap-2 lg:gap-14 text-sm lg:text-[20px]">
      <button className=" py-1 px-1 lg:py-5 lg:px-8 bg-[#0BE58A] rounded-xl text-[#150B2B] lg:rounded-full">Explore Now</button>
      <button className="py-4 px-1  lg:py-5 lg:px-8  bg-transparent border border-[#fff]  rounded-xl lg:rounded-full">Our Feedback</button>
      </div>
      <div className=" flex lg:hidden bg-white items-center py-2 px-3 rounded-full  ">
      <input type="text" placeholder="Search" className=" outline-none  text-[#010101] w-full max-w-xs" />
      < IoMdSearch className="text-xl"/>
          </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default HeroSection;