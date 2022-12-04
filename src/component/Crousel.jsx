import i1 from "./img/icon1.png"
import i2 from "./img/icon2.png"
import i3 from "./img/icon3.png"
import i4 from "./img/icon4.png"
let Crousel =()=>{
    return(
        <>
            
                <div className="margin-50">
                    <div className="row flex">
                        <div className="col-md flex-1">
                            <div className="card">
                                <div>
                                    <div>
                                        <img className="max-width" src={i1}/>
                                    </div>
                                    <h1 className="margin-20">Lorem Ipsum</h1>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md flex-1">
                            <div className="card">
                                <div>
                                <div>
                                        <img className="max-width" src={i2}/>
                                    </div>
                                    <h1 className="margin-20">Sed ut perspici</h1>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md flex-1">
                            <div className="card">
                                <div>
                                <div>
                                        <img className="max-width" src={i3}/>
                                    </div>
                                    <h1 className="margin-20">Magni Dolores</h1>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md flex-1"> 
                            <div className="card">
                                <div>
                                <div>
                                        <img className="max-width blue" src={i4}/>
                                    </div>
                                    <h1 className="margin-20">Nemo Enim</h1>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    );
}

export default Crousel;