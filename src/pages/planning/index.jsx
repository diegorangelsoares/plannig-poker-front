import "./style.css";
import {BACKEND_URL} from "../../config";
import axios from "axios";
import {useState} from "react";

function planningHandler(plannings){
     if (!Array.isArray(plannings)){
         return plannings;
     }

     var i = 0;

     var content = plannings.map(function (planning){
         return (
             <div key={i++} > {planning.titulo}</div>
         );
     });

    return content;
}

export function Planning(){

    const [plannings, setPlannings] = useState([]);

    axios.get(BACKEND_URL + "/api/v1/planning/102")
    .then(function (response){
        console.log("RODANDO");
        setPlannings(planningHandler(response.data));
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