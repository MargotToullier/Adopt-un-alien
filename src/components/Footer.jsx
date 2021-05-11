import React from "react";
import './Footer.css';
import go from '../assets/go.svg';
import Ma_recherche from '../assets/Ma_recherche.svg';
import Mon_compte from '../assets/Mon_compte.svg';


function Footer(){
  
  return(
    <div className="Footer">
      <div class="container">
          <div><img src={Ma_recherche} alt="recherche"/><p>Ma recherche</p></div>
          <div><img src={Mon_compte} alt="compte"/><p>Mon compte</p></div>
          <div><img src={go} alt="go"/><p>Go pour pécho</p></div>
        </div>
    </div>
  )
}

export default Footer;