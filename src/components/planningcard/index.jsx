import "./style.css";

export function Planningcard(props){

    // console.log(props);

    return (
        <div className="planningcard">
            <h2><b>Equipe: </b>{props.equipe}</h2>
            <div><b>Título: </b>{props.titulo}</div>
            <div><b>Obs.: </b>{props.observacao}</div>
            <div><b>Status: </b>{props.status}</div>
        </div>
    );
}