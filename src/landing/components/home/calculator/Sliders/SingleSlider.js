import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
      <span className="bar"/>
      <span className="bar"/>
      <span className="bar"/>
    </span>
    );
}


function SingleSlider({name, min, max, step, currency, value, onChanged}) {
    const [initialSum, setinitialSum] = useState(min);

    const onInitialSumChanged = (e, val) => {
        setinitialSum(val)
    }


    return (
        <div>
            <ColoredTypography gutterBottom>{name}</ColoredTypography>

            <ColoredTypography component="div">
                <Box fontWeight="fontWeightBold" fontSize={21}>
                    {value} {currency}
                </Box>
            </ColoredTypography>

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
        </div>
    )
}

export default SingleSlider;

