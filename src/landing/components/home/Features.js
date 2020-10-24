import React from "react";
import PropTypes from "prop-types";
import {Grid, isWidthUp, Typography, withWidth} from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import MessageIcon from "@material-ui/icons/Message";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./cards/FeatureCard";

const iconSize = 30;

const features = [
    {
        color: "#00C853",
        title: "Плюс 1",
        text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
        icon: <BuildIcon style={{fontSize: iconSize}}/>,
        mdDelay: "0",
        smDelay: "0"
    },
    {
        color: "#6200EA",
        title: "Плюс 2",
        text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
        icon: <CalendarTodayIcon style={{fontSize: iconSize}}/>,
        mdDelay: "200",
        smDelay: "200"
    },
    {
        color: "#0091EA",
        title: "Плюс 3",
        text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
        icon: <MessageIcon style={{fontSize: iconSize}}/>,
        mdDelay: "400",
        smDelay: "0"
    },
    {
        color: "#d50000",
        title: "Плюс 4",
        text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
        icon: <ComputerIcon style={{fontSize: iconSize}}/>,
        mdDelay: "0",
        smDelay: "200"
    },
    {
        color: "#DD2C00",
        title: "Плюс 5",
        text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
        icon: <BarChartIcon style={{fontSize: iconSize}}/>,
        mdDelay: "200",
        smDelay: "0"
    },
    {
        color: "#64DD17",
        title: "Плюс 6",
        text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
        icon: <HeadsetMicIcon style={{fontSize: iconSize}}/>,
        mdDelay: "400",
        smDelay: "200"
    },
];

const Features = ({width}) => {
    return (
        <div style={{backgroundColor: "#FFFFFF"}}>
            <div className="container-fluid lg-p-top lg-p-bottom">
                <Typography variant="h3" align="center" className="lg-mg-bottom title-comfortaa"
                            data-aos="fade-up">
                    Преимущества
                </Typography>
                <div className="container-fluid">
                    <Grid container spacing={calculateSpacing(width)}>
                        {features.map(element => (
                            <Grid
                                item
                                xs={6}
                                md={4}
                                data-aos="zoom-in-up"
                                data-aos-delay={
                                    isWidthUp("md", width) ? element.mdDelay : element.smDelay
                                }
                                key={element.title}
                            >
                                <FeatureCard
                                    icon={element.icon}
                                    color={element.color}
                                    title={element.title}
                                    text={element.text}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

Features.propTypes = {
    width: PropTypes.string.isRequired
};

export default withWidth()(Features);
