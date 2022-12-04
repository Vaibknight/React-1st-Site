import team1 from "./img/team-1.jpg";
import team2 from "./img/team-2.jpg";
import team3 from "./img/team-3.jpg";
let Team=()=>{

    return(
        <>
            <div className="margin-50">
                <div>
                    <div className="row flex">
                        <div className="flex-1">
                            <div>
                                <div className="relative">
                                    <div className="myDIV">
                                        <img className="ban-size" src={team1}/>
                                       
                                    </div>
                                    <div className="social hide">
                                            <div className="inline">
                                                <i class="fa fa-twitter"></i>
                                            </div>
                                            <div className="inline">
                                                <i class="fa fa-facebook-official"></i>
                                            </div>
                                            <div className="inline">
                                                <i class="fa fa-instagram"></i>
                                            </div>
                                            <div className="inline">
                                                <i class="fa fa-linkedin-square"></i>
                                            </div>
                                        </div>
                                    
                                </div>
                                <div className="card-2">
                                    <div>
                                        <h3>Walter White</h3>
                                    </div>
                                    <div>
                                        <p>Chief Executive Officer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div>
                            <div className="relative">
                                    <div className="relative  myDIV">
                                        <img className="ban-size" src={team2}/>
                                       
                                    </div>
                                    <div className="social hide">
                                            <div className="inline">
                                                <i class="fa fa-twitter"></i>
                                            </div>
                                            <div className="inline">
                                                <i class="fa fa-facebook-official"></i>
                                            </div>
                                            <div className="inline">
                                                <i class="fa fa-instagram"></i>
                                            </div>
                                            <div className="inline">
                                                <i class="fa fa-linkedin-square"></i>
                                            </div>
                                        </div>
                                    
                                </div>
                                <div className="card-2">
                                    <div>
                                        <h3>Sarah Jhonson</h3>
                                    </div>
                                    <div>
                                        <p>Product Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div>
                            <div className="relative">
                                    <div className=" myDIV">
                                        <img className="ban-size" src={team3}/>
                                       
                                    </div>
                                    <div className="social hide">
                                            <div className="inline">
                                                <i class="fa fa-twitter"></i>
                                            </div>
                                            <div className="inline">
                                                <i class="fa fa-facebook-official"></i>
                                            </div>
                                            <div className="inline">
                                                <i class="fa fa-instagram"></i>
                                            </div>
                                            <div className="inline">
                                                <i class="fa fa-linkedin-square"></i>
                                            </div>
                                        </div>
                                    
                                </div>
                                <div className="card-2">
                                    <div>
                                        <h3>William Anderson</h3>
                                    </div>
                                    <div>
                                        <p>CTO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;