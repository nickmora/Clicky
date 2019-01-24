import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './style.css'

function Card(props){
    return(
        <Grid item xs={3}>
            <Paper>    
                <img src = {props.img} />
            </Paper>
        </Grid>
    )
    
}

export default Card
