import React from "react";
import mouseIcon from '../images/icons/mouse.png';

function Roadmap(){
    return(
        <section id="roadmap">
                        {/* <!-- <div className="container border-bottom"> --> */}
            <div className="container">
                <div>
                    <h1 className="title text-center text-capitalize">
                        Roadmap
                    </h1>
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
                        Here is what to expect before and after the launch of the SuburbanColors.
                    </p>
                </div>
                {/* <!-- cards section  --> */}
                <ul className="list-group mt-4 mt-lg-5 w-xl-80 mx-xl-auto">
                    <li
                        className="
                            list-group-item
                            d-flex
                            align-items-center
                            mb-4 mb-lg-5
                            rounded
                        "
                    >
                        <h3 className="text-success mb-0 me-3 me-lg-4">Phase 1</h3>
                        <div>
                            Twitter and Discord Early Adopters giveaways.<br/>
                            Suprise Drop.<br/> 
                            Initiate the mint of Rebels at the SuburbanColors website.<br/>
                            Free mint for the 100 first verified members in Discord.<br/>
                            Launch The Hidden Network. A private space for owners to decide future steps to combat the Robots oppression.
                        </div>
                    </li>
                    <li
                        className="
                            list-group-item
                            d-flex
                            align-items-center
                            mb-4 mb-lg-5
                            rounded
                        "
                    >
                        <h3 className="text-success mb-0 me-3 me-lg-4">Phase 2</h3>
                        <div>
                            Upon reaching 50% of all Rebels released we will hold a series of giveaways both in ETH and NFTs.<br/>
                            Push for verification on Opensea and Twitter.<br/>
                            The Hidden Network first Event.<br/>
                        </div>
                    </li>
                    <li
                        className="
                            list-group-item
                            d-flex
                            align-items-center
                            mb-4 mb-lg-5
                            rounded
                        "
                    >
                        <h3 className="text-success mb-0 me-3 me-lg-4">Phase 3</h3>
                        <div>
                            Owning 2 Rebels will get the option to get a 3D print figure file. <br/>
                            Owning 3 Rebels will get the option to own a new handmade SuburbanColors NFT. 
                        </div>
                    </li>
                    <li
                        className="
                            list-group-item
                            d-flex
                            align-items-center
                            mb-4 mb-lg-5
                            rounded
                        "
                    >
                        <h3 className="text-success mb-0 me-3 me-lg-4">Phase 4</h3>
                        <div>                      
							<br/>
							Upon reaching 100% we will launch Hidden Network's second Event.<br/>
                            The token, liquidity pool, stake mechanisms, and other ways of earning will also be set into motion.<br/>
                            Plan a next Generation PhaseMap.
                        </div>
                    </li>
                </ul>
                {/* <!-- paragraph  --> */}
     
                <a href="#team" className="mouse text-center">
                    <img className="d-inline-block" src={mouseIcon} alt="mouse-icon"/>
                </a>
            </div>
        </section>
    );
}

export default Roadmap;