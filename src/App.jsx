import "./global.css"
import {Topbar} from "./components/topbar";
import {Topbanner} from "./components/topbanner";
import {Mainbody} from "./components/mainbody";
import {Footer} from "./components/footer";
import {Menu} from "./components/menu";
import {Home} from "./pages/home";
import {Planning} from "./pages/planning";
import {Historias} from "./pages/historias";
import {Votacao} from "./pages/votacao";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
        <Topbar/>
        <Topbanner/>
        <Mainbody>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/planning" element={<Planning/>}/>
                <Route path="/historias" element={<Historias/>}/>
                <Route path="/votacao" element={<Votacao/>}/>
            </Routes>
        </Mainbody>
        <Footer/>
    </>
  );
}

export default App;
