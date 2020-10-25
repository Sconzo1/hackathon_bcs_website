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

const Greeting = ({ classes, width }) => {

    return (
        <div style={{ backgroundColor: "#FFFFFF" }}>
            <Box display="flex" justifyContent="space-between"
                className={classNames(classes.containerFix, "container")}>
                <Grid container spacing={6}>
                    <Grid item xl={1} />
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
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid item>
                                    <GradientTypography variant="h3" >
                                        Персональный брокер для самых амбициозных
                                    </GradientTypography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" color="textSecondary" style={{ fontWeight: 300 }}>
                                        Попробуй себя в роли инвестора и реализуй свои мечты
                                    </Typography>
                                </Grid>
                                <Grid item container alignItems="center">
                                    <Grid item>
                                        <IconButton
                                            className={classes.infoIcon}>
                                            <PlayCircleFilledWhiteRoundedIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5" color="textSecondary" style={{ fontWeight: 400, marginLeft: 24, marginTop: 40}}>
                                            Видео о нас
                                    </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </div>
                    </Grid>
                    <Hidden smDown>
                        <Grid item md={6}
                            data-aos="fade-right"
                            className={classes.imageContainer}
                        >
                            <img className={classes.image} src={Image} alt="" />
                        </Grid>
                    </Hidden>
                    <Grid item xl={1} />
                </Grid>
            </Box>
        </div>
    );
}

Greeting.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles, { withTheme: true })(Greeting)
);
