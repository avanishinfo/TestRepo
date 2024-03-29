import React from 'react';
import "./scrollup.css";

const ScrollUp = () => {
    window.addEventListener("scroll", function (){
        const scrollUp = document.querySelector(".scrollup");
        

        if (this.scrollY <= 600){
            scrollUp.addChild("show-scroll");

            //scrollUp.classList.remove("hide-scroll");
        } 
        else if(this.scrollY >600) {
            //scrollUp.classList.remove("show-scroll");

            scrollUp.removeChild("show-scroll")
        }

    });
    return (
     <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
     </a>
    )
}

export default ScrollUp