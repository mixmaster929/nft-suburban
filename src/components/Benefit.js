import React from "react";
import mouseIcon from '../images/icons/mouse.png';

function Benefit(){
    return(
        <section id="benefiit">
                        {/* <!-- <div className="container border-bottom"> --> */}
            <div className="container">
                <div>
                    <h1 className="title text-capitalize text-center">
                        Benefits for all
                    </h1>
                    <p
                        className="
                            para
                            text-center
                            w-xs-100
                            mx-auto
                            w-sm-70 w-lg-60 w-xxl-50
                        "
                    >
                        We have been committed to making everyone happy with our collection so we have thought of benefits for everyone.
                    </p>
                </div>
                {/* <!-- card list  --> */}
                <div
                    className="
                        card__list
                        row
                        justify-content-center justify-content-md-between
                        mt-5
                    "
                >
                    {/* <!-- first card  --> */}
                    <div className="card w-xs-90 w-md-48 w-xl-23">
                        <div className="card-body">
                            <h5 className="text-white card-title">
                                Gamers
                            </h5>
                            <p className="text-white card-text para__sm">
                                Among other things SuburbanColors will offer a cyberpunk play-to-earn multiplayer based on the current collection style. 
                            </p>
                        </div>
                    </div>
                    {/* <!-- first card  --> */}
                    <div className="card w-xs-90 w-md-48 w-xl-23">
                        <div className="card-body">
                            <h5 className="text-white card-title">
                                Collectors
                            </h5>
                            <p className="text-white card-text para__sm">
							   We plan to use stake mechanisms and liquidity pools.
                               We offer a Saoirse 3D avatar for 3D printing (GLB format).							 
							   
                            </p>
                        </div>
                    </div>
                    {/* <!-- first card  --> */}
                    <div className="card w-xs-90 w-md-48 w-xl-23">
                        <div className="card-body">
                            <h5 className="text-white card-title">
                                Art lovers
                            </h5>
                            <p className="text-white card-text para__sm">
                                By mint 3 NFTs you can get high-value handmade NFTs. Furthermore, we plan to offer high value handmade art auctions sporadically. Animation productions cannot be ruled out in years to come. 
                            </p>
                        </div>
                    </div>
                    {/* <!-- first card  --> */}
                    <div className="card w-xs-90 w-md-48 w-xl-23">
                        <div className="card-body">
                            <h5 className="text-white card-title">
                                To sum up...
                            </h5>
                            <p className="text-white card-text para__sm">
                               We will work to add value to the collection over time. Be part of this project and you will take unique, useful and valuable pieces.  
                            </p>
                        </div>
                    </div>
                </div>
                <a href="#roadmap" className="mouse text-center"
                    ><img
                        className="d-inline-block"
                        src={mouseIcon}
                        alt="mouse-icon"
                /></a>
            </div>
        </section>
    );
}

export default Benefit;