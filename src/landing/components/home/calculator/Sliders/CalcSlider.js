import React from 'react';
import SingleSlider from './SingleSlider'
import Currency from './Currency'
import SingleSliderDuration from './SingleSliderDuration'
import { Grid, makeStyles } from "@material-ui/core";
import GradientTypography from "../../../../../shared/components/GradientTypography";


const useStyles = makeStyles((theme) => ({
    root: {
        margin: 20
    },
    margin: {
        height: theme.spacing(3)
    }
}));


function CalcSlider({ currency, investmentSum, monthlyPayment, period, onCurrencyChanged, onInvestmentSumChanged, onMonthlyPaymentChanged, onPeriodChanged }) {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <GradientTypography variant="h4" color="secondary" gutterBottom>
                    Хочу вложить
                </GradientTypography>

                <Currency onCurrencyChanged={onCurrencyChanged} />
                <div className={classes.margin} />
                <SingleSlider name="Первоначальная сумма" min={10000} max={10000000} step={5000} currency={currency}
                    value={investmentSum} onChanged={onInvestmentSumChanged} />
                <div className={classes.margin} />
                <SingleSlider name="Ежемесячные пополнения" min={100} max={100000} step={100} currency={currency}
                    value={monthlyPayment} onChanged={onMonthlyPaymentChanged} />
                <div className={classes.margin} />
                <SingleSliderDuration name="На срок" min={1} max={60} step={1} currency="месяцев" value={period}
                    onChanged={onPeriodChanged} />
            </div>
    );
}

export default CalcSlider;