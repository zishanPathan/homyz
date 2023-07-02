import React, { useState } from "react";
import "./Header.css";
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpend, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpend) => {
    if(document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpend && "-100%"}
    }
  }
  return (
    <section className=" flexColCenter h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler 
        onOutsideClick={() => setMenuOpened(false)}>
        <div className=" flexCenter h-menu"
        style={getMenuStyles(menuOpend)}
        >
          <a href="#residencies">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#getStarted">Get Started</a>
          <button className="button">
            <a href="#contact">Contact</a>
          </button>
        </div>
       </OutsideClickHandler>
        <div className="menu-icon" onClick={()=> setMenuOpened ((prev)=> !prev)}>
          <BiMenuAltRight size={30}/>
        </div>

      </div>
   
    </section>
  );
};

export default Header;
