import "./style.css";
import { BsFilePlusFill as PlusIcon} from "react-icons/bs";
import { BsFileMinusFill as MinusIcon} from "react-icons/bs";
import {useState} from "react";


function decreaseHistoriaSize(historiasSize, setHistoriasSize){
    if (historiasSize > 1)
        setHistoriasSize(historiasSize - 1);
}

function createHistoriaInputs(historiasSize, setHistoriasSize) {

    var content = [];

    for (var i = 0; i < historiasSize; i++) {
        content.push(
            <p className="home-form">
                <div><input type="text" className="home-form" size={40} placeholder="Descricao"/></div>
                <div><input type="text" className="home-form" size={15} placeholder="Card"/></div>
                <div><PlusIcon size={25} className="home-form-icon" onClick={()=>setHistoriasSize(historiasSize+1)}/></div>
                <div><MinusIcon size={25} className="home-form-icon" onClick={()=>decreaseHistoriaSize(historiasSize, setHistoriasSize)}/></div>
            </p>
        )
    }

    return content;
}

export function Home() {

    const [historiasSize, setHistoriasSize] = useState(1);

    return (
        <div className="content">
            <h1>HOME</h1>
            <div className="home-form">
                <h3 className="home-form">Cadastrar Planning: </h3>
                <p className="home-form"><input className="home-form" size={40} type="text"
                                                placeholder="Titulo"></input></p>
                <p className="home-form"><input className="home-form" size={50} type="text"
                                                placeholder="Observação"></input></p>
                <p className="home-form"><input className="home-form" size={20} type="text"
                                                placeholder="Equipe"></input></p>
                <h3 className="home-form">Histórias: </h3>

                {createHistoriaInputs(historiasSize, setHistoriasSize)}

                <p className="home-form"><input type="submit" className="home-form-button" value="Cadastrar nova história" /></p>
            </div>
        </div>
    );
}