import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Typography, withStyles} from "@material-ui/core";
import {alphaHex} from "../../../../shared/functions/alphaHex";
import Box from "@material-ui/core/Box";


const styles = theme => ({
    iconWrapper: {
        borderRadius: theme.shape.borderRadius,
        textAlign: "center",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: theme.spacing(3),
        padding: theme.spacing(1.5),
        boxShadow: theme.shadows[1]
    },
});

const FeatureCard = ({classes, icon, color, title, text}) => {
    return (
        <Fragment>
            <Box
                className={classes.iconWrapper}
                style={{
                    color: color,
                    backgroundColor: alphaHex(color, 0.2)
                }}
            >
                {icon}
            </Box>
            <Typography variant="h6" paragraph>
                {title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
                {text}
            </Typography>
        </Fragment>
    );
}

FeatureCard.propTypes = {
    classes: PropTypes.object.isRequired,
    icon: PropTypes.element.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default withStyles(styles, {withTheme: true})(FeatureCard);
