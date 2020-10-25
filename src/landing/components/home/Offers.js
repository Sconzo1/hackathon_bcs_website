import React from "react";
import {Box, Grid, isWidthUp, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import StockCard from "./cards/StockCard";
import TraderBeginner from "./images/TraderBeginner.png";


const styles = (theme) => ({
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    },
});

const Offers = ({classes, width}) => {

    const cards = [
        {
            name: "Защищенные инвестиции сбербанк",
            timePeriod: "3 месяца",
            minSum: "15000 руб.",
            yearPercent: "9%",
            image: {TraderBeginner},
            color: "#f22e42"
        },
        {
            name: "Защищенные инвестиции сбербанк",
            timePeriod: "3 месяца",
            minSum: "15000 руб.",
            yearPercent: "9%",
            image: {TraderBeginner},
            color: "#e29c34"
        },
        {
            name: "Защищенные инвестиции сбербанк",
            timePeriod: "3 месяца",
            minSum: "15000 руб.",
            yearPercent: "9%",
            image: {TraderBeginner},
            color: "#b72ef2"
        },
    ]

    return (
        <div className="lg-mg-top lg-mg-bottom" style={{backgroundColor: "#FFFFFF"}}>
            <Box className={classNames(classes.containerFix, "container")}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                <Grid
                    item
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    md={10}
                >
                    {cards.map((element, index) => (
                            <Grid item md={4}
                                  key={element.name}
                                  data-aos={
                                      isWidthUp("md", width) ? "fade-left" : "zoom-in"
                                  }>
                                <StockCard Name={element.name}
                                           TimePeriod={element.timePeriod}
                                           MinSum={element.minSum}
                                           YearPercent={element.yearPercent}
                                           Image={TraderBeginner}
                                           Color={element.color}/>
                            </Grid>
                        )
                    )}
                </Grid>
                </Grid>
            </Box>
        </div>
    );
}

Offers.propTypes = {};

export default withWidth()(
    withStyles(styles, {withTheme: true})(Offers)
);
