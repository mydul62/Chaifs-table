import RecipeItem from "./recipeItem/RecipeItem";
import Cards from "../cards/Cards";
              <td>20 minutes</td>
const RecipeItems = ({ recipeData,cardAdd,cardData }) => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="grid grid-cols-6 gap-3 col-span-8">
          {recipeData.map((item, index) => (
            <RecipeItem cardAdd={cardAdd} key={index} item={item}></RecipeItem>
          ))}
        </div>
        <Cards cardData={cardData}></Cards>
      </div>
    </div>
  );
};

export default RecipeItems;
