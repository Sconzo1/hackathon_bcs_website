import React, {Fragment, useEffect, useRef, useState} from "react";
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
import ImageBeginner from "./images/imageBeginner.png";
import ImageIntermediate from "./images/imageIntermediate.png";
import ImageAdvanced from "./images/imageAdvanced.png";
import traders from './Traders/Traders'


const Home = ({selectHome, refFooter, width}) => {
    const [trader, setTrader] = useState(traders[0])
    

    const onTraderChanged = (t) =>{
        setTrader(t)
        
    }

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
            <InvestorRanks onTraderChanged = {onTraderChanged}/>
            <Calculator/>
            <TraderPortair
                Image={trader.IMAGE}
                TraderName={trader.NAME}
                TraderDescription={trader.DESCRIPTION}/>
            <Offers/>
            <InvestStart/>
        </Fragment>
    );
}

Home.propTypes = {
    selectHome: PropTypes.func.isRequired,
    refFooter: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(Home);
