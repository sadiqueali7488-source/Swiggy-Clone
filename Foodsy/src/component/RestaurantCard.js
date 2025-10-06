const RestaurantCard = (props) => {
  const { resData } = props;

  // const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData.card.card.info;

  return (
    <div className="h-auto m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
      <img
        className="w-full h-48 object-cover rounded mb-2"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />

      <h3 className="text-center text-xl font-bold mb-2">{resData.name}</h3>
      <h4 className="text-center mb-1">{resData.cuisines.join(", ")}</h4>
      <h4 className="text-center mb-1">{resData.avgRating}⭐</h4>
      <h4 className="text-center mb-1">{resData.costForTwo}</h4>
      <h4 className="text-center">{resData.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-yellow-400 text-black m-2 p-2 rounded text-xs font-bold shadow">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
