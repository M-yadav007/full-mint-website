import React from 'react'

const NavBar =({accounts,setAccounts})=>{
    const isConnected =Boolean (accounts[0]);


    //update the account
    async function connectAccount() {
        if(window.ethereum) {
            const accounts=await window.ethereum.request({
                method:"eth_requestAccounts",
            })
            setAccounts(accounts);
        }
    }
    return (
    <div>
        { /*left side-->  social media*/}
        <div>facebook</div>
        <div>twitter</div>
        <div>email</div>

        {/*right side -->sections and connect*/ }
        <div>about</div>
        <div>mint</div>
        <div>team</div>

        {/*connect-->*/}

        { isConnected ? (
            <p>Connected</p>
        ):(
            <button onClick={connectAccount}>Connect</button>
        )}     
        
        
        </div>
    );
};

export default NavBar;