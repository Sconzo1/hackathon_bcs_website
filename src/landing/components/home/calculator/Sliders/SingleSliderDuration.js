import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';



const ColoredTypography = withStyles({
    root: {
      color: "#4a4a4a"
    }
  })(Typography);

const AirbnbSlider = withStyles({
  root: {
    color: '#8A8AF4',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 14,
      padding: '6px 8px',
      
      lineHeight: 1.5,
      borderColor: '#8A8AF4',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#FFFFFF',
        borderColor: '#8A8AF4',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#8A8AF4',
        borderColor: '#8A8AF4',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.07rem rgb(138, 138, 244)',
      },
    },
  })(Button);


function SingleSliderDuration ({name, min, max, step, currency, value, onChanged}) {  
    

    return(
        <div>
            <ColoredTypography  gutterBottom>{name}</ColoredTypography>

            <ColoredTypography component="div">
                <Box fontWeight="fontWeightBold" fontSize={21}>
                    {value} {currency}
                </Box>
            </ColoredTypography>

            <AirbnbSlider
                ThumbComponent={AirbnbThumbComponent}
                valueLabelDisplay = "auto"
                value={value}
                onChange = {(e, val) => {
                  onChanged(val)
              }}
                step = {step}
                min = {min}
                max = {max}
            />
            <div>
                <BootstrapButton onClick  ={ () => {onChanged(12)}}>
                    1 год
                </BootstrapButton>
                <BootstrapButton onClick={ () => {onChanged(24)}}>
                    2 года
                </BootstrapButton >
                <BootstrapButton onClick={ () => {onChanged(36)}}>
                    3 года
                </BootstrapButton>
                <BootstrapButton onClick={ () => {onChanged(48)}}>
                    4 года
                </BootstrapButton>
                <BootstrapButton onClick={ () => {onChanged(60)}}>
                    5 лет
                </BootstrapButton>
            </div>
        </div>
    )
}

export default SingleSliderDuration;