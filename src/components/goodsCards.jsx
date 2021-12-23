import React from "react";
import GoodsCard from "./goodsCard";
import Pipe1 from "../IMG/IMG-20211216-WA0003.jpg"
import Pipe2 from "../IMG/IMG-20211216-WA0004.jpg"
import Pipe3 from "../IMG/IMG-20211216-WA0005.jpg"
import Pipe4 from "../IMG/IMG-20211216-WA0006.jpg"
import Pipe5 from "../IMG/IMG-20211216-WA0007.jpg"
import Pipe6 from "../IMG/IMG-20211216-WA0008.jpg"

const GoodsCards = (props) => {
    return (
      <>
        <GoodsCard img={Pipe1} name="труба 720х9 80000 тыс. руб. за тонну" />
        <GoodsCard img={Pipe2} name="труба 1220х12 80000 тыс. руб. за тонну" />
        <GoodsCard img={Pipe3} name="труба 1020х12 80000 тыс. руб. за тонну" />
        <GoodsCard img={Pipe4} name="труба 630х8 80000 тыс. руб. за тонну" />
        <GoodsCard img={Pipe5} name="труба 820х10-11 80000 тыс. руб. за тонну" />
        <GoodsCard img={Pipe6} name="труба 1420х15,7-25,8 80000 тыс. руб. за тонну" />
      </>
    );
  };
  
  export default GoodsCards;