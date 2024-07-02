import { Link } from "react-router-dom";
import "./style.css";

export function Menu(){
    return (
        <div className="menu">
            <nav className="menu">
                <Link to="/" className="menu">HOME</Link>
            </nav>
            <nav className="menu">
                <Link to="/" className="menu">PLANNING</Link>
            </nav>
            <nav className="menu">
                <Link to="/" className="menu">HISTÓRIAS</Link>
            </nav>
            <nav className="menu">
                <Link to="/" className="menu">VOTAÇÃO</Link>
            </nav>

        </div>
    );
}