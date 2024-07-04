import "./style.css";

export function Home(){
    return(
        <div className="content">
            <h1>HOME</h1>
            <div className="home-form">
                <h3 className="home-form">Inserir nova Planning: </h3>
                <p className="home-form"><input className="home-form" size={40} type="text" placeholder="Titulo"></input></p>
                <p className="home-form"><input className="home-form" size={50} type="text" placeholder="Observação"></input></p>
                <p className="home-form"><input className="home-form" size={20} type="text" placeholder="Equipe"></input></p>
            </div>
        </div>
    );
}