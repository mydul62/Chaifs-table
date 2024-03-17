import MainHeader from "./component/header/MainHeader";
import HeroSection from "./component/HeroSection/HeroSection";
import RecipeTitle from "./component/recipe/RecipeTitle";
import RecipeItems from "./component/recipe/RecipeItems";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./component/footer/Footer";
function App() {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [cardProcessData, setCardProcessData] = useState([]);
  const [time, setTime] = useState(0);
  const [calories, setCalories] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleCardAdd = (info) => {
    let isExist = cardData.find((pd) => pd.recipe_id == info.recipe_id);
    if (!isExist) {
      let newData = [...cardData, info];
      setCardData(newData);
    } else {
      toast("this product allready exist");
    }
  };
  const handlePrepareCard = (info) => {
    const newItem = cardData.filter((pd) => pd.recipe_id !== info.recipe_id);
    setCardData(newItem);
    let newInfo = [...cardProcessData, info];
    setCardProcessData(newInfo);
    let newtime = time + info.preparing_time;
    setTime(newtime);
    const parts = info.calories.split(" ");
    const CalInfo = parseFloat(parts[0]);
    let newCalories = calories + CalInfo;
    setCalories(newCalories);
  };
  return (
    <>
      <MainHeader></MainHeader>
      <HeroSection></HeroSection>
      <RecipeTitle ToastContainer={ToastContainer}></RecipeTitle>
      <RecipeItems
        calories={calories}
        time={time}
        cardProcessData={cardProcessData}
        prepareCard={handlePrepareCard}
        cardData={cardData}
        cardAdd={handleCardAdd}
        recipeData={data}
      ></RecipeItems>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
