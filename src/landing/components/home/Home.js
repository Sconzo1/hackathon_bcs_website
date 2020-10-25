import React, {Fragment, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import Heads from "./Head";
import Features from "./Features";
import Pricing from "./Pricing";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import OurEfficiency from "./OurEfficiency";
import Testimonials from "./Testimonials";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTo from "../../../shared/components/ScrollTo"
import {isWidthDown} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Calculator from "./calculator/Calculator"
import InvestorRanks from './InvestorRanks'


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
            <Heads refFooter={refFooter}/>
            
            <WhoWeAre/>
            
            <WhatWeDo/>
            <InvestorRanks/>

            <Calculator />
            {/*<OurEfficiency/>*/}
            {/*<Features/>*/}
            {/*<Testimonials/>*/}
            {/*<Pricing/>*/}
            {/*<ScrollTo anchorRef={refTop} stopThreshold={getStopThreshold()}>*/}
            {/*    <Fab color="secondary" size="medium" aria-label="Scroll to top" style={{zIndex: 2}}>*/}
            {/*        <KeyboardArrowUpIcon/>*/}
            {/*    </Fab>*/}
            {/*</ScrollTo>*/}
        </Fragment>
    );
}

Home.propTypes = {
    selectHome: PropTypes.func.isRequired,
    refFooter: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(Home);
