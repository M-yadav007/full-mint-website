import {useState} from 'react'
import {ethers,BigNumber, Signer} from 'ethers';
import roboPunksNFT from './RoboPunksNFT.json';

import {Box,Button,on
    ,Flex,Input,Text} from "@chakra-ui/react";

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
                signer
            );
            try{
                const response = await contract.mint(BigNumber.from(mintAmount),{value :ethers.utils.parseEther((0.02*mintAmount).toString()),});
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

        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
                <div>
            <Text fontSize="48px" textShadow="0 5px #000000">Robopunks</Text>
            <Text fontSize="30px" letterSpacing="-5.5p%" fontFamily="VT323" textShadow="0 2px 2px #000000">
                hello this is robo punks nft created as a test prject min now!!!!!
            </Text>

            </div>
            {isConnected ? (
                <div>
                    <Flex align="center" justify="center">
                        <Button
                        backgroundColor="orange"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10 px"
                         onClick ={handleDecrement}>-</Button>
                        <Input
                        readOnly
                        fontfamily="inherit"
                        width="100px"
                        height="40px"
                        textAlign="center"
                        paddingLeft="19px"
                        marginTop="10px"
                        type="number"
                        value={mintAmount}/>
                        <Button
                        backgroundColor="orange"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10 px"
                         onClick ={handleIncrecrement}>+</Button>
                        
                    </Flex>
                    <Button
                        backgroundColor="orange"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10 px"
                         onClick ={handleMint}>MINT NOW!!!</Button>
                </div>

            ) :(
                <Text
                marginTop="70px"
                fontSize="30px"
                letterSpace="-5.5%"
                fontFamily="Vt323"
                textShadow="0 3px #000000"
                color="#D6517D"> you must be connected to mint</Text>
            )}
            </Box>
        </Flex>

    );

};

export default MainMint;