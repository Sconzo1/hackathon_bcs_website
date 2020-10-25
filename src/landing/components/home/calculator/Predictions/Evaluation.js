import React from 'react';

import { Box, Grid, makeStyles, Typography, withStyles } from "@material-ui/core";
import GradientTypography from "../../../../../shared/components/GradientTypography";


const ColoredTypography = withStyles({
    root: {
        color: "#4a4a4a"
    }
})(Typography);


const labelValue = (label, value, xs) => {
    return (
        <Grid item xs={xs} style={{ marginTop: "22px" }}>
            <ColoredTypography gutterBottom>{label}</ColoredTypography>

            <ColoredTypography component="div">
                <Box fontWeight="fontWeightBold" fontSize={21}>
                    {value}
                </Box>
            </ColoredTypography>

            <div />
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


function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

function findFutureSum(investmentSum, monthlyPayment, period, rate) {
    return (investmentSum * Math.pow(1 + rate / 12, period) + 12 / rate * monthlyPayment * (Math.pow(1 + rate / 12, period) - 1))
}

function findPureIncome(investmentSum, monthlyPayment, period, rate) {
    return findFutureSum(investmentSum, monthlyPayment, period, rate) - investmentSum
}


function findIISIncome(investmentSum, monthlyPayment, period, rate) {
    if (investmentSum > 400000) {
        return 52000 * Math.floor(period / 12) + findPureIncome(investmentSum, monthlyPayment, period, rate)
    } else {
        return 0.13 * investmentSum * Math.floor(period / 12) + findPureIncome(investmentSum, monthlyPayment, period, rate)
    }
}

function getFutureMonth(period) {
    const currentMonth = new Date().getMonth()
    const months = ['январю', 'февралю', 'марту', 'апрелю', 'маю', 'июню', 'июлю', 'августу', 'сентябрю', 'октябрю', 'ноябрю', 'декабрю'];
    const futureMonth = (currentMonth + period) % 12
    return months[futureMonth]
}

function getFutureYear(period) {
    var date = new Date()
    date.setMonth(date.getMonth() + parseInt(period, 10))    
    return date.getFullYear();
}

function Evaluation({ currency, investmentSum, monthlyPayment, period, rate }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GradientTypography variant="h4" color="secondary" gutterBottom>
                Накоплю к {getFutureMonth(period)} {getFutureYear(period)} года
                </GradientTypography>
            <div>
                <Grid container>
                    {labelValue("Ожидаемая стоимость портфеля", `${numberWithSpaces(findFutureSum(investmentSum, monthlyPayment, period, rate).toFixed(2))} ${currency}`, 5)}
                    {labelValue("Ожидаемый доход с учетом комиссии", `${numberWithSpaces(findPureIncome(investmentSum, monthlyPayment, period, rate).toFixed(2))} ${currency}`, 5)}
                    {labelValue("Доход с ИИС", `${numberWithSpaces(findIISIncome(investmentSum, monthlyPayment, period, rate).toFixed(2))} ${currency}`, 2)}
                    {labelValue("Ожидаемая доходность", `${numberWithSpaces((findPureIncome(investmentSum, monthlyPayment, period, rate) / investmentSum * 100).toFixed(2))} %`, 5)}
                    {labelValue("Историческая доходность", `${60} %`, 5)}
                </Grid>
            </div>
        </div>
    );
}

export default Evaluation;