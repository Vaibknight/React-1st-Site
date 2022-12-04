import img1 from "./img/ban.svg";
import "./style.css";
let Banner=()=>{
    return(
        <>
        <section>
            <div className="section-ban">
                <div className="stage">
                    <div className="box bounce-3 ">
                        <div className="center">

                            <img className="ban-size" src={img1}/>
                            <div>
                                <div className="margin-20">
                                    <h1>Welcome to <span style={{color:"#0ea2bd"}}>HeroBiz</span></h1>
                                </div>
                                <div className="margin-20">
                                    <a>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</a>
                                </div>

                                <div className="inline">
                                    <a className="tag">Get Started</a>
                                </div>
                                <div className="inline">
                                    <div className="tag-1">
                                        <i class="fa fa-play-circle-o" style={{color:"#0ea2bd",fontSize:"20px"}}></i>
                                        &nbsp; &nbsp;
                                        <a><strong>Watch Video</strong></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Banner;