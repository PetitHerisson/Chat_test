import React, { useState } from 'react'
import { HubConnectionBuilder } from '@microsoft/signalr';
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import style from '../../style';

const Section2 = (props) => {

    const [NumberOfConnection, setNumberOfConnection] = useState(-1)
    const { connection } = props;
    
    const handleClick = () => {
        // Get user input message and send it to all users;
        var inputMessage = document.getElementById("inputMessage");
        connection.invoke("SendMessage", inputMessage.value)
        .catch ((err) => {
            return console.log(err.toString());             
        })
        // Clear input text;
        inputMessage.value = '';
    }
   

    return <Grid item xs={12}>
        <div id="chat" style={{ width: '600px', height: '300px', border: '1px solid #ccc' }}>
        </div>
        <Typography variant="h6" color="initial">
            <input type="text" id="inputMessage" />
            <button onClick={handleClick}>
                Send</button>
        </Typography>
    </Grid>
}


export default Section2
