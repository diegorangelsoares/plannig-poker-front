import "./style.css";
import {BACKEND_URL} from "../../config";
import axios from "axios";

export function Planning(){

    axios.get(BACKEND_URL + "/api/v1/planning/102")
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    })
    .finally(function (){
        console.log("finally")
    });

    return(
        <div className="content">
            <h1>PLANNING</h1>
            <div> CONTEUDO </div>
        </div>
    );

}