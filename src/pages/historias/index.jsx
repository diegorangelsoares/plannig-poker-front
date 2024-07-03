import "./style.css";
import {BACKEND_URL} from "../../config";
import axios from "axios";
import {useEffect, useState} from "react";

function historiasHandler(historias){
    if (!Array.isArray(historias)){
        return historias;
    }

    var i = 0;

    var content = historias.map(function (historia){
        // console.log(historia.descricao);
        return (
            <div className="historias-content" key={i++}> {i + 1} - {historia.descricao} - {historia.card} - {historia.status}</div>
        );
    });

    return content;
}

export function Historias(){

    const [historias, setHistorias] = useState("Nada a mostrar");

    useEffect(function (){
        axios.get(BACKEND_URL + "/api/v1/historia/all?page=0&size=20&sort=id")
            .then(function (response){
                //console.log(response.data.content)
                setHistorias(historiasHandler(response.data.content));
            })
            .catch(function (error){
                console.log(error);
            })
            .finally(function (){
                console.log("finally")
            });
    },[]);

    return(
        <div className="content">
            <h1>HISTÓRIAS</h1>
            {historias}
        </div>
    );
}