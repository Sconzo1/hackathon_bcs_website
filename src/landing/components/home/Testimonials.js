import React from "react";
import PropTypes from "prop-types";
import {Box, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import Slider from 'infinite-react-carousel';
import TestimonialCard from "./cards/TestimonialCard";

const styles = (theme) => ({
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    },
    subLabel: {
        fontFamily: "'Comfortaa'",
        fontWeight: 700,
        textTransform: "uppercase",
    },
});


const Testimonials = ({classes, width}) => {

    const reviews = [
        {
            image: import("./images/school1.jpg"),
            name: "Школа №11",
            job: "Кемерово",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ipsam laboriosam nemo non saepe! Commodi cum dolores, ea eligendi harum laboriosam, laborum molestiae nam nobis numquam officiis provident quaerat quod suscipit tempora. A accusantium alias aliquam aliquid aut blanditiis consequuntur dicta, dolor error eum expedita fugiat libero natus nihil nisi numquam odit pariatur perferendis placeat possimus quaerat quisquam quo rem repellat, saepe unde veritatis. A accusamus cum et illo iure laudantium magnam rerum sapiente! Alias aperiam architecto dicta distinctio maiores maxime mollitia nam necessitatibus, numquam perferendis quibusdam saepe similique voluptatem! Aliquam consectetur, labore necessitatibus quae quibusdam tenetur. Amet ducimus ea facere harum id incidunt quisquam suscipit totam. Atque, autem deleniti dolore doloremque ea eligendi eos incidunt, laudantium molestias nam non nostrum pariatur perspiciatis quidem quo repudiandae sapiente! Architecto iure laudantium nostrum vero."
        },
        {
            image: import("./images/school2.jpg"),
            name: "Гимназия №43",
            job: "Москва",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ipsam laboriosam nemo non saepe! Commodi cum dolores, ea eligendi harum laboriosam, laborum molestiae nam nobis numquam officiis provident quaerat quod suscipit tempora. A accusantium alias aliquam aliquid aut blanditiis consequuntur dicta, dolor error eum"
        },
        {
            image: import("./images/school3.jpg"),
            name: "Школа №42",
            job: "Санкт-Петербург",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ipsam laboriosam nemo non saepe! Commodi cum dolores, ea eligendi harum laboriosam, laborum molestiae nam nobis numquam officiis provident quaerat quod suscipit tempora. A accusantium alias aliquam aliquid aut blanditiis consequuntur"
        }
    ];

    return (
        <div style={{backgroundColor: "#f5f7fd"}}>
            <div className="container-fluid lg-p-top lg-p-bottom">
                <Box display="flex" justifyContent="center" className="row">
                    <div className={classNames(classes.containerFix, "container")} data-aos="fade-up">
                        <Typography paragraph variant="h3" align="center" className="title-comfortaa">
                            Отзывы
                        </Typography>
                        <Typography paragraph variant="subtitle1" align="center"
                                    className={classes.subLabel}>
                            - Счастливые клиенты -
                        </Typography>
                        <Slider dots={isWidthUp("sm", width)} adaptiveHeight overScan={1}
                                arrows={isWidthUp("md", width)}>
                            {reviews.map((item, i) => (
                                <TestimonialCard item={item} key={i}/>
                            ))}
                        </Slider>
                    </div>
                </Box>
            </div>
        </div>
    );
}

Testimonials.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles)(Testimonials)
);
