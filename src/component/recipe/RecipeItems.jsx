import RecipeItem from "./recipeItem/RecipeItem";
import Cards from "../cards/Cards";
const RecipeItems = ({ recipeData, cardAdd, cardData,prepareCard,cardProcessData }) => {
  return (
    <div className=" max-w-[1600px] mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="grid grid-cols-6 gap-6 col-span-7">
          {recipeData.map((item, index) => (
            <RecipeItem cardAdd={cardAdd} key={index} item={item}></RecipeItem>
          ))}
        </div>
        <Cards cardProcessData={cardProcessData} prepareCard={prepareCard} cardData={cardData}></Cards>
      </div>
    </div>
  );
};

export default RecipeItems;
