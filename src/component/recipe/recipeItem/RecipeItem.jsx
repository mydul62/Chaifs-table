import { IoTimeOutline } from "react-icons/io5";
import { FaGripfire } from "react-icons/fa6";
const RecipeItem = ({item,cardAdd}) => {
  return (
      <div className="p-6 border border-[#28282833] rounded-2xl col-span-3 ">
              <figure className=" ">
                <img className="rounded-lg hover:scale-105 duration-500" src={item.recipe_image} alt="Shoes" />
              </figure>
              <div className=" space-y-4">
               <div className=" py-4 space-y-3">
               <h2 className="card-title text-xl text-[#282828] font-semibold font-Lexend">{item.recipe_name}</h2>
                <p className=" text-[16px] text-[#878787] font-Fira">{item.short_description}</p>
               </div>
                <hr />
                <div>
                  <h2 className=" font-medium text-[18px] text-[#282828] font-Lexend">Ingredients:{item.ingredients.length}</h2>
                  <ul className=" list-disc">
                    {item.ingredients.slice(0,3).map((ingre,index) => (
                      <div className="ml-8" key={index}><li className=" text-[18px] text-[#878787] font-Fira" >{ingre}</li></div>
                    ))}
                  </ul>
                </div>
                <hr />
                <div className=" flex gap-5">
                  <div className="text-[16px] font-Fira  flex items-center gap-1 text-[#282828CC]"><IoTimeOutline className=" text-xl" />
 {item.preparing_time} minutes</div>
                  <div className="text-[16px] font-Fira flex items-center text-[#282828CC]"><FaGripfire className=" text-xl" /> {item.calories}</div>
                </div>
                <div>
                  <button onClick={()=>cardAdd(item)} className=" py-[18px] font-semibold font-Lexend px-6 bg-[#0BE58A] rounded-full">
                    Want to Cook
                  </button>
                </div>
              </div>
            </div>
  );
};

export default RecipeItem;