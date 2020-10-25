import React from "react";
import PropTypes from "prop-types";
import {Box, ButtonBase, Grid, Paper, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import {alphaHex} from "../../../shared/functions/alphaHex";
import GradientTypography from "../../../shared/components/GradientTypography";
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';


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
        paddingTop: theme.spacing(0),
    
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
        marginTop: "90px",
        marginRight: "0px", 
        position: "absolute",
        zIndex: -1, 
        width: "100%",
        height: "250px",
        background: "linear-gradient(303.91deg, #8A8AF4 7.57%, #3984DD 94.39%)" ,
        right: 0,
        top: 0
    }
});


function InvestorImage (classes, level, img){
    return(
    <div className={classNames(classes.rightWrapper)}>
                            <Grid item
                                container
                                style = {{width: "auto", marginLeft: "0px"} }
                            >
                                <Paper elevation={24}  style = {{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px", width: "auto", height:"320px"}}>
                                <Avatar src = {img} className={classes.large} />
                
                                <Typography variant="h6"
                                            color="textSecondary"
                                            style={{fontWeight: 400,}}>
                                    {level}
                                </Typography>
                            

                                </Paper>
                            </Grid>
                        </div>)
}

const BCSFacilities = ({classes, width, img}) => {

    return (
        <Grid container spacing={16}>
        <div style={{backgroundColor: "#FFFFFF"}}>
            <Box display="flex" justifyContent="space-between"
                 className={classNames(classes.containerFix, "container")}>
                     
                <Grid container style={{width: "1400px"}}>
                    
                    <Grid item
                          container
                          data-aos={
                              isWidthUp("md", width) ? "fade-left" : "zoom-in"
                          }
                          style = {{width:"40%", marginRight: "40px"}}
                    >
                        <div className={classNames(classes.rightWrapper)}>
                        <Paper elevation={24}  style = {{position: "absolute", top: 0, left: 0, zIndex: 1, margin: "20px", width: "320px", height:"360px"}}></Paper>
                        <Paper elevation={24}  style = {{position: "absolute", top: 0, left: 60, zIndex: 2, margin: "20px", width: "320px", height:"360px"}}></Paper>
                        <Paper elevation={24}  style = {{position: "absolute", top: 0, left: 120, zIndex: 3, margin: "20px", width: "320px", height:"360px"}}></Paper>
                        </div>
                    </Grid>
                    
                    <Grid item
                          container
                          data-aos={
                              isWidthUp("md", width) ? "fade-left" : "zoom-in"
                          }
                          style = {{width:"700px", marginRight: "40px"}}
                    >
                        <div className={classNames(classes.rightWrapper)}>
                            <Grid
                                container
                                direction="column"
                                justify="space-between"
                                alignItems="flex-start"
                            >
                                <GradientTypography variant="h3">
                                Опробуйте все возможности БКС-Trade
                                </GradientTypography>
                                <Typography variant="h6"
                                            color="textSecondary"
                                            style={{fontWeight: 400, marginTop: "24px"}}>
                                    Are you one of the thousands of Iphone owners who has no idea.
                                </Typography>
                                <Typography variant="h6"
                                            color="textSecondary"
                                            style={{fontWeight: 400}}>
                                    <CheckIcon/> We build thoughtful identities
                                </Typography>
                                <Typography variant="h6"
                                            color="textSecondary"
                                            style={{fontWeight: 400}}>
                                    <CheckIcon/> Experiences to elevate and empower organizations.
                                </Typography>
                                <Typography variant="h6"
                                            color="textSecondary"
                                            style={{fontWeight: 400}}>
                                    <CheckIcon/> We believe in the power of design.
                                </Typography>

                                <Typography variant="h6"
                                            color="textSecondary"
                                            style={{fontWeight: 400}}>
                                    <CheckIcon/> We thrive on building relationships and helping good.
                                </Typography>
                                
                                
                                
                            </Grid>
                        </div>
                    </Grid>

                    
                </Grid>
            </Box>
        </div>
        </Grid>
    );
}

BCSFacilities.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles, {withTheme: true})(BCSFacilities)
);