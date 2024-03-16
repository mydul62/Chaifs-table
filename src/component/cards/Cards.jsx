import WantToCook from "./WantToCook"
import CurrentlyCook from "./CurrentlyCook";
const Cards = ({cardData,prepareCard,cardProcessData}) => {
  return (
    <>
        <div className=" text-center  col-span-5">
        <div className=" border border-[#28282833] rounded-2xl">
        <WantToCook prepareCard={prepareCard} cardData={cardData}></WantToCook>
            <CurrentlyCook cardProcessData={cardProcessData} ></CurrentlyCook>
        </div>
        </div>
    </>
  );
};

export default Cards;