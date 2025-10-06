import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, increaseQuantity, decreaseQuantity } from "./cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const [message, setMessage] = useState("");

  const getItemQuantity = (id) => {
    const cartItem = cartItems.find((e) => e.card.info.id === id);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setMessage("Item added successfully ✅");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div>
      {message && (
        <div className="fixed top-35 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {message}
        </div>
      )}

      {items.map((item, index) => {
        const quantity = getItemQuantity(item.card.info.id);

        return (
          <div
            key={index}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold">{item.card.info.name}</span>
                <span className="font-bold">
                  - ₹ {item.card.info.price / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                {quantity > 0 ? (
                  <div className="flex items-center space-x-2 bg-amber-400 rounded-lg px-3 py-1 w-fit cursor-default">
                    <button
                      className="text-black font-bold text-xl cursor-pointer"
                      onClick={() => dispatch(decreaseQuantity(item))}
                    >
                      −
                    </button>
                    <span className="text-black font-medium">{quantity}</span>
                    <button
                      className="text-black font-bold text-xl cursor-pointer"
                      onClick={() => dispatch(increaseQuantity(item))}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg cursor-pointer"
                    onClick={() => handleAddItem(item)}
                  >
                    Add+
                  </button>
                )}
              </div>
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item?.card?.info?.imageId
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
