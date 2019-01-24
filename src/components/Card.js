import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './style.css'

class Card extends React.Component{
    state={
        clicked: false,
    };

    handleClick = e=>{
        if(!this.state.clicked){
            // add to the score
            // scramble the order of stuff
            this.setState({clicked:true});
        } else{
            alert('game over');
        }
    }

    render(){
        return(
            <Grid item xs={3}>
                <Paper>    
                    <img src = {this.props.img} onClick={this.handleClick}/>
                </Paper>
            </Grid>
        )
    }
}

export default Card
