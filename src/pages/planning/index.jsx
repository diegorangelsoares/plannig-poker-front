import "./style.css";
import {BACKEND_URL} from "../../config";
import axios from "axios";
import {useEffect, useState} from "react";
import {Planningcard} from "../../components/planningcard";

function planningsHandler(plannings){
     if (!Array.isArray(plannings)){
         return plannings;
     }

     var i = 0;

     var content = plannings.map(function (planning){
         console.log(planning.titulo);
         return (
             <Planningcard key={i++}
                           equipe={planning.equipe}
                           titulo={planning.titulo}
                           observacao={planning.observacao}
                           status={planning.status}
             />
             // <div className="plannings-content" key={i++}> {i + 1} - {planning.titulo} - {planning.equipe} - {planning.status}</div>
         );
     });

    return content;
}

export function Planning(){

    const [plannings, setPlannings] = useState("Nada a mostrar");

    useEffect(function (){
        axios.get(BACKEND_URL + "/api/v1/planning/all?page=0&size=20&sort=id")
        .then(function (response){
            // console.log(response.data.content)
            if (response.data == "")
                return;
            setPlannings(planningsHandler(response.data.content));
        })
        .catch(function (error){
            console.log(error);
        })
        .finally(function (){
            // console.log("finally")
        });
    },[]);

    return(
        <div className="content">
            <h1>PLANNINGS</h1>
            <div className="cards">
                {plannings}
            </div>
        </div>
    );

}