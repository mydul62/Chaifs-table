
const CurrentlyCook = ({cardProcessData}) => {
  return (
    <div className="">
      <div className="w-[90%] lg:w-[60%] mx-auto">
    <h2 className=" py-4 text-[#282828] text-2xl font-semibold">Currently cooking: 0{cardProcessData.length}</h2>
    <hr/>
    </div>
  <div className="overflow-x-auto">
    <table className="table">
      <thead  className="">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
        </tr>
      </thead>
      <tbody>
        {
          cardProcessData.map((item,index)=>(
            <tr className="bg-[#2828280d]" key={index}>
            <th>{index+1}</th>
            <td>{item.recipe_name}</td>
            <td>{item.preparing_time} Min</td>
            <td>{item.calories}</td>
          </tr>
          ))
        }
       
      </tbody>
    </table>
  </div>
    </div>
  );
};

export default CurrentlyCook;