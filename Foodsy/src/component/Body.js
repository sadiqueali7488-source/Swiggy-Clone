import { useEffect, useState } from "react";
// import resList from "./resList";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router";
import useOnlineStatus from "./useOnlineStatus";

const Body = () => {
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataa = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8303639&lng=86.2066792&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await dataa.json();

    setFilterData(
      json?.data?.cards
        ?.map((item) => item?.card?.card?.info)
        ?.filter(Boolean) || []
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return <h1>Please Check your internet connection</h1>;

  return (
    <div className="">
      <div className="">
        <div className="pr-8 m-4 mr-10 flex justify-end-safe">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="ml-1 px-4 rounded-xl text-shadow-black border border-yellow-600 bg-yellow-400 cursor-pointer"
            onClick={() => {
              const filteredRestaurant = filterData.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterData(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="px-18 mb-4 flex justify-end text-black">
          <button
            className="rounded-xl bg-yellow-400 px-4 py-1 cursor-pointer"
            onClick={() => {
              const data = filterData.filter((res) => {
                return res.avgRating > 4.2;
              });
              setFilterData(data);
            }}
          >
            Top Rated Restaurant
          </button>{" "}
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterData.map((restaurant, index) => (
          <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}>
            {restaurant?.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
