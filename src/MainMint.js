import {useState} from 'react'
import {ethers,BigNumber, Signer} from 'ethers';
import roboPunksNFT from './RoboPunksNFT.json';

const roboPunksNFTAddress ="0xc4C8118cdFd71aA0AA2D0138a078dD59A0A0468e";

const MainMint=({accounts,setAccounts})=>{
    const [mintAmount,setMintAmount]=useState(1);
    const isConnected =Boolean(accounts[0]);

    async function handleMint()
    {
        if(window.ethereum)
        {
            const provider =new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract
            (
                roboPunksNFTAddress,
                roboPunksNFT.abi,
                Signer
            );
            try{
                const response =await contract.mint(BigNumber.from(mintAmount));
                console.log('response: ',response);

            } catch(err)
            {
                console.log("error: ",err)
            }

        }
    }

    const handleDecrement=() =>{
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount -1);
    };

    const handleIncrecrement=() =>{
        if(mintAmount >=3) return;
        setMintAmount(mintAmount +1);
    };

    return (

        <div>
            <h1>Robopunks</h1>
            <p>hello this is robo punks nft created as a test prject min now!!!!!</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick ={handleDecrement}>-</button>
                        <button onClick ={handleIncrecrement}>+</button>
                    </div>
                    <button onClick={handleMint}>mint now!!</button>
                </div>

            ) :(
                <p> you must be connected to mint</p>
            )}
        </div>

    );

};

export default MainMint;