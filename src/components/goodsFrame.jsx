import React from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink to={props.mark} style={{ textDecoration: 'none' }}><span>Подробнее</span></NavLink>
        </div>
      </div>
    </div>
  );
};

export default GoodsFrame;