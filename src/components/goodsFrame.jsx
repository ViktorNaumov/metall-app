import React from "react";

const GoodsFrame = (props) => {
  return (
    <div className="goods">
      <div className="foto">
        <img src={props.img} alt="icon" />
      </div>
      <div className="description">
        <div className="lable">
          <span>{props.name}</span>
        </div>
        <div className="button">
          <span>Подробнее</span>
        </div>
      </div>
    </div>
  );
};

export default GoodsFrame;