import React, { useState, useEffect } from 'react';

import {Box, Grid, Hidden, isWidthUp, Typography,  withStyles, makeStyles } from "@material-ui/core";

const ColoredTypography = withStyles({
    root: {
      color: "#4a4a4a"
    }
  })(Typography);


const labelValue = (label, value) => {
    return(
        <Grid xs={4}>
            <ColoredTypography  gutterBottom>{label}</ColoredTypography>
            
            <ColoredTypography component="div">
                <Box fontWeight="fontWeightBold" fontSize={21}>
                    {value}
                </Box>
            </ColoredTypography>

            <div style={{marginBottom:"24px"}}/>
        </Grid>
    )
}

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

    
    return (
        <Grid item justify="center" spacing={5}>
            <div className={classes.root}>
                <Typography variant="h3" color = "secondary" gutterBottom>
                <Box fontWeight="fontWeightBold" >
                    Накоплю к октябрю 2025 года
                </Box> 
            </Typography>
            </div>
        
        <Grid container spacing={2}>
            {labelValue("Ожидаемая стоимость портфеля", "46 770 $")}
            {labelValue("Ожидаемый доход с учетом комиссии", "9 269 $")}
            {labelValue("Доход с ИИС", "+3 400 $")}
            {labelValue("Ожидаемая доходность", "7,0 %")}
            {labelValue("Историческая доходность", "11,18 %")}
        </Grid>
        
        </Grid>
            
        
  );
}

export default Evaluation;