import MainHeader from "./component/header/MainHeader"
import HeroSection from "./component/HeroSection/HeroSection"
import RecipeTitle from "./component/recipe/RecipeTitle";
import RecipeItems from "./component/recipe/RecipeItems";
import { useEffect, useState } from "react";
function App() {
  const [data,setData]=useState([]);
  const [cardData,setCardData]=useState([]);
  const [cardProcessData,setCardProcessData]=useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setData(data));
  },[])

  const handleCardAdd=(info)=>{
    let newData = [...cardData,info]
    setCardData(newData)
    console.log(cardData);
  }
  const handlePrepareCard=(info)=>{
      const newItem = cardData.filter((pd)=>pd.recipe_id !==info.recipe_id)
      setCardData(newItem);
      let newInfo = [...cardProcessData,info];
      setCardProcessData(newInfo);
  }

  return (
    <>
    <h1 className="logo:hover ">mahim</h1>
    <MainHeader></MainHeader>
    <HeroSection></HeroSection>
    <RecipeTitle></RecipeTitle>
    <RecipeItems  cardProcessData={cardProcessData} prepareCard={handlePrepareCard}  cardData={cardData} cardAdd={handleCardAdd} recipeData={data}></RecipeItems>
    </>
  )
}

export default App
