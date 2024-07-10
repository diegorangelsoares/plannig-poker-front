import "./style.css";
import {BACKEND_URL} from "../../config";
import axios from "axios";
import {useEffect, useState} from "react";
import {Historiacard} from "../../components/historiacard";

function historiasHandler(historias){
    if (!Array.isArray(historias)){
        return historias;
    }

    var i = 0;

    var content = historias.map(function (historia){
        // console.log(historia);
        var cont = 0;

        var votos = historia.votos.map(function (voto){
            var votosRetorno;
            cont++;
            if(cont == 1)
                votosRetorno = voto.votante
            else
                votosRetorno = ", " + voto.votante
            return votosRetorno;
        })

        return (
            <Historiacard key={i++}
                          descricao={historia.descricao}
                          card={historia.card}
                          status={historia.status}
                          votos={votos}
                          orcamento={historia.orcamento}
            />
        );
    });

    return content;
}

export function Historias(){

    const [historias, setHistorias] = useState("Nada a mostrar");

    useEffect(function (){
        axios.get(BACKEND_URL + "/api/v1/historia/all?page=0&size=20&sort=id")
            .then(function (response){
                // console.log(response.data.content)
                // if (response.data == "")
                //     return;
                setHistorias(historiasHandler(response.data.content));
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
            <h1>HISTÓRIAS</h1>
            <div className="cards">
                {historias}
            </div>
        </div>
    );

}