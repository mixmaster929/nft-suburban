import React from "react";
import mouseIcon from '../images/icons/mouse.png';
import gif3web4 from '../images/gif3web4.gif'

function Rarity(){
    return(
        <section id="rarity">
                        {/* <!-- <div className="container border-bottom"> --> */}
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    {/* <!-- right side  --> */}
                    <div
                        className="col-12 col-lg-6 right__side order-1 pt-5 pt-lg-0"
                    >
                        <div className="btn__style text-white mt-5 p-2">
                            THE TRAITS
                        </div>
                        <h1 className="title mb-3 mb-lg-4">Categories</h1>
                        <p className="para">
                            SuburbanColors is divided into humans, cyborgs and robots. But current launch of 2199 NFTs is made as follows: <br/>
                            {/* <!-- 0NFTs of Asimov-X, the Android 1<br>
                            0 NFTs of Goostman-787, the Android 2<br>--> */}
                            1100 NFTs of Saoirse, the Cyborg female.<br/>
                            1099 NFTs of Syfer Klynes Harbisson, the Cyborg male.<br/>
                        </p>
                        <p className="para">
                            There are more than 150 different categorized traits with its percentage of chances of being mint.
                        </p>

                    </div>
                    {/* <!-- left side  --> */}
                    <div className="col-12 col-lg-5 left__side order-0">


                        <div
                            id="suburban__carousel"
                            className="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                        >
						<div className="carousel-inner3">
                            <img
                                className="w-100"
                                src={gif3web4}
                                alt=""
                            />
							</div>
							</div>



                    </div>
                </div>
                <a href="#benefiit" className="mouse text-center"
                    ><img
                        className="d-inline-block"
                        src={mouseIcon}
                        alt="mouse-icon"
                /></a>
            </div>
        </section>
    );
}
export default Rarity;