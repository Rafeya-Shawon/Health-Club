import React from "react";

const Card = (props) => {
  const { name, img, age, time, description } = props.card;
  const { handleAddToCart } = props;
  return (
    <div class="bg-white rounded-2xl mb-3 pb-5 shadow-lg text-left">
      <img className="h-2/4 rounded-2xl" src={img} alt="" />
      <div className="p-5 ">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-sm text-red text-slate-500 leading-relaxed mb-5">
          {description.slice(0, 125)}...
          <span className="text-xs bg-slate-200 text-black px-2 rounded-md">
            Read More
          </span>
        </p>
        <h5 className="text-md font-bold">Age: {age}</h5>
        <h5 className="text-md font-bold mt-1">
          Daily Exercise Time: <span>{time}</span>m
        </h5>

        <div className="w-300 pb-6 pt-2">
          <button
            onClick={() => handleAddToCart(props.card)}
            className="bg-orange-400 text-white mt-1 py-2
           hover:bg-amber-500 w-full h-2/4 rounded-2xl"
          >
            <p>Add Time</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
