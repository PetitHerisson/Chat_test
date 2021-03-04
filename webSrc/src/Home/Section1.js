import React, { useState } from 'react'
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import style from '../../style'

const Section1 = (props) => {

    //const [NumberOfConnection, setNumberOfConnection] = useState(1)

    const { state, numOfConnection } = props;
    
    return <Grid item xs={12} style={style.underline}>
        <Typography variant="h6" color="initial">
            Section 1:
        </Typography>
        <List dense={true}>
            <ListItem >
                <ListItemText
                    primary={`Now has ${numOfConnection} connection to the hub`}
                />
            </ListItem>
            <ListItem >
                <ListItemText
                    primary={`Hub stage: ${state}`}
                />
            </ListItem>
        </List>
    </Grid>
}


export default Section1
