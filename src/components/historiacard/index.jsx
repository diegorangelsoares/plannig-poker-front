import "./style.css";

export function Historiacard(props){

    console.log(props);

    return (
        <div className="historiacard">
            <h2 className="historiacard">{props.descricao}</h2>
            <div className="historiacard-content">
                <div>
                    <div><b>Card: </b>{props.card}</div>
                    <div><b>Status: </b>{props.status}</div>
                    <div><b>Votaram: </b>{props.votos}</div>
                </div>
                <div className="historiacard-grade">{props.orcamento}</div>
            </div>
        </div>
    );
}
