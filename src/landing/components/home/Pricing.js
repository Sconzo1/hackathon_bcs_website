import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Grid, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import PriceCard from "./cards/PriceCard";
import calculateSpacing from "./calculateSpacing";

const styles = theme => ({
    containerFix: {
        [theme.breakpoints.down("md")]: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6)
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        overflow: "hidden",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    cardWrapper: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 340
        }
    },
    cardWrapperHighlighted: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 360
        }
    }
});

const Pricing = ({width, classes}) => {
    return (
        <div className="lg-p-top" style={{backgroundColor: "#FFFFFF"}}>
            <Typography variant="h3" align="center" className="lg-mg-bottom title-comfortaa"
                        data-aos="fade-up">
                Ценовая политика
            </Typography>
            <div className={classNames("container-fluid", classes.containerFix)}>
                <Grid
                    container
                    spacing={calculateSpacing(width)}
                    justify="center"
                >
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        lg={3}
                        className={classes.cardWrapper}
                        data-aos={isWidthUp("md", width) ? "zoom-in-right" : "zoom-in-up"}
                        data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
                    >
                        <PriceCard
                            title="Старт"
                            pricing={
                                <span>
                  ₽1 499
                  <Typography display="inline"> / месяц</Typography>
                </span>
                            }
                            features={["Плюс 1", "Плюс 2", "Плюс 3"]}
                        />
                    </Grid>
                    <Grid
                        item
                        className={classes.cardWrapperHighlighted}
                        xs={12}
                        sm={4}
                        lg={4}
                        data-aos="zoom-in-up"
                        data-aos-delay="200"
                    >
                        <PriceCard
                            highlighted
                            title="Премиум"
                            pricing={
                                <span>
                  ₽2 999
                  <Typography display="inline"> / месяц</Typography>
                </span>
                            }
                            features={["Плюс 1", "Плюс 2", "Плюс 3"]}
                        />
                    </Grid>
                    <Grid
                        item
                        className={classes.cardWrapper}
                        xs={12}
                        sm={4}
                        lg={3}
                        data-aos={isWidthUp("md", width) ? "zoom-in-left" : "zoom-in-up"}
                        data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
                    >
                        <PriceCard
                            title="Профессиональный"
                            pricing={
                                <span>
                  ₽4 999
                  <Typography display="inline"> / месяц</Typography>
                </span>
                            }
                            features={["Плюс 1", "Плюс 2", "Плюс 3"]}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

Pricing.propTypes = {
    width: PropTypes.string.isRequired
};

export default withStyles(styles, {withTheme: true})(
    withWidth()(Pricing)
);
