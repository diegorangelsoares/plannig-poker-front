import {Topbar} from "./components/topbar";
import "./global.css"
import {Topbanner} from "./components/topbanner";
import {Mainbody} from "./components/mainbody";
import {Footer} from "./components/footer";
import {Menu} from "./components/menu";

function App() {
  return (
    <>
        <Topbar/>
        <Topbanner/>
        <Mainbody>
            <Menu/>
        </Mainbody>
        <Footer/>
    </>
  );
}

export default App;
