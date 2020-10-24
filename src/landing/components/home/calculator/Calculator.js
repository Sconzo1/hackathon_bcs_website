import React, { useState, useEffect } from 'react';
import CalcSlider from './Sliders/CalcSlider'
import Evaluation from './Predictions/Evaluation'

import {Box, Grid, Hidden, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";


function Calculator() {
    return (
      <div>
        <Grid container justify="center" >
          
            <CalcSlider />          
            <Evaluation />

  
        </Grid>

      </div>
        
    );
  }

export default Calculator;
