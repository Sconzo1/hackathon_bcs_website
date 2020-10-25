import React from "react";
import PropTypes from "prop-types";
import {Box, ButtonBase, Grid, isWidthUp, Paper, Typography, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import {alphaHex} from "../../../shared/functions/alphaHex";
import GradientTypography from "../../../shared/components/GradientTypography";
import Avatar from '@material-ui/core/Avatar';
import ImageBeginner from "./images/imageBeginner.png";
import ImageIntermediate from "./images/imageIntermediate.png";
import ImageAdvanced from "./images/imageAdvanced.png";


const styles = (theme) => ({
    imageContainer: {},
    button: {
        marginTop: theme.spacing(4)
    },
    image: {
        width: "100%",
    },
    rightWrapper: {
        zIndex: 1,
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
    },
    card: {
        float: "left",
        position: "absolute",
        zIndex: 10,
        background: "linear-gradient(303.91deg, #8A8AF4 7.57%, #3984DD 94.39%)",
        padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: "60px",
        marginLeft: "60px",
        marginRight: "60px",
        marginBottom: "24px"
    },
    div: {
        borderRadius: "10px",
        marginTop: "60px",
        position: "absolute",
        zIndex: -1,
        width: "980px",
        height: "250px",
        background: "linear-gradient(303.91deg, #8A8AF4 7.57%, #3984DD 94.39%)",
        right: 0,
        top: 0
    }
});


function InvestorImage(classes, level, img, onTraderChanged) {
    return (
        <div className={classNames(classes.rightWrapper)}>
            <Grid item
                  container
                  style={{width: "auto", marginLeft: "0px", marginRight: "15px"}}
            >
                <Paper elevation={24}
                       style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "24px"}} onClick={()=>
                        onTraderChanged(img, level)}>
                    <Avatar src={img} className={classes.large}/>

                    <Typography variant="h6"
                                color="textSecondary"
                                style={{fontWeight: 400}}>
                        {level}
                    </Typography>
                    <ButtonBase disableRipple className={classes.button}>
                        <GradientTypography variant="h6">
                            ⯈
                        </GradientTypography>
                    </ButtonBase>

                </Paper>
            </Grid>
        </div>)
}

const InvestorRanks = ({classes, width, onTraderChanged}) => {

    return (
        <div style={{backgroundColor: "#FFFFFF"}}>
            <Box display="flex" justifyContent="space-between"
                 className={classNames(classes.containerFix, "container")}>

                <Grid container spacing={7}>

                    <Grid item
                          container
                          data-aos={
                              isWidthUp("md", width) ? "fade-left" : "zoom-in"
                          }
                          style={{width: "400px", marginRoght: "50px"}}
                    >
                        <div className={classNames(classes.rightWrapper)}>
                            <Grid
                                container
                                direction="column"
                                justify="space-between"
                                alignItems="flex-start"
                            >
                                <GradientTypography variant="h3">
                                    Финансовые решения для каждого
                                </GradientTypography>
                                <Typography variant="h6"
                                            color="textSecondary"
                                            style={{fontWeight: 400}}>
                                    Выбирайте подходящий вам план и зарабатывайте на инвестициях
                                </Typography>
                                <ButtonBase disableRipple className={classes.button}>
                                    <GradientTypography variant="h6">
                                        ⯈
                                    </GradientTypography>
                                </ButtonBase>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                          xs={12} md={8}
                          data-aos={
                              isWidthUp("md", width) ? "fade-left" : "zoom-in"
                          }
                    >
                        <div className={classes.div}/>
                        {InvestorImage(classes, "Начинающий", ImageBeginner, onTraderChanged)}
                        {InvestorImage(classes, "Опытный", ImageIntermediate, onTraderChanged)}
                        {InvestorImage(classes, "Эксперт", ImageAdvanced, onTraderChanged)}


                    </Grid>


                </Grid>
            </Box>
        </div>
    );
}

InvestorRanks.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles, {withTheme: true})(InvestorRanks)
);