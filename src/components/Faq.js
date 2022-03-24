import React from "react";

function Faq(){
    return(
        <section id="faq">
            <div className="container">
                <div className="sec__header">
                    <h1 className="title text-center text-capitalize">FAQ</h1>
                    <p
                        className="
                            para
                            text-center
                            w-xs-100
                            mx-auto
                            w-sm-70 w-xxl-65
                            mt-3
                        "
                    >
                        We answered some frequently asked questions below.
                    </p>
                </div>
                {/* <!-- accordion  --> */}
                <div className="accordion list mt-4 mt-lg-5">
                    <div className="row justify-content-lg-between">
                        {/* <!-- left section  --> */}
                        <div
                            className="
                                col-12
                                w-lg-47
                                mb-5 mb-lg-0
                                left__side__accordion
                            "
                        >
                            <div
                                className="
                                    accordion accordion-flush
                                    d-flex
                                    flex-column
                                    justify-content-lg-between
                                "
                                id="left__accordion"
                            >
                                {/* <!-- accordion item  --> */}
                                <div
                                    className="accordion-item mb-4 mb-md-5 border-0"
                                >
                                    <h2
                                        className="accordion-header bg-dark"
                                        id="flush-headingOne"
                                    >
                                        <button
                                            className="
                                                accordion-button
                                                collapsed
                                                bg-dark
                                                text-white
                                            "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOne"
                                        >
                                            How many NFTs are there in total?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseOne"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne"
                                        data-bs-parent="#left__accordion"
                                    >
                                        <div
                                            className="
                                                accordion-body
                                                bg-dark
                                                border-top
                                            "
                                        >
                                            <p className="para">
                                                There are 2199 pieces of SuburbanColors tokens on the Ethereum blockchain. But a few more NFTs will be created to reward the owners. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- accordion item  --> */}
                                <div
                                    className="accordion-item mb-4 mb-md-5 border-0"
                                >
                                    <h2
                                        className="accordion-header bg-dark"
                                        id="flush-headingTwo"
                                    >
                                        <button className="accordion-button collapsed bg-dark text-white" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseTwo"
                                        >
											How can I get my character to play, the artwork or the 3D figure?
                                            </button>
                                    </h2>
                                    <div
                                        id="flush-collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo"
                                        data-bs-parent="#left__accordion"
                                    >
                                        <div
                                            className="
                                                accordion-body
                                                bg-dark
                                                border-top
                                            "
                                        >
                                            <p className="para">
											 If you have mint you can claim your options in the website and you will have it at your disposal a few time later. Weekly metadata updates will be made to adjust the owner's preferences.                                              
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- accordion item  --> */}
                                <div className="accordion-item border-0">
                                    <h2
                                        className="accordion-header bg-dark"
                                        id="flush-headingTwo"
                                    >
                                        <button
                                            className="
                                                accordion-button
                                                collapsed
                                                bg-dark
                                                text-white
                                            "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseThree"
                                        >                                            
											Are NFTs in the secondary market?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree"
                                        data-bs-parent="#left__accordion"
                                    >
                                        <div
                                            className="
                                                accordion-body
                                                bg-dark
                                                border-top
                                            "
                                        >
                                            <p className="para">
											Yes, they can be found in <a href='https://opensea.io/collection/suburbancolors-collection'>Opensea</a>.
                                                
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- right section  --> */}
                        <div
                            className="
                                col-12
                                w-lg-47
                                mb-lg-0
                                right__side__accordion
                            "
                        >
                            <div
                                className="
                                    accordion accordion-flush
                                    d-flex
                                    flex-column
                                    justify-content-lg-between
                                "
                                id="right__accordion"
                            >
                                {/* <!-- accordion item  --> */}
                                <div
                                    className="accordion-item mb-4 mb-md-5 border-0"
                                >
                                    <h2
                                        className="accordion-header bg-dark"
                                        id="flush-headingFour"
                                    >
                                        <button
                                            className="
                                                accordion-button
                                                collapsed
                                                bg-dark
                                                text-white
                                            "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseFour"
                                        >
                                          What is SuburbanColors? A game? A film?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFour"
                                        data-bs-parent="#right__accordion"
                                    >
                                        <div
                                            className="
                                                accordion-body
                                                bg-dark
                                                border-top
                                            "
                                        >
                                            <p className="para">
                                           We are preparing a play-to-earn multiplayer game but other entertaiment products might be launch in future.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- accordion item  --> */}
                                <div
                                    className="accordion-item mb-4 mb-md-5 border-0"
                                >
                                    <h2
                                        className="accordion-header bg-dark"
                                        id="flush-headingTwo"
                                    >
                                        <button
                                            className="
                                                accordion-button
                                                collapsed
                                                bg-dark
                                                text-white
                                            "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFive"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseFive"
                                        >
                                            Are there mint pass or pre-sale available? How much is the mint price?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseFive"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFive"
                                        data-bs-parent="#right__accordion"
                                    >
                                        <div
                                            className="
                                                accordion-body
                                                bg-dark
                                                border-top
                                            "
                                        >
                                            <p className="para">
												Currently mint pass is available just for 0.01 ETH. There are also Pre-Genesis NFTs available in OpenSea. Mint price is 0.03 ETH and mint date December 18th.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- accordion item  --> */}
                                <div
                                    className="accordion-item mb-4 mb-md-5 border-0"
                                >
                                    <h2
                                        className="accordion-header bg-dark"
                                        id="flush-headingSix"
                                    >
                                        <button
                                            className="
                                                accordion-button
                                                collapsed
                                                bg-dark
                                                text-white
                                            "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseSix"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseSix"
                                        >
                                            What is a liquidity pool?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseSix"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingSix"
                                        data-bs-parent="#right__accordion"
                                    >
                                        <div
                                            className="
                                                accordion-body
                                                bg-dark
                                                border-top
                                            "
                                        >
                                            <p className="para">
                                                Liquidity pools are used to convert your NFTs to ETH or to exchange them for other NFTs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               {/* <!-- <a href="#links" className="mouse text-center"
                    ><img
                        className="d-inline-block"
                        src="./img/icons/mouse.png"
                        alt="mouse-icon"
                /></a>--> */}
            </div>
        </section>
    );

}

export default Faq;