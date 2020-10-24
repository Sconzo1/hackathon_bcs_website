import React from "react";
import PropTypes from "prop-types";
import {Box, Grid, Hidden, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import Image from "./images/whatWeDo.jpg";
import BuildIcon from "@material-ui/icons/Build";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import MessageIcon from "@material-ui/icons/Message";
import {alphaHex} from "../../../shared/functions/alphaHex";


const styles = (theme) => ({
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    rightWrapper: {
        paddingBottom: theme.spacing(12),
        paddingTop: theme.spacing(12),
    },
    wrapperIcons: {
        paddingBottom: theme.spacing(4),
        paddingTop: theme.spacing(8),
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

const WhatWeDo = ({classes, width}) => {

    const pros = [
        {
            title: "Дело #1",
            text:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
            icon: <BuildIcon/>
        },
        {
            title: "Дело #2",
            text:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
            icon: <CalendarTodayIcon/>
        },
        {
            title: "Дело #3",
            text:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
            icon: <MessageIcon/>
        },
    ];

    return (
        <div style={{backgroundColor: "#FFFFFF"}}>
            <Box display="flex" justifyContent="space-between"
                 className={classNames(classes.containerFix, "container")}>
                <Grid container spacing={6}>
                    <Hidden smDown>
                        <Grid item md={6}
                              data-aos="fade-right">
                            <img className={classes.image} src={Image} alt=""/>
                        </Grid>
                    </Hidden>
                    <Grid item
                          container
                          xs={12} md={5}
                          data-aos={
                              isWidthUp("md", width) ? "fade-left" : "zoom-in"
                          }
                    >
                        <div className={classNames(classes.rightWrapper)}>
                            <Grid
                                container
                                direction="column"
                                justify="space-between"
                                alignItems="flex-start"
                            >
                                <Typography paragraph variant="h3" className="title-comfortaa">
                                    Что мы делаем
                                </Typography>
                                <Typography variant="h6">
                                    Мы разрабатываем удобные вещи для великих дел
                                </Typography>
                                <div className={classNames(classes.wrapperIcons, "container-fluid")}
                                     style={{paddingLeft: 0, paddingRight: 0}}>
                                    {pros.map(({title, text, icon}, i) => (
                                        <Grid item
                                              container
                                              direction="row"
                                              data-aos="zoom-in-up"
                                              justify="flex-start"
                                              alignItems="center"
                                              spacing={8}
                                              key={i}>
                                            <Grid item xs={1} md={1}>
                                                <Box className={classes.iconWrapper}>
                                                    {icon}
                                                </Box>
                                            </Grid>
                                            <Grid item xs={9} md={10}>
                                                <Typography variant="h6" color="textPrimary">
                                                    {title}
                                                </Typography>
                                                <Typography variant="body1" color="textSecondary">
                                                    {text}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

WhatWeDo.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles, {withTheme: true})(WhatWeDo)
);
