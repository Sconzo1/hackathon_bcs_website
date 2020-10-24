import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  

const ColoredTypography = withStyles({
    root: {
      color: "#4a4a4a"
    }
  })(Typography);




  

function Currency ({onCurrencyChanged}){
    const classes = useStyles();
    const [currencyStyle, setCurrencyStyle] = useState("contained");
    

    return(
        <div>
            <ColoredTypography  gutterBottom>Выберите валюту
            
            </ColoredTypography>

            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button variant={currencyStyle} 
                        onClick={()=> {setCurrencyStyle("contained");
                                        onCurrencyChanged("₽")} }>₽</Button>
                <Button variant={(currencyStyle === "contained") ? "outlined": "contained"} 
                        onClick={()=> {setCurrencyStyle("outlined")
                        onCurrencyChanged("$")}}>$</Button>
            </ButtonGroup>       
        </div>
    )
}

export default Currency

