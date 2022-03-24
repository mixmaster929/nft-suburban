import React from "react";
import mouseIcon from '../images/icons/mouse.png';
import sliderImage from '../images/3dcb.gif';
import sliderImage1 from '../images/aro7d.gif';

function SuburbanNFT(){
    return(
        <section id="suburban__NFT">
            {/* <!-- <div className="container border-bottom"> --> */}
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    {/* <!-- right side  --> */}
                    <div
                        className="col-12 col-lg-6 right__side order-1 pt-5 pt-lg-0"
                    >
                        <div
                            className="btn__style text-white mb-1 mb-lg-2 text-left"
                        >
                            GAME & COLLECTION
                        </div>
                        <h1 className="title mb-3 mb-lg-4">Suburban NFTs</h1>
                        <p className="para">
                            SuburbanColors is a hybrid collection of 2199 pieces made with animated handicrafts and programmatic generative art. The pieces will be redeemable for their in-game playable character. The objective of the collection is to provide entertainment and to reward everyone who supports it as much as possible.
                             {/* <!--In this first generation, we aim to create a decentraliced NFT Real Estate for the benefit of all the owners. --> */}
                        </p>
                        <p className="para">
                            The collection consists of different categories of humans and cyborgs. The pieces can be obtained by mint on a given date or later in secondary markets. Max 3 mints per wallet. Owning 2 NFTs gives you the right to get a 3D figure. Owning 3 NFTs gives you the right to get a handmade NFT artwork.
                        </p>
                        <p className="para">
                            (The whole collection is dropping Q4 2021)
                        </p>
                    </div>
                    {/* <!-- left side  --> */}
                    <div className="col-12 col-lg-5 left__side order-0 order-lg-3">


                        <div
                            id="suburban__carousel"
                            className="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div
                                    className="carousel-item active"
                                    data-bs-interval="2000"
                                >
                                    <img
                                        src={sliderImage}
                                        className="d-block w-100"
                                        alt="slider image"
                                    />
                                </div>
                                 <div
                                    className="carousel-item"
                                    data-bs-interval="4000"
                                >
                                    <img
                                        src={sliderImage1}
                                        className="d-block w-100"
                                        alt="slider image"
                                    />
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                <a href="#plot" className="mouse text-center"
                    ><img
                        className="d-inline-block"
                        src={mouseIcon}
                        alt="mouse-icon"
                /></a>
            </div>
        </section>
    );
}

export default SuburbanNFT;