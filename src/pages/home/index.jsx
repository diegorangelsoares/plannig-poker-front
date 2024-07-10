import "./style.css";
import { BsFilePlusFill as PlusIcon} from "react-icons/bs";
import { BsFileMinusFill as MinusIcon} from "react-icons/bs";
import {useState} from "react";
import axios from "axios";
import {BACKEND_URL} from "../../config";
import {Message, MESSAGE_TYPE} from "../../components/message";


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

//modelo do json
/*
{
  "titulo": "Planning Poker para orçamentos",
  "observacao": "Observacao do planning",
  "equipe": "HPay",
  "historias": [
    {
      "descricao": "Descricao da historia",
      "card": "HPAY-1",
      "idPlanning": 1,
      "orcamento": 0,
      "votos": [
        {
          "votante": "Nome da pessoa que esta votando",
          "orcamento": 1,
          "idHistoria": 1
        }
      ]
    }
  ]
}

 */

function formDataToJsonMapper(titulo, observacao, equipe, historias){
    let formatedData = {
        titulo: titulo,
        observacao: observacao,
        equipe: equipe,
        historias : historias.map(descricao => {
            return {descricao: descricao}
        })
    };

    return JSON.stringify(formatedData)
}

async function formHandle(event, setMessage){

    event. preventDefault();
    //Coletando os dados da planning
    const titulo = event.target.titulo.value;
    const observacao = event.target.observacao.value;
    const equipe = event.target.equipe.value;

    const historias = Array.from(event.target.descricao).map(descricao => descricao.value);

    console.log(historias);

    const jsonData = formDataToJsonMapper(titulo, observacao, equipe, historias);

    const axiosConfig = {headers: {'Content-Type': 'application/json'}};

    console.log(jsonData);

    try{
        await axios.post(BACKEND_URL + "/api/v1/planning", jsonData, axiosConfig);

        const message = "Planning cadastrando com Sucesso!";
        const title = "Cadastrado com Sucesso!"

        setMessage(<Message title={title} message={message} type={MESSAGE_TYPE.SUCCESS} />);
    }catch (error) {

        const message = error.message;
        const title = "Erro no cadastro!"

        setMessage(<Message title={title} message={message} type={MESSAGE_TYPE.ERROR} />);
    }

}

export function Home() {

    const [historiasSize, setHistoriasSize] = useState(1);
    const [submitMessage, setSubmitMessage] = useState("");

    return (
        <div className="content">
            <h1>HOME</h1>
            {submitMessage}
            <div className="home-form">
                <form onSubmit={async (e) => await formHandle(e, setSubmitMessage)}>
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
