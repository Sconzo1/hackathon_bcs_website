import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


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

function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

function SingleSlider({ name, min, max, step, currency, value, onChanged }) {
    const [initialSum, setinitialSum] = useState(min);

    const onInitialSumChanged = (e, val) => {
        setinitialSum(val)
    }


    return (
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
            <Grid item>
                <ColoredTypography gutterBottom>{name}</ColoredTypography>
            </Grid>

            <Grid item>
                <ColoredTypography component="div">
                    <Box fontWeight="fontWeightBold" fontSize={21}>
                        {numberWithSpaces(value)} {currency}
                    </Box>
                </ColoredTypography>
            </Grid>

            <Grid item style={{width: '100%'}}>
                <AirbnbSlider
                    ThumbComponent={AirbnbThumbComponent}
                    valueLabelDisplay="auto"
                    defaultValue={min}
                    onChange={(e, val) => {
                        onChanged(val)
                    }}
                    step={step}
                    min={min}
                    max={max}
                />
            </Grid>


        </Grid>
    )
}

export default SingleSlider;

