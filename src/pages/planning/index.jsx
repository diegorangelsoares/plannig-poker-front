import "./style.css";
import {BACKEND_URL} from "../../config";

export function Planning(){
    console.log("Endereco do backend: "+ BACKEND_URL);
    return(
        <div className="content">
            <h1>PLANNING</h1>
            <div> CONTEUDO </div>
        </div>
    );
}