import React,{useState} from "react";
import mouseIcon from '../images/icons/mouse.png';
import Loader from '../images/loader.gif';
import { useStore } from '../context/GlobalState';
import { UserMint } from "../store/asyncActions";
function Wallet(){
    const [{ accounts,contract,total_mint,user_reserved,token_price,launch_time, connect}, dispatch] = useStore();
    const [quantity,setquantity] = useState(0)
    const [isTransactionInProcess, setTransactionInprocess] = useState(false);
    const [isTransactionSuccessful , setTransactionSuccessful] = useState(false);
    const [transactionError , setTransactionError] = useState("");

    const styles = {
        color: 'white'
    }


    const handleSubmit = async (e) =>{

        e.preventDefault();

        if((quantity 
            < 1) || (quantity > 3)){
            alert("Invalid Mint Quantity!")
        }
    
        else if(Number(total_mint) >= 2199 - user_reserved){
            alert("Public Sale Limit is Ended!")
        }

         else if(Number(total_mint) + Number(quantity) > (2199 - user_reserved)){
            alert("Max Limit To Total Sale!")
        }
         
        else{
           const total_amount = token_price * quantity;    
           console.log(total_amount);
           //setTransactionSuccessful(true);
           setTransactionError("");
         
            try {
                setTransactionInprocess(true)
                const newTransaction = {
                    quantity: quantity,
                    total_amount: total_amount
                }
                console.log("trx obj ",newTransaction)
                await UserMint(contract, accounts,newTransaction, dispatch);
                
                setTransactionInprocess(false);
                setTransactionSuccessful(true);
                document.getElementById('mintBox').value = ''

            }catch (error){
                console.log("error trax = ",error);
                setTransactionInprocess(false);
                setTransactionSuccessful(false);
                setTransactionError(error.message); 
            }
         
        }
        
    }
    

    return(
     <div>
        
         {
           parseInt((new Date().getTime() / 1000)) > launch_time ? 

                <section id="wallet">
                    <div className="container">
                        {/* <!-- your wallet address  --> */}
                        {/* <!-- text / tittle column  --> */}
                        <div className="col-12 right__side order-1 pt-5 pt-lg-0">
                            <h3 className="btn__style text-white mb-1 mb-lg-2 text-center">
                                GAME & COLLECTION
                            </h3>
                            <h1 className="title mb-3 mb-lg-4 text-center">Mint</h1>
                        </div>
                        <div className="row">
                            {/* <!-- your wallet  --> */}
                            <div className="col-12 col-lg-6">
                                <h3 className="text-center text-lg-start text-white text-capitalize">Your Wallet Address</h3>
                                <input type="text" disabled className="p-lg-2 form-control py-2" value={accounts[0]} style={styles} />
                            </div>
                            {/* <!-- number to min  --> */}
                            <div className="col-12 mt-4 mt-lg-0 col-lg-6">
                                <h3 className="text-white text-center text-lg-start">NFTs to Mint: (Max 3)</h3>
                                <input type="text" id="mintBox" className="form-control py-2" style={styles} min="1" max="3"  onChange={(e)=> setquantity(e.target.value)} required/>
                            </div>
                            {/* <!-- buttons  --> */}
                            <div className="col-12 mt-4">
                                {/* <!-- para  --> */}
                                {connect == 1 ? <p className="para text-center mb-0 mb-lg-1">Total NFTs mint until now: {total_mint}/2199</p> : null} 
                                <p className="para text-center">Minting fee for 1 NFT = 0.03 ETH</p>
                                {/* <!-- button  --> */}
                                <div className="btn-wrap text-center">
                                    <a href="" className="cus_btn text-uppercase text-white text-center" onClick={handleSubmit}>buy</a>
                                         &nbsp;
                                        {isTransactionInProcess && <img width="40px" src={Loader} alt="Loading..." />} 
                                        {isTransactionSuccessful == true ? <div style={{color:"green"}}>Mint Successful</div>:null}
                                        {!isTransactionSuccessful && <div style={{color:"red"}}>{transactionError}</div>}
                                </div>
                            </div>
                        </div>
                        <a href="#suburban__NFT" className="mouse text-center"
                            ><img
                                className="d-inline-block"
                                src={mouseIcon}
                                alt="mouse-icon"
                        /></a>
                    </div>
                </section>
                : <div> <br/><br/> <h1 className="title mb-3 mb-lg-4 text-center">Minting has not Started Yet</h1></div>
         }
    </div>
    );
}

export default Wallet;