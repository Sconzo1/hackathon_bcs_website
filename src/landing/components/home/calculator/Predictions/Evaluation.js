import React from 'react';

import {Box, Grid, makeStyles, Typography, withStyles} from "@material-ui/core";
import GradientTypography from "../../../../../shared/components/GradientTypography";


const ColoredTypography = withStyles({
    root: {
        color: "#4a4a4a"
    }
})(Typography);


const labelValue = (label, value, xs) => {
    return (
        <Grid item xs={xs} style={{marginTop: "22px"}}>
            <ColoredTypography gutterBottom>{label}</ColoredTypography>

            <ColoredTypography component="div">
                <Box fontWeight="fontWeightBold" fontSize={21}>
                    {value}
                </Box>
            </ColoredTypography>

            <div/>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: 700 + theme.spacing(3) * 2,
        margin: "20px"
    },
    margin: {
        height: theme.spacing(3)
    }
}));


function Evaluation({currency, investmentSum, monthlyPayment, period}) {
    const classes = useStyles();


    return (
        <Grid item>
            <div className={classes.root}>
                <GradientTypography variant="h4" color="secondary" gutterBottom>
                    Накоплю к октябрю 2025 года
                </GradientTypography>
                <div>
                    <Grid container spacing={4}>
                        {labelValue("Ожидаемая стоимость портфеля", `${(investmentSum * Math.pow(1 + 0.07 / 12, period)).toFixed(2)} ${currency}`, 5)}
                        {labelValue("Ожидаемый доход с учетом комиссии", `${(investmentSum * Math.pow(1 + 0.07 / 12, period) - investmentSum).toFixed(2)} ${currency}`, 5)}
                        {labelValue("Доход с ИИС", `+ ${500} ${currency}`, 2)}
                        {labelValue("Ожидаемая доходность", `${((investmentSum * Math.pow(1 + 0.07 / 12, period) - investmentSum) / investmentSum * 100).toFixed(2)} %`, 5)}
                        {labelValue("Историческая доходность", `${60} %`, 5)}
                    </Grid>
                </div>
            </div>
        </Grid>


    );
}

export default Evaluation;