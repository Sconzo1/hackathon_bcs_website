import React, { useState, useEffect } from 'react';
import SingleSlider from './SingleSlider'
import Currency from './Currency'
import SingleSliderDuration from './SingleSliderDuration'
import {Box, Grid, Hidden, isWidthUp, Typography,  withStyles, makeStyles, withWidth} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
    margin: "20px"
  },
  margin: {
    height: theme.spacing(3)
  }
}));



function CalcSlider() {
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
                Хочу вложить
            </Box> 
          </Typography>

            <Currency onCurrencyChanged={onCurrencyChanged}/>
            <div className={classes.margin} />
            <SingleSlider name="Первоначальная сумма" min={10000} max={10000000} step={5000} currency = {currency}/> 
            <div className={classes.margin} />
            <SingleSlider name="Ежемесячные пополнения" min={100} max={100000} step={100} currency = {currency}/> 
            <div className={classes.margin} />     
            <SingleSliderDuration name="На срок" min={1} max={60} step={1} currency = "months"/>

            
        </div>
        </Grid>
  );
}

export default CalcSlider;