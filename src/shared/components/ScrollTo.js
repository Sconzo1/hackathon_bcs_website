import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import React from "react";
import PropTypes from "prop-types";
import withWidth from "@material-ui/core/withWidth";

const ScrollTo = ({children, anchorRef, stopThreshold}) => {

    const triggerIn = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const triggerOut = useScrollTrigger({
        disableHysteresis: true,
        threshold: stopThreshold,
    });

    const handleClick = () => {
        anchorRef.current.scrollIntoView({behavior: 'smooth', block: 'center'});
    };

    return (
        <Zoom in={!triggerOut ? triggerIn : false}>
            <div onClick={handleClick} role="presentation" style={{
                position: 'fixed',
                bottom: 16,
                right: 16,
            }}>
                {children}
            </div>
        </Zoom>
    );
};
ScrollTo.propTypes = {
    children: PropTypes.element.isRequired,
    anchorRef: PropTypes.object.isRequired,
    stopThreshold: PropTypes.number.isRequired
};

export default withWidth()(ScrollTo);