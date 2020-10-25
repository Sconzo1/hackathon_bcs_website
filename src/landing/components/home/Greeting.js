import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Hidden, isWidthUp, Typography, withStyles, withWidth, IconButton } from "@material-ui/core";
import classNames from "classnames";
import GradientTypography from "../../../shared/components/GradientTypography";
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import Image from "../../../images/guy_background.png";


const styles = (theme) => ({
    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "center bottom"
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
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    }
});

const Greeting = ({ classes, width }) => {

    return (
        <div className="lg-mg-top lg-mg-bottom" style={{ backgroundColor: "#FFFFFF" }}>
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
                        <div>
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
