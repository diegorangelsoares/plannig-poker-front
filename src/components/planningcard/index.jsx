import "./style.css";

export function Planningcard(props){

    console.log(props);

    return (
        <div className="planningcard">
            <h2>Equipe: {props.equipe}</h2>
            <div>Título: {props.titulo}</div>
            <div>Obs.: {props.observacao}</div>
            <div>Status: {props.status}</div>
        </div>
    );
}