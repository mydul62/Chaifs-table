
const HeroSection = () => {
  return (
    <div className='max-w-[1600px] mx-auto rounded-2xl font-Lexend'>
      <div className="hero rounded-b-2xl lg:rounded-2xl min-h-[600px] lg:min-h-[700px]" style={{backgroundImage: `url("/src/assets/bg.jpg")`}}>
  <div className="hero-overlay rounded-b-2xl lg:rounded-2xl bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" w-[90%] lg:w-[80%] space-y-10">
      <h1 className="mb-5 text-2xl lg:text-6xl  font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5 text-[18px]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      <div className=" flex flex-row justify-center gap-5 lg:gap-14 text-[20px]">
      <button className=" py-1 px-2 lg:py-5 lg:px-8 bg-[#0BE58A] rounded-xl lg:rounded-full">Explore Now</button>
      <button className="py-4 px-2 lg:py-5 lg:px-8  bg-transparent border border-[#fff]  rounded-xl lg:rounded-full">Our Feedback</button>
      </div>
      <div className=" block lg:hidden">
            <label className="input input-bordered flex py-7 items-center">
              <input type="text" className="grow " placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default HeroSection;