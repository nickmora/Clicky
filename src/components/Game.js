import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import Paper from '@material-ui/core/Paper';

function Game(props){
    return(
        <div>
            <Grid container spacring={24}>
                <Card img='https://pixel.nymag.com/imgs/daily/vulture/2018/09/14/14-bojack-horseman.w700.h700.jpg'>
                </Card>
                <Grid item xs={3}>
                    <Paper>    
                        <p>image goes here</p>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>    
                        <p>image goes here</p>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>    
                        <p>image goes here</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Game