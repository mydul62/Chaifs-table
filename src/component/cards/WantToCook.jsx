
const WantToCook = ({cardData,prepareCard}) => {
  return (
    <div className=" text-center  col-span-4">
            <div className=" w-[60%] mx-auto">
            <h2 className=" py-4 text-[#282828] text-2xl font-semibold">Want to cook: 0{cardData.length}</h2>
            <hr/>
            </div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead >
                <tr className=" mb-4">
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {
                  cardData.map((item,index)=>(
                    <tr key={index} className="bg-[#2828280d]">
                    <th>{index+1}</th>
                    <td>{item.recipe_name}</td>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories}</td>
                    <td>
                      <button onClick={()=>prepareCard(item)} className=" bg-[#0BE58A] py-2 px-4 rounded-full">Preparing</button>
                    </td>
                  </tr>
                  ))
                }
               
              </tbody>
            </table>
          </div>
        </div>
  );
};

export default WantToCook;