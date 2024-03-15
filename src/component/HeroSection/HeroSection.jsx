
const HeroSection = () => {
  return (
    <div className='max-w-7xl mx-auto rounded-xl'>
      <div className="hero min-h-[600px] "  style={{backgroundImage: `url("/src/assets/1.png")`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-[60%]">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      <div className=" flex justify-center gap-14">
      <button className="btn btn-primary">Get Started</button>
      <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default HeroSection;