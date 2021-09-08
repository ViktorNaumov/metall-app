import React from "react";

const Calc = () => {
  return (
    <div className="calccontainer">
      <div className="calcwraper">
        <div id="mp_calc_zag">
          <a href="https://metallicheckiy-portal.ru/calculator/calculator_metalla">
            <b>Металлический калькулятор</b>
          </a>
        </div>
        <iframe
          id="mp_calc_fr"
          src="https://metallicheckiy-portal.ru/servis/calcn_v2.php?tp=3&stil=2&pmet=st&pprok=protru&wi=280&he=370&fi=215764&fz=215764&kf=037151&if=&kbs=B1E9DD&kbt=001F16&tz=ffffff&tt=FFFFFF&tk=FFFFFF&kwi=130&khe=20&kiwi=&kihe=&swi=&she=&ko=00FFF2&kn=1FD9A4&kns=1FD9A4&knt=1FD9A4&sit=12&rpr=5&rvp=2&sz=&nn=&nk=on"
          scrolling="no"
          height="370px"
          width="274px"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="calc"
        ></iframe>
      </div>
    </div>
  );
};

export default Calc;
