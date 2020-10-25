import React from "react";
import PropTypes from "prop-types";
import {Grid, Typography, withStyles, withWidth} from "@material-ui/core";
import GradientTypography from "../../../shared/components/GradientTypography";


const styles = (theme) => ({
    image: {},
});

const TraderPortair = ({classes, width, Image, TraderName, TraderDescription}) => {

    return (
        <div className="lg-mg-top lg-mg-bottom" style={{backgroundColor: "#FFFFFF"}}>
            <Grid container direction='row'>
                <Grid item xl={1}/>
                <Grid item
                      container
                      direction='row'
                      justify="space-evenly"
                      alignItems="center"
                >
                    <Grid item l={2} md={1} sm={false}/>
                    <Grid item md={3}>
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
                            <Typography variant="h6" color="textSecondary" style={{fontWeight: 300}}>
                                {TraderDescription}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item l={2} md={1} sm={false}/>
                </Grid>
                <Grid item xl={1}/>

            </Grid>

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
