
import Header from "./component/Header";
import Banner from "./component/Banner";
import Crousel from "./component/Crousel";
import About from "./component/About";
import Service from "./component/Service";
import Team from "./component/Team";
import Footer from "./component/Footer";
import {BrowserRouter,Route,Routes} from "react-router-dom";



function App() {
  return (
      <>
        
        <BrowserRouter>
        <Header/>
          <Routes>
          <Route exact path="/Banner" element={<Banner/>}/>
          <Route exact path="/Crousel" element={<Crousel/>}/>
            <Route exact path="/About" element={<About/>}/>
            <Route exact path="/Service" element={<Service/>}/>
            <Route exact path="/Team" element={<Team/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
        </>
  );
}

export default App;
