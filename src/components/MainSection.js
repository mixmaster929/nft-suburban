import React, {useState} from "react";
import aro4a from '../images/slider__gif__img/aro4a.gif';
import aro3 from '../images/slider__gif__img/aro3.gif'
import { loadBlockchain } from '../store/asyncActions'
import { useStore } from '../context/GlobalState'
import { setupConnection } from "../store/actions";

function MainSection(){
    const [{ accounts }, dispatch] = useStore();
    const [status, setStatus] = useState("Connect");

    /*const handleClick = async () => {
        await loadBlockchain(dispatch);
        document.getElementById("collect__now").innerText = "Connected";
    }*/

    
    const onboardButton = document.getElementById('collect__now');
    const { ethereum } = window;
    
    const isMetaMaskInstalled = () => {
        return Boolean(ethereum && ethereum.isMetaMask);
    };
    
    const initialize = async () => {
        const checkWallet = Boolean(ethereum && ethereum.isMetaMask);
        if(checkWallet == true){
            await ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('collect__now').innerText = 'Connected';
            document.getElementById('collect__now').disabled = true;
            await loadBlockchain(dispatch);
            setStatus("Connected");
            dispatch(setupConnection(1));
        }else{
            const MetaMaskClientCheck = () => {
                //Now we check to see if Metmask is installed
                if (!isMetaMaskInstalled()) {
                //If it isn't installed we ask the user to click to install it
                document.getElementById('collect__now').innerText = 'Click here to install MetaMask!';
                //When the button is clicked we call this function
                document.getElementById('collect__now').onclick = onClickInstall;
                //The button is now disabled
                document.getElementById('collect__now').disabled = false;
                } else {
                    //If it is installed we change our button text
                    document.getElementById('collect__now').innerText = 'Connect';
                    document.getElementById('collect__now').onclick = onClickConnect;
                    //The button is now disabled
                    document.getElementById('collect__now').disabled = false;
                }
            };
            MetaMaskClientCheck();
            
        }
        
        //await ethereum.request({ method: 'eth_requestAccounts' });
        //console.log(Boolean(ethereum && ethereum.isMetaMask))
    };
    
    const onClickInstall = () => {
        document.getElementById('collect__now').href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
    }

    const onClickConnect = async () => {
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            setStatus("Connected");
            dispatch(setupConnection(1));
        } catch (error) {
        console.error(error);
        }
    };

    
    return(
        <div id="main_and_text_container">
            <main>
                {/* <!-- slider section  --> */}
                <div className="slider__container">
                    <div
                        id="carousel"
                        className="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div
                                className="carousel-item active text-center"
                                data-bs-interval="3000"
                            >
                                <img
                                    className="d-inline-block"
                                    src={aro4a}
                                    className="d-block"
                                    alt="slider image"
                                />
                            </div>
                            <div
                                className="carousel-item text-center"
                                data-bs-interval="3000"
                            >
                                <img
                                    className="d-inline-block"
                                    src={aro3}
                                    className="d-block"
                                    alt="slider image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* <!-- main section texts  --> */}
            <section id="main__sec__text" >
                <div className="container">
                    <div className="text__wrapper">
                        <div className="text__wrap">
                            <h1 className="text-center text-white mb-0">                 
                                Suburban Colors
                            </h1>
                            <p className="text-center text-white mb-0">
                                <a style={{textDecoration: 'underline'}} href="https://opensea.io/collection/suburbancolors-collection" target={"_blank"}>Official NFT Collection</a> <br/> MINTING LIVE
                                人間 vs ロボット
                            </p>
                            <a
                                id="collect__now"
                                className="
                                    text-underline text-center
                                f    d-block
                                    text-bold
                                "
                                //href="#wallet"
                                onClick={initialize}
                                >{status}</a
                            >
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainSection;