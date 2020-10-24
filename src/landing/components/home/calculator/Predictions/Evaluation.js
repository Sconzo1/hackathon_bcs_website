import React, { useState, useEffect } from 'react';

import {Box, Grid, Hidden, isWidthUp, Typography,  withStyles, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    width: 800 + theme.spacing(3) * 2,
    margin: "20px"
  },
  margin: {
    height: theme.spacing(3)
  }
}));



function Evaluation() {
    const classes = useStyles();

    const [currency, setCurrency] = useState("₽");
    
    const onCurrencyChanged = (cur) =>{
        setCurrency(cur)
    }

    return (
        <Grid item>
            <div className={classes.root}>
                <Typography variant="h3" color = "secondary" gutterBottom>
                <Box fontWeight="fontWeightBold" >
                    Накоплю к октябрю 2025 года
                </Box> 
            </Typography>
            </div>
        </Grid>
        
  );
}

export default Evaluation;