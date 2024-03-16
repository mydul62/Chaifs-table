import MainHeader from "./component/header/MainHeader"
import HeroSection from "./component/HeroSection/HeroSection"
import RecipeTitle from "./component/recipe/RecipeTitle";
import RecipeItems from "./component/recipe/RecipeItems";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Footer from "./component/footer/Footer";
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
    let isExist = cardData.find(pd=>pd.recipe_id==info.recipe_id);
if(!isExist){
  let newData = [...cardData,info]
  setCardData(newData)
} else{
  toast('this product allready exist')
}
 
  }
  const handlePrepareCard=(info)=>{
      const newItem = cardData.filter((pd)=>pd.recipe_id !==info.recipe_id)
      setCardData(newItem);
      let newInfo = [...cardProcessData,info];
      setCardProcessData(newInfo);
  }

  return (
    <>
    <MainHeader></MainHeader>
    <HeroSection></HeroSection>
    <RecipeTitle ToastContainer ={ToastContainer}></RecipeTitle>
    <RecipeItems  cardProcessData={cardProcessData} prepareCard={handlePrepareCard}  cardData={cardData} cardAdd={handleCardAdd} recipeData={data}></RecipeItems>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
