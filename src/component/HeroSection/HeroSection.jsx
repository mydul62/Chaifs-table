
const HeroSection = () => {
  return (
    <div className='max-w-[1600px] mx-auto rounded-2xl'>
      <div className="hero rounded-2xl min-h-[700px] "  style={{backgroundImage: `url("/src/assets/bg.jpg")`}}>
  <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-[60%]">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      <div className=" flex justify-center gap-14">
      <button className=" py-5 px-8 bg-[#0BE58A] rounded-full">Explore Now</button>
      <button className=" py-5 px-8  bg-transparent border border-[#fff] rounded-full">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default HeroSection;