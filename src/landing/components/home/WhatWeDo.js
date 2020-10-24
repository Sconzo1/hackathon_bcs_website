import React from "react";
import PropTypes from "prop-types";
import {Box, Grid, Hidden, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import Image from "./images/whatWeDo.jpg";
import {alphaHex} from "../../../shared/functions/alphaHex";
import GradientTypography from "../../../shared/components/GradientTypography";
import Card from "@material-ui/core/Card";


const styles = (theme) => ({
    imageContainer: {
    },
        image: {
            width: "100%",
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

    return (
        <div style={{backgroundColor: "#FFFFFF"}}>
            <Box display="flex" justifyContent="space-between"
                 className={classNames(classes.containerFix, "container")}>
                <Grid container spacing={6}>
                    <Hidden smDown>
                        <Grid item md={6}
                              data-aos="fade-right"
                              className={classes.imageContainer}>
                            <Card variant="outlined" style={{
                                float: "left",
                                position: "absolute",
                                zIndex: 10,
                                backgroundColor: "#92AD40",
                                padding: 5,
                                color: "#FFFFFF",
                                fontWeight: "bold",
                            }}>
                                adsasdasda
                            </Card>
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
                                <GradientTypography variant="h3">
                                    Инвестиции как смысл жизни
                                </GradientTypography>
                                <Typography variant="h6"
                                            color="textSecondary"
                                            style={{fontWeight: 400}}>
                                    Инвестиции - это способ обеспечить себе стабильное будущее. Правильное
                                    инвестирование позволяет создавать эффективные накопления в догосрочной
                                    перспективе
                                </Typography>

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
