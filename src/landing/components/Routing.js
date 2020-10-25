import React, {memo} from "react";
import PropTypes from "prop-types";
import {Switch} from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";


const Routing = ({selectHome, refFooter}) => {
    return (
        <Switch>
            <PropsRoute path="/" component={Home} selectHome={selectHome}
                        refFooter={refFooter}/>)
        </Switch>
    );
}

Routing.propTypes = {
    selectHome: PropTypes.func.isRequired,
    refFooter: PropTypes.object.isRequired
};

export default memo(Routing);
