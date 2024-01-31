import React from "react";

const Card = ({ series }) => {
  return (
    <div className="w-[350px] rounded-md p-4 bg-neutral-200">
      <div>
        <h1>{series.name}</h1>
        <p>{series.network?.name}</p>
      </div>
    </div>
  );
};

export default Card;
