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
            <p className="home-form" key={i}>
                <input type="text" className="home-form" size={40} name="descricao" placeholder="Descricao"/>
                <input type="text" className="home-form" size={15} name="card" placeholder="Card"/>
                <PlusIcon size={25} className="home-form-icon" onClick={()=>setHistoriasSize(historiasSize+1)}/>
                <MinusIcon size={25} className="home-form-icon" onClick={()=>decreaseHistoriaSize(historiasSize, setHistoriasSize)}/>
            </p>
        )
    }

    return content;
}

function formHandle(e){
    e. preventDefault();
    // console.log(e.target.equipe.value);
    //Coletando os dados da planning
    const titulo = e.target.titulo.value;
    const observacao = e.target.observacao.value;
    const equipe = e.target.equipe.value;

    const historias = Array.from(e.target.descricao).map((descricao) => descricao.value);
    console.log(titulo);
    console.log(observacao);
    console.log(equipe);
    console.log(historias);

}

export function Home() {

    const [historiasSize, setHistoriasSize] = useState(1);

    return (
        <div className="content">
            <h1>HOME</h1>
            <div className="home-form">
                <form onSubmit={function (e){formHandle(e)}}>
                    <h3 className="home-form">Cadastrar Planning: </h3>
                    <p className="home-form"><input className="home-form" size={40} name="titulo" type="text"
                                                    placeholder="Titulo"></input></p>
                    <p className="home-form"><input className="home-form" size={50} name="observacao" type="text"
                                                    placeholder="Observação"></input></p>
                    <p className="home-form"><input className="home-form" size={20} name="equipe" type="text"
                                                    placeholder="Equipe"></input></p>
                    <h3 className="home-form">Histórias: </h3>

                    {createHistoriaInputs(historiasSize, setHistoriasSize)}

                    <p className="home-form"><input type="submit" className="home-form-button" value="Cadastrar nova história" /></p>
                </form>
            </div>
        </div>
    );
}
