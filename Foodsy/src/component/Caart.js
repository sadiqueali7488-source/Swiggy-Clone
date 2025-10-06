import React from "react";
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";

const Caart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.card.info.price / 100) * item.quantity,
    0
  );

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />

        {cartItems.length === 0 ? (
          <h1 className="font-extrabold text-3xl m-8">
            Cart is Empty. Add items to Cart!!
          </h1>
        ) : (
          <h2 className="font-bold text-xl mt-4">
            Total Price: ₹ {totalPrice}
          </h2>
        )}
      </div>
      <button
        className="text-black bg-amber-400 p-2 m-2 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Caart;
