import React from "react";
import PropTypes from "prop-types";
import {Box, ButtonBase, Grid, Hidden, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import Image from "./images/investmentsLife.jpg";
import GradientTypography from "../../../shared/components/GradientTypography";
import Card from "@material-ui/core/Card";


const styles = (theme) => ({
    button: {
        marginTop: theme.spacing(4)
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    rightWrapper: {
        paddingBottom: theme.spacing(12),
        paddingTop: theme.spacing(12),
    },
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    },
    card: {
        float: "left",
        position: "absolute",
        zIndex: 10,
        background: "linear-gradient(303.91deg, #8A8AF4 7.57%, #3984DD 94.39%)",
        padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
        color: "#FFFFFF",
        fontWeight: "bold",
    }
});

const InvestmentsLife = ({classes, width}) => {

    return (
        <div style={{backgroundColor: "#FFFFFF"}}>
            <Box display="flex" justifyContent="space-between"
                 className={classNames(classes.containerFix, "container")}>
                <Grid container spacing={6}>
                    <Hidden smDown>
                        <Grid item md={6}
                              data-aos="fade-right">
                            <Card variant="outlined" className={classes.card}>
                                <Typography paragraph variant="body1"
                                            color="initial"
                                            style={{fontWeight: 300}}>
                                    НАША ИСТОРИЯ
                                </Typography>
                                <Typography variant="h5"
                                            color="initial"
                                            style={{fontWeight: "bold"}}>
                                    Узнайте<br/>больше<br/>о нашей<br/>компании.
                                </Typography>
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
                                <ButtonBase disableRipple className={classes.button}>
                                    <GradientTypography variant="h6">
                                        ⯈ Узнать больше
                                    </GradientTypography>
                                </ButtonBase>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

InvestmentsLife.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles, {withTheme: true})(InvestmentsLife)
);
