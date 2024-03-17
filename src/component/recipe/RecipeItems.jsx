import RecipeItem from "./recipeItem/RecipeItem";
import Cards from "../cards/Cards";
const RecipeItems = ({
  recipeData,
  cardAdd,
  cardData,
  prepareCard,
  cardProcessData,
  time,
  calories,
}) => {
  return (
    <div className=" max-w-[1600px] w-[90%]  mx-auto">
      <div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-12 gap-6 mb-[40px] lg:mb-[100px]">
        <div className="grid  grid-cols-1 lg:grid-cols-6 gap-6 col-span-full lg:col-span-7">
          {recipeData.map((item, index) => (
            <RecipeItem cardAdd={cardAdd} key={index} item={item}></RecipeItem>
          ))}
        </div>
        <Cards
          calories={calories}
          time={time}
          cardProcessData={cardProcessData}
          prepareCard={prepareCard}
          cardData={cardData}
        ></Cards>
      </div>
    </div>
  );
};

export default RecipeItems;
