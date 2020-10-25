import React, {Fragment, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import InvestmentsLife from "./InvestmentsLife";
import InvestStart from "./InvestStart";
import {isWidthDown} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Greeting from "./Greeting";
import TraderBeginner from './images/TraderBeginner.png';
import TraderPortair from "./TraderPortair";
import Calculator from "./calculator/Calculator";
import InvestorRanks from './InvestorRanks';
import Offers from "./Offers";


const Home = ({selectHome, refFooter, width}) => {
    const refTop = useRef();

    useEffect(() => {
        selectHome();
    }, [selectHome]);

    function getStopThreshold() {
        if (isWidthDown("xs", width)) {
            return 5400
        } else if (isWidthDown("sm", width)) {
            return 4700
        } else if (isWidthDown("md", width)) {
            return 4500
        } else {
            return 4450
        }
    }

    return (
        <Fragment>
            <div ref={refTop}/>
            <Greeting/>
            <InvestmentsLife/>
            <InvestStart/>
            <InvestorRanks/>
            <Calculator/>
            <TraderPortair
                Image={TraderBeginner}
                TraderName={'Начинающий инвестор'}
                TraderDescription={`Из-за неопытности и небольшого капитала вкладываются в небольшой круг 
                дешевых акций. Не имеют возможности или желания рисковать. Не знают тонкости основных 
                финансовых процессов, поэтому совершают много ошибок и подвержены панике при падении 
                стоимости акций, преобладающих в их портфеле.
                Следующие стратегии позволят достигнуть желаемого и избежать ошибок большинства новичков.`}/>
            <Offers/>
        </Fragment>
    );
}

Home.propTypes = {
    selectHome: PropTypes.func.isRequired,
    refFooter: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(Home);
