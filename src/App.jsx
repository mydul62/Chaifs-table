import MainHeader from "./component/header/MainHeader"
import HeroSection from "./component/HeroSection/HeroSection"
import RecipeTitle from "./component/recipe/RecipeTitle";
import RecipeItems from "./component/recipe/RecipeItems";
import { useEffect, useState } from "react";
function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setData(data));
  },[])

  return (
    <>
    <MainHeader></MainHeader>
    <HeroSection></HeroSection>
    <RecipeTitle></RecipeTitle>
    <RecipeItems recipeData={data}></RecipeItems>
    </>
  )
}

export default App
