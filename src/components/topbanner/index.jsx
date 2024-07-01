import logoplanningpoker from "./images/Planning_Poker_logo.png"
import "./style.css";

export function Topbanner(){
    return (
        <div className="topbanner">
            <img src={logoplanningpoker} alt="Planning poker" className="topbanner" />
            <center className="topbanner" >PLANNING POKER X</center>
        </div>
    );
}