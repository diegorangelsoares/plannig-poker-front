import "./style.css";
import {BACKEND_URL} from "../../config";
import axios from "axios";
import {useEffect, useState} from "react";

function votosHandler(votos){
    if (!Array.isArray(votos)){
        return votos;
    }

    var i = 0;

    var content = votos.map(function (voto){
        // console.log(voto.votante);
        return (
            <div className="votos-content" key={i++}> {i + 1} - {voto.votante} - {voto.orcamento}</div>
        );
    });

    return content;
}

export function Votacao(){

    const [votos, setVotos] = useState("Nada a mostrar");

    useEffect(function (){
        axios.get(BACKEND_URL + "/api/v1/votacao/historia/1/final")
            .then(function (response){
                // console.log(response.data)
                if (response.data == "")
                    return;
                setVotos(votosHandler(response.data));
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
            <h1>VOTAÇÃO</h1>
            {votos}
        </div>
    );
}