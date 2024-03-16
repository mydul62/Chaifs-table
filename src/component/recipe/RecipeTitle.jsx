
const RecipeTitle = ({ToastContainer}) => {
  return (
    <div className=" max-w-[1600px] mx-auto py-10 grid grid-cols-12 justify-center mt-[50px]  items-center font-Lexend">
      <div className=" col-span-full lg:col-span-8 justify-center">
      <div className=" w-[90%] lg:w-[60%] mx-auto text-center space-y-4">
        <h2 className=" text-[30px] lg:text-[40px] font-bold ">Our Recipes</h2>
        <p className=" text-[16px] text-[#150B2B99 ]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
      </div>
      <div className=" col-span-4">
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default RecipeTitle;