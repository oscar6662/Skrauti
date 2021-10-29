import React, { useState } from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import s from './Navbar.module.scss';


export default function Navbar() {
  const [down, setDropDown] = useState(true);

  function dropDown(){
    if(down){
      const burgerMenu = document.getElementById('burger-menu');
      burgerMenu.style.visibility = "visible";
      burgerMenu.style.opacity = "1";
      const body = document.getElementById('body');
      body.style.overflow = "hidden";
    }else{
      const burgerMenu = document.getElementById('burger-menu');
      burgerMenu.style.visibility = "hidden";
      burgerMenu.style.opacity = "0";
      const body = document.getElementById('body');
      body.style.overflow = "visible";
    }
    setDropDown(!down);
  }

  useScrollPosition(({ currPos }) => {
      if(currPos.y === 0){
        const myHeader = document.getElementById('myHeader');
        myHeader.style.backgroundColor = 'rgba(0,0,0,0)';
      }else{
        const myHeader = document.getElementById('myHeader');
        myHeader.style.backgroundColor = '#000';
      }
    
  })

  return (
    <>
      <header id="myHeader" >
          {/*Navbar in the top */}
          <div className = {s.navigation}>
            <div>
            </div>
            <nav className={s.navigation__links}>
              <ul>
                <a href='#' onClick={()=> dropDown()}><li>Valmynd</li><img onClick={()=> dropDown()} src={require("../../assets/img/burgermenu.png").default } alt = ""></img></a>
              </ul>
            </nav>
          </div>
     </header>

     {/* Nav page appear over */}
     <nav className={s.burger_menu} id="burger-menu"> 
      <div className={s.burger_menu__shape}>
        <div className={s.burger_menu__shape__triangle}></div>
          <div id="dropdownLinks" className={s.burger_menu__shape__rectangle}>
          <div className={s.burger_menu__shape__rectangle__list}>
            <a href='#' onClick={()=> dropDown()}><img className={s.burger_menu__shape__rectangle__list__close} src={require("../../assets/img/Close-Icon@1x.png").default } alt =""></img></a>
            <a href="/">Skrauti</a>
            <a href="/stjorn">Stjórn og starfsemi</a>
            <a href="https://www.facebook.com/obyggdkortlagning">Óbyggð</a>
            <a href="/greinar">Greinar og ítarefni</a>
           </div>
         </div>
        </div> 
      </nav>
    </>
  );
}