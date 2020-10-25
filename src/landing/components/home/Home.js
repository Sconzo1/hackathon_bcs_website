import React, {Fragment, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import InvestmentsLife from "./InvestmentsLife";
import InvestStart from "./InvestStart";
import withWidth from "@material-ui/core/withWidth";
import Greeting from "./Greeting";
import TraderPortair from "./TraderPortair";
import Calculator from "./calculator/Calculator";
import InvestorRanks from './InvestorRanks';
import Offers from "./Offers";
import ImageBeginner from "./images/imageBeginner.png";
import ImageIntermediate from "./images/imageIntermediate.png";
import ImageAdvanced from "./images/imageAdvanced.png";
import traders from './Traders/Traders'
import OurEfficiency from "./OurEfficiency";
import Pricing from "./Pricing";


const Home = ({selectHome, refFooter, width}) => {
    const [trader, setTrader] = useState(traders[0])


    const onTraderChanged = (t) =>{
        setTrader(t)
        
    }

    const refTop = useRef();

    useEffect(() => {
        selectHome();
    }, [selectHome]);

    return (
        <Fragment>
            <div ref={refTop}/>
            <Greeting/>
            <InvestmentsLife/>
            <OurEfficiency/>
            <InvestorRanks onTraderChanged={onTraderChanged}/>
            <Calculator/>
            <TraderPortair
                Image={trader.IMAGE}
                TraderName={trader.NAME}
                TraderDescription={trader.DESCRIPTION}/>
            <Offers/>
            <Pricing/>
            <InvestStart/>
        </Fragment>
    );
}

Home.propTypes = {
    selectHome: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired,
};

export default withWidth()(Home);
