import { FaRegCircleUser } from "react-icons/fa6";
const MainHeader = () => {
  return (
    <div className=" max-w-[1600px] mx-auto py-7 font-Lexend">
      <div className="navbar ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm bg-[#ccc] dropdown-content mt-3 z-[1] p-2 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipies</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className=" text-xl lg:text-[40px] font-bold ">Racipe<span className=" text-[#0BE58A]">Calories</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-Lexend menu-horizontal px-1 text-[16px]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipies</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className=" lg:block hidden">
            <label className="input input-bordered flex items-center">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <a className=" text-2xl lg:text-3xl rounded-full w-[30px] h-[30px] lg:h-[48px] lg:w-[48px] flex items-center justify-center bg-[#0BE58A]">
            <FaRegCircleUser />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
