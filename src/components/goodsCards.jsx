import React from "react";
import GoodsCard from "./goodsCard";
import Pipe1 from "../IMG/7.png"
import Pipe2 from "../IMG/8.png"
import Pipe3 from "../IMG/9.png"
import Pipe4 from "../IMG/10.png"
import Pipe5 from "../IMG/5.png"
import Pipe6 from "../IMG/6.png"

const GoodsCards = (props) => {
    return (
      <>
        <GoodsCard img={Pipe1} name="труба 1220х16 95000 тыс. руб. за тонну" />
        <GoodsCard img={Pipe1} name="труба 1220х14 95000 тыс. руб. за тонну" />
        <GoodsCard img={Pipe2} name="труба 1220х12 95000 тыс. руб. за тонну" />
        <GoodsCard img={Pipe3} name="труба 1020х12 95000 тыс. руб. за тонну" />
        <GoodsCard img={Pipe4} name="труба 1020х16 95000 тыс. руб. за тонну" />
        <GoodsCard img={Pipe5} name="труба 820х10-11 95000 тыс. руб. за тонну" />
        <GoodsCard img={Pipe6} name="труба 1420х15,7-25,8 95000 тыс. руб. за тонну" />
      </>
    );
  };
  
  export default GoodsCards;