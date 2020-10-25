import React, { useState } from 'react';
import CalcSlider from './Sliders/CalcSlider'
import Evaluation from './Predictions/Evaluation'

import { Grid } from "@material-ui/core";


function Calculator() {
    const [currency, setCurrency] = useState("₽")
    const [investmentSum, setInvestmentSum] = useState(10000)
    const [monthlyPayment, setMonthlyPayment] = useState(100)
    const [period, setPeriod] = useState(1)
    const [evaluatedProfileCost, setEvaluatedProfileCost] = useState(10058.33)
    const [evaluatedIncome, setEvaluatedIncome] = useState(58.33)
    const [evaluatedProfitability, setEvaluatedProfitability] = useState(0.58)
    const [rate, setRate] = useState(0.07)

    const onCurrencyChanged = (cur) => {
        setCurrency(cur)
        //calculate()
    }
    const onInvestmentSumChanged = (sum) => {
        setInvestmentSum(sum)
        //calculate()
    }
    const onMonthlyPaymentChanged = (payment) => {
        setMonthlyPayment(payment)
        //calculate()
    }
    const onPeriodChanged = (period) => {
        setPeriod(period)
        //calculate()
    }

    const onRateChanged = (rate) => {
        setRate(rate)
        //calculate()
    }


    function calculate() {
        let rate = 0.07

        let futureSum = investmentSum * Math.pow(1 + rate / 12, period)
        setEvaluatedProfileCost(futureSum.toFixed(2))
        let delta = futureSum - investmentSum
        setEvaluatedIncome(delta.toFixed(2))
        let persentage = delta / investmentSum * 100
        setEvaluatedProfitability(persentage.toFixed(2))


    }


    return (
        <div className="lg-mg-top">
            <Grid container justify="center">
                <Grid item md={1}/>
                <Grid item md={3}>
                    <CalcSlider
                        currency={currency}
                        investmentSum={investmentSum}
                        monthlyPayment={monthlyPayment}
                        period={period}
                        onCurrencyChanged={onCurrencyChanged}
                        onInvestmentSumChanged={onInvestmentSumChanged}
                        onMonthlyPaymentChanged={onMonthlyPaymentChanged}
                        onPeriodChanged={onPeriodChanged}
                    />
                </Grid>
                <Grid item md>
                    <Evaluation
                        currency={currency}
                        investmentSum={investmentSum}
                        monthlyPayment={monthlyPayment}
                        period={period}
                        rate={rate}
                    />
                </Grid>
                <Grid item md={1}/>
            </Grid>

        </div>

    );
}

export default Calculator;
