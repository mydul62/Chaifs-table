

const Footer = () => {
  return (
    <div>
       <footer className="bg-gradient-to-r from-[#12132d00] to-[#12132d21] mt-24">
      <div className="max-w-7xl mx-auto py-24 flex justify-center items-center">
        <div className="w-[90%] lg:w-[60%] text-center space-y-4">
          <h1 className="mulish font-bold text-2xl">
          Racipe<span className="text-[#797DFC]">Calories</span>
          </h1>
          <p className="text-[#12132D99] inter text-[18px]">
          Welcome to our recipe calories, where culinary inspiration meets mouthwatering delight! Discover a world of flavors, techniques, and culinary creativity right at your fingertips.
          </p>
          <div>
            <hr />
          </div>
          <div>
            <span className="font-light mulish text-pm-text mt-7 block sm:mt-12">2024, All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;