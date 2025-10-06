import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Grocery from "./Grocery";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useContext(UserContext);
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="pr-9 flex justify-between shadow-lg bg-yellow-400">
      <div className="logo-container">
        <img
          className="w-30"
          src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg"
        ></img>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-2xl">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 text-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-2xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-2xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-2xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 flex items-center space-x-2">
            <Link to="/caart" className="flex items-center space-x-2">
              <span className="bg-green-500 text-white text-sm font-bold px-2 py-0.5 rounded-lg mt-1">
                {cartItems.length}
              </span>
              <span className="text-xl font-medium">Cart</span>
            </Link>
          </li>

          <button
            className="px-4 text-2xl"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 mt-2 font-bold">{user}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
