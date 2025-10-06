import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.8303639&lng=86.2066792&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    setResInfo(json.data);
  };

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl"> {name} </h1>
      <p className="font-bold text-lg">
        {" "}
        {cuisines?.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {categories &&
        categories.map((category, index) => (
          <RestaurantCategory key={index} data={category?.card?.card} />
        ))}
    </div>
  );
};

export default RestaurantMenu;
