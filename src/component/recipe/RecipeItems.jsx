import React from "react";

const RecipeItems = ({ recipeData }) => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="grid grid-cols-6 gap-3 col-span-8">
          {recipeData.map((item, index) => (
            <div className="card col-span-3 bg-base-100 shadow-xl " key={index}>
              <h1>{console.log(item)}</h1>
              <figure>
                <img src={item.recipe_image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.recipe_name}</h2>
                <p>{item.short_description}</p>
                <hr />
                <div>
                  <h2>Ingredients:{item.ingredients.length}</h2>
                  <ul className=" list-disc">
                    {item.ingredients.slice(0,3).map((ing,index) => (
                      <li key={index}>{ing}</li>
                    ))}
                  </ul>
                </div>
                <hr />
                <div className=" flex gap-5">
                  <div className="">{item.preparing_time} minutes</div>
                  <div className="">{item.calories} calories</div>
                </div>
                <div>
                  <button className=" py-4 px-6 bg-[#0BE58A] rounded-full">
                    Want to Cook
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" col-span-4">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-base-200">
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItems;
