import {Topbar} from "./components/topbar";
import "./global.css"
import {Topbanner} from "./components/topbanner";
import {Mainbody} from "./components/mainbody";
import {Footer} from "./components/footer";

function App() {
  return (
    <>
        <Topbar/>
        <Topbanner/>
        <Mainbody/>
        <Footer/>
    </>
  );
}

export default App;
