import { Link } from "react-router-dom";
import "./style.css";

export function Menu(){
    return (
        <div className="menu">
            <nav className="menu">
                <Link to="/" className="menu">HOME</Link>
            </nav>
            <nav className="menu">
                <Link to="/planning" className="menu">PLANNING</Link>
            </nav>
            <nav className="menu">
                <Link to="/historias" className="menu">HISTÓRIAS</Link>
            </nav>
            <nav className="menu">
                <Link to="/votacao" className="menu">VOTAÇÃO</Link>
            </nav>

        </div>
    );
}