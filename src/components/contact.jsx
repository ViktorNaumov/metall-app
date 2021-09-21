import React from "react";

const Contact = () => {
  return (
    <div className="contcontainer">
      <div className="h1cont">
        <span>
          <h1>Свяжитесь с нами</h1>
        </span>
      </div>
      <div className="cont">
        <div className="telephone">
          <span>
            <b>Телефон: </b>
            <a href="tel:+79215559440">+7(921)5559440</a>,{" "}
            <a href="tel:+79215767757">+7(921)5767757</a>
          </span>
        </div>
        <div className="email">
          <span>
            <b>Электронная почта: </b>
            <a href="mailto:metall.invest18@mail.ru">metall.invest18@mail.ru</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
