import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Hidden, isWidthUp, Typography, withStyles, withWidth, IconButton } from "@material-ui/core";
import classNames from "classnames";
import { alphaHex } from "../../../shared/functions/alphaHex";
import GradientTypography from "../../../shared/components/GradientTypography";
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import Image from "../../../images/guy_background.png";


const styles = (theme) => ({
    imageContainer: {
    },
    image: {
    },
    rightWrapper: {
        paddingBottom: theme.spacing(12),
        paddingTop: theme.spacing(12),
    },
    wrapperIcons: {
        paddingBottom: theme.spacing(4),
        paddingTop: theme.spacing(8),
    },
    infoIcon: {
        padding: '12px',
        marginTop: '40px',
        color: `white`,
        background: "linear-gradient(90deg, #8A8AF4 0%, #3984DD 100%)",
        "&:hover": {
            background: `linear-gradient(90deg, #8A8AF4 100%, #3984DD 0%) !important`
        }
    },
    container: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(12),
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(9),
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(6),
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(3),
        },
    },
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    },
    iconWrapper: {
        color: theme.palette.secondary.main,
        backgroundColor: alphaHex(theme.palette.secondary.main, 0.2),
        borderRadius: theme.shape.borderRadius,
        textAlign: "center",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(1.3),
        boxShadow: theme.shadows[1]
    }
});

const TraderPortair = ({ classes, width, Image, TraderName, TraderDescription }) => {

    return (
        <div style={{ backgroundColor: "#FFFFFF" }}>

            <Grid container direction='row'>

                <Grid item xl={1} />
                <Grid item
                    container
                    direction='row'
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Grid item l={2} md={1} sm={false}/>
                    <Grid item md={3}>
                        <img className={classes.image} src={Image}></img>
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
                            <Typography variant="h6" color="textSecondary" style={{ fontWeight: 300 }}>
                                {TraderDescription}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item l={2} md={1} sm={false}/>
                </Grid>
                <Grid item xl={1} />

            </Grid>

        </div>
    );
}

TraderPortair.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles, { withTheme: true })(TraderPortair)
);
