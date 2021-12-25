import "./CSS/styles.css"
import "./CSS/container.css"
import "./CSS/container1.css"
import "./CSS/container2.css"
import "./CSS/contact.css"
import "./CSS/calccontainer.css"
import GoodsFrame from "./components/goodsFrame";
import Picture1 from "./IMG/272_big1.jpg"
import Picture2 from "./IMG/272_big1.jpg"
import Picture3 from "./IMG/icons8-телефон.png"
import Picture4 from "./IMG/logo3.png"
import Picture5 from "./IMG/tubes.png"
import Picture6 from "./IMG/placeholder.png"
import Picture7 from "./IMG/calc.png"
import Icon from"./components/icon"
import Contact from "./components/contact"
import Calc from"./components/calc"

import { Route,NavLink, Redirect } from "react-router-dom";
import GoodsCards from "./components/goodsCards"

function App() {
  return (
    <div className="general">
      <header>
        <div className="contact">
          <a href="tel:+79215559440">
            <img src={Picture3} alt="icon" />
          </a>
        </div>
      </header>
      <div className="container">
        <div className="container1">
          <div className="logo">
            <img src={Picture4} alt="icon" />
          </div>
          <div className="telmail">
            <div className="tel">
              <span>+7(921)5559440</span>
            </div>
            <div className="tel">
              <span>+7(921)5767757</span>
            </div>
            <div className="mail">
              <a href="mailto:metall.invest18@mail.ru">metall.invest18@mail.ru</a>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="icons">
            
            <NavLink to="/goods"><Icon img={Picture5} name="Товары"/></NavLink>
            <NavLink to="/contacts"><Icon img={Picture6} name="Контакты"/></NavLink>
            <NavLink to="/rec"><Icon img={Picture7} name="Вес"/></NavLink>
          </div>
          <div className="content">
            <Route path="/" render={()=> <Redirect to="/goods"/>}/>
            <Route path="/goods" render={()=><GoodsFrame img={Picture1} name="Лежалая труба" mark="/goodscards"/>}/>
            <Route path="/goods" render={()=><GoodsFrame img={Picture2} name="Б/у труба" mark=""/>}/>
            <Route path="/contacts" render={()=><Contact/>}/>
            <Route path="/rec" render={()=> <Calc/>}/>
            <Route path="/goodscards" render={()=><GoodsCards/>}/>

          </div>
          <div className="foot">
            <span>MINIMALISM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
