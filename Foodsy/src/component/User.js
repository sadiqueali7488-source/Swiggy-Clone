import React, { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  const { name, Location } = props;
  return (
    <div className="user-card">
      <h2 className="border border-black w-fit px-4 bg-amber-400">
        Count: {count}
      </h2>
      <button
        className="border border-black w-fit px-4 cursor-pointer "
        onClick={() => setCount(count + 1)}
      >
        Increase Value
      </button>
      <button
        className="border border-black w-fit px-4 cursor-pointer "
        onClick={() => setCount(count - 1)}
      >
        Decrease Value
      </button>

      <h2>name: {name}</h2>
      <h3>location: {Location}</h3>
      <h4>mobile: 9709111966</h4>
    </div>
  );
};

export default User;
