import React from "react";
import PropTypes from "prop-types";
import {Grid, isWidthDown, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import GradientTypography from "../../../shared/components/GradientTypography";
import Box from "@material-ui/core/Box";


const styles = (theme) => ({
    image: {
        width: "100%",
        marginBottom: theme.spacing(2)
    },
});

const TraderPortair = ({classes, width, Image, TraderName, TraderDescription}) => {

    return (
        <div className="lg-mg-top lg-mg-bottom" style={{backgroundColor: "#FFFFFF"}}>
            <Box className="container">
                <Grid container direction='row'>
                    <Grid item
                          container
                          direction='row'
                          justify="space-evenly"
                          alignItems="center"
                    >
                        <Grid item xs={6} md={2}>
                            <img className={classes.image} src={Image} alt=""/>
                        </Grid>
                        <Grid item md={7}
                              container
                              direction="column"
                              alignItems="center">
                            <Grid item>
                                <GradientTypography paragraph variant="h3" align="center">
                                    {TraderName}
                                </GradientTypography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" color="textSecondary" style={{fontWeight: 300}}
                                align={isWidthUp(width, "sm") ? "center" : "left"}>
                                    {TraderDescription}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

TraderPortair.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles, {withTheme: true})(TraderPortair)
);
