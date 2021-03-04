import React, { useEffect, useState } from 'react';
import { HubConnectionBuilder, GlobalHost } from '@microsoft/signalr';
import { Grid } from '@material-ui/core';
import Hint from "./Hint";
import style from "../../style";
import Section1 from './Section1';
import Section2 from './Section2';
import ChatBox from './ChatBox';

const Home = (props) => {

    var connection = new HubConnectionBuilder().withUrl("/chatHub").build();
    
    connection.start({ waitForPageLoad: false });
    connection.on("ReceiveMessage", (message) => {
        document.getElementById("chat").textContent = message;
        //document.getElementById("chat").appendChild(<ChatBox isSelf="true" text={message} />);
    });
    var num = 0;
    document.addEventListener("DOMContentLoaded", () => {
        
        connection.on('BroadcastMessage', (userNum) => {
            num = userNum;
        });
    })

    return <Grid container spacing={1} style={style.fullWidth}>
        <Hint />
        <Section1 state={connection.state} numOfConnection={num}/>
        <Section2 connection={connection} />
    </Grid>
}

export default Home

