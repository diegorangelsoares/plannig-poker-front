import "./style.css";
import { BsFilePlusFill as PlusIcon} from "react-icons/bs";
import { BsFileMinusFill as MinusIcon} from "react-icons/bs";

export function Home(){
    return(
        <div className="content">
            <h1>HOME</h1>
            <div className="home-form">
                <h3 className="home-form">Inserir nova Planning: </h3>
                <p className="home-form"><input className="home-form" size={40} type="text"
                                                placeholder="Titulo"></input></p>
                <p className="home-form"><input className="home-form" size={50} type="text"
                                                placeholder="Observação"></input></p>
                <p className="home-form"><input className="home-form" size={20} type="text"
                                                placeholder="Equipe"></input></p>
                <h3 className="home-form">Histórias: </h3>
                <p className="home-form">
                    <div><input type="text" className="home-form" size={40} placeholder="Descricao"/></div>
                    <div><input type="text" className="home-form" size={15} placeholder="Card"/></div>
                    <div><PlusIcon size={25} className="home-form-icon"/></div>
                    <div><MinusIcon size={25} className="home-form-icon"/></div>
                </p>
            </div>
        </div>
    );
}