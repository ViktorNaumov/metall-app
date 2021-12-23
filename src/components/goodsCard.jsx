import React from "react";

const GoodsCard = (props) => {
  return (
    <div className="goodsCard">
      <div className="foto">
        <img src={props.img} alt="pipe" />
      </div>
      <div className="description">
        <div className="lable">
          <span>{props.name}</span>
        </div>
      </div>
    </div>
  );
};

export default GoodsCard;