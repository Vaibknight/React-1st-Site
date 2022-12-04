import "./style.css";
import {Link} from "react-router-dom";
let Header =()=>{


    return(
        <>
            <header className="header">
                <div className="margin-20">
                    <div className="row flex">
                        <div className="col-md flex-1">
                            <h1>HeroBiz</h1>
                        </div>
                        <div className="col-md flex-2">
                            <div>
                                <div className="nav-bar">
                                    <ul>
                                        <li className="list-style-type inline">
                                        <Link to="/Banner" className="list nav-link-ltr">Banner</Link>
                                        </li>
                                        <li className="list-style-type inline">
                                        <Link to="/About" className="list nav-link-ltr">About</Link>
                                        
                                        </li>
                                        <li className="list-style-type inline">
                                        <Link to="/Crousel" className="list nav-link-ltr">Crousel</Link>
                                        </li>
                                        <li className="list-style-type inline">
                                            <Link to="/Service" className="list nav-link-ltr">Service</Link>
                                        </li>
                                        <li className="list-style-type inline">
                                        <Link to="/Team" className="list nav-link-ltr">Team</Link>
                                        </li>
                                        <li className="list-style-type inline">
                                        <Link to="/Blog" className="list nav-link-ltr">Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md flex-1">
                            <div className="center">
                                <a className="tag">Get Started</a>
                            </div>
                        </div>
                    </div>    
                </div>   
            </header>       
        
        </>
    );
}

export default Header;