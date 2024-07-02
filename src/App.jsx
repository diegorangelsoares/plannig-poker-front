import {Topbar} from "./components/topbar";
import "./global.css"
import {Topbanner} from "./components/topbanner";
import {Mainbody} from "./components/mainbody";
import {Footer} from "./components/footer";
import {Menu} from "./components/menu";
import {Home} from "./pages/home";
import {Planning} from "./pages/planning";
import {Historias} from "./pages/historias";
import {Votacao} from "./pages/votacao";

function App() {
  return (
    <>
        <Topbar/>
        <Topbanner/>
        <Mainbody>
            <Menu/>
            {/*<Home/>*/}
            {/*<Planning/>*/}
            {/*<Historias/>*/}
            <Votacao/>
        </Mainbody>
        <Footer/>
    </>
  );
}

export default App;
