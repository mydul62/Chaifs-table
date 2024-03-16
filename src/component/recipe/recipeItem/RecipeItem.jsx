
const RecipeItem = ({item,cardAdd}) => {
  return (
      <div className="p-6 border border-[#28282833] rounded-2xl col-span-3  ">
              <figure className=" ">
                <img className="rounded-lg" src={item.recipe_image} alt="Shoes" />
              </figure>
              <div className=" space-y-4">
               <div className=" py-4 space-y-3">
               <h2 className="card-title text-xl text-[#282828] font-semibold">{item.recipe_name}</h2>
                <p className=" text-sm text-[#878787]">{item.short_description}</p>
               </div>
                <hr />
                <div>
                  <h2 className=" font-medium text-[18px] text-[#282828]">Ingredients:{item.ingredients.length}</h2>
                  <ul className=" list-disc">
                    {item.ingredients.slice(0,3).map((ing,index) => (
                      <li className=" text-[18px] text-[#878787]" key={index}>{ing}</li>
                    ))}
                  </ul>
                </div>
                <hr />
                <div className=" flex gap-5">
                  <div className="text-sm text-[#282828CC]">{item.preparing_time} minutes</div>
                  <div className="text-sm text-[#282828CC]">{item.calories} calories</div>
                </div>
                <div>
                  <button onClick={()=>cardAdd(item)} className=" py-[13px] px-6 bg-[#0BE58A] rounded-full">
                    Want to Cook
                  </button>
                </div>
              </div>
            </div>
  );
};

export default RecipeItem;