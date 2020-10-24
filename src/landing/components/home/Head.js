import React, {Fragment} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Box, Button, Divider, Grid, Hidden, isWidthUp, Typography, withStyles, withWidth,} from "@material-ui/core";
import Background from './images/school.jpg';
import Card from "@material-ui/core/Card";

const styles = (theme) => ({
    extraLargeButtonLabel: {
        fontSize: theme.typography.body1.fontSize,
        [theme.breakpoints.up("sm")]: {
            fontSize: theme.typography.h6.fontSize,
        },
    },
    extraLargeButton: {
        marginTop: theme.spacing(4),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        [theme.breakpoints.up("lg")]: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
    },
    card: {
        boxShadow: theme.shadows[4],
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("xs")]: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: theme.spacing(5.5),
            paddingBottom: theme.spacing(5.5),
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.up("lg")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
        },
        [theme.breakpoints.down("lg")]: {
            width: "auto",
        }
    },
    bgImage: {
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
    },
    wrapper: {
        position: "relative",
        paddingBottom: theme.spacing(28),
        background: `-webkit-linear-gradient(45deg, ${theme.palette.startGradientColor}, ${theme.palette.endGradientColor} 100%)`,
        [theme.breakpoints.down("xs")]: {
            paddingBottom: theme.spacing(20),
        },
    },
    container: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(12),
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(9),
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: theme.spacing(3),
        },
    },
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    },
    boxLabels: {
        color: theme.palette.common.white,
        textShadow: "1px 1px 2px black",
        textTransform: "uppercase",
        [theme.breakpoints.down("xs")]: {
            color: theme.palette.common.black,
            textShadow: "none",
        },
    },
    extraLargeLabel: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: "center",
        fontWeight: "bold",
        [theme.breakpoints.down("xs")]: {
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(4),
        },
    },
    largeLabel: {
        fontFamily: "'Roboto'",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
        textAlign: "center"
    },
    label: {
        marginTop: theme.spacing(5),
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            fontStyle: "italic"
        },
    },
    brandText: {
        fontFamily: "'Baloo Bhaijaan', cursive",
        fontWeight: 400
    },
    primaryLightTypography: {
        color: theme.palette.primary.light
    },
    secondaryLightTypography: {
        color: theme.palette.secondary.light
    },
});

const Head = ({classes, width, refFooter}) => {

    const handleClick = () => {
        refFooter.current.scrollIntoView({behavior: 'smooth', block: 'center'});
    };

    return (
        <Fragment>
            <div className={classNames(classes.bgImage)} id="top-anchor">
                <div className={classNames("lg-p-top", classes.wrapper)}>
                    <div className={classNames("container-fluid", classes.container)}>
                        <Box display="flex"
                             justifyContent="center"
                             className="row"
                             data-aos-delay="200"
                             data-aos="zoom-in">
                            <Hidden xsDown>
                                <div className={classNames(classes.containerFix, "container")}>
                                    <Grid
                                        container
                                        direction="column"
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <Grid item md className={classes.boxLabels}>
                                            <Box className={classes.extraLargeLabel}>
                                                <Typography
                                                    variant={isWidthUp("lg", width) ? "h3" : "h5"}
                                                    className={classes.brandText}
                                                    display="inline"
                                                    classes={{root: classes.primaryLightTypography}}
                                                >
                                                    next
                                                </Typography>
                                                <Typography
                                                    variant={isWidthUp("lg", width) ? "h3" : "h5"}
                                                    className={classes.brandText}
                                                    display="inline"
                                                    classes={{root: classes.secondaryLightTypography}}
                                                >
                                                    education
                                                </Typography>
                                            </Box>
                                            <Box className={classes.largeLabel}>
                                                <Typography
                                                    variant={isWidthUp("lg", width) ? "h2" : "h3"}
                                                >
                                                    Онлайн-обучение учеников
                                                </Typography>
                                            </Box>
                                            <Box className={classes.label}>
                                                <Typography
                                                    variant={isWidthUp("lg", width) ? "h5" : "h6"}
                                                >
                                                    Мы не боимся идти впереди
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.extraLargeButton}
                                            classes={{label: classes.extraLargeButtonLabel}}
                                            onClick={handleClick}
                                        >
                                            Присоединиться
                                        </Button>
                                    </Grid>
                                </div>
                            </Hidden>
                            <Hidden smUp>
                                <Card
                                    className={classes.card}>
                                    <Grid
                                        container
                                        direction="column"
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <Box className={classes.boxLabels}>
                                            <Box className={classes.extraLargeLabel}>
                                                <Typography
                                                    variant={isWidthUp("lg", width) ? "h3" : "h5"}
                                                    className={classes.brandText}
                                                    display="inline"
                                                    color="primary"
                                                >
                                                    next
                                                </Typography>
                                                <Typography
                                                    variant={isWidthUp("lg", width) ? "h3" : "h5"}
                                                    className={classes.brandText}
                                                    display="inline"
                                                    color="secondary"
                                                >
                                                    education
                                                </Typography>
                                            </Box>
                                            <Box className={classes.largeLabel}>
                                                <Typography
                                                    variant={isWidthUp("lg", width) ? "h2" : "h3"}
                                                >
                                                    Онлайн-обучение учеников
                                                </Typography>
                                            </Box>
                                            <Divider variant="middle"/>
                                            <Box className={classes.label}>
                                                <Typography
                                                    variant={isWidthUp("lg", width) ? "h5" : "h6"}
                                                >
                                                    Мы не боимся идти впереди
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.extraLargeButton}
                                            classes={{label: classes.extraLargeButtonLabel}}
                                            onClick={handleClick}
                                        >
                                            Присоединиться
                                        </Button>
                                    </Grid>
                                </Card>
                            </Hidden>
                        </Box>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

Head.propTypes = {
    classes: PropTypes.object,
    width: PropTypes.string,
    refFooter: PropTypes.object.isRequired
};

export default withWidth()(
    withStyles(styles, {withTheme: true})(Head)
);
