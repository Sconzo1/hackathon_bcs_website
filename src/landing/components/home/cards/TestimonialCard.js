import React, {useCallback, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Avatar, Grid, Typography, withStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card";

const styles = theme => ({
    card: {
        boxShadow: theme.shadows[4],
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        [theme.breakpoints.up("xs")]: {
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(0),
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            boxShadow: theme.shadows[0],
        },
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: theme.spacing(5.5),
            width: "58%",
            paddingBottom: theme.spacing(5.5),
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.up("lg")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
        },
        [theme.breakpoints.up("lg")]: {}
    },
    avatar: {
        width: theme.spacing(16),
        height: theme.spacing(16),
        marginBottom: theme.spacing(4)
    },
});

const TestimonialCard = ({classes, item}) => {
    const {image, name, job, text} = item

    const [src, setSrc] = useState("");

    const dynLoadImage = useCallback(() => {
        if (image) {
            image.then(mod => {
                setSrc(mod.default);
            });
        }
    }, [image, setSrc]);

    useEffect(dynLoadImage, []);
    return (
        <Grid container
              direction="column"
              justify="space-between"
              alignItems="center"
              data-aos="fade-up">
            <Card
                className={classes.card}>
                <Grid container
                      item
                      direction="column"
                      justify="space-between"
                      alignItems="center">
                    <Avatar src={src} alt={name} className={classes.avatar}/>
                    <Typography gutterBottom variant="h6" align="center">
                        {name}
                    </Typography>
                    <Typography paragraph variant="subtitle1" align="center" color="textSecondary">
                        {job}
                    </Typography>
                    <Typography variant="body1" align="center">
                        {text}
                    </Typography>
                </Grid>
            </Card>
        </Grid>
    );
}

TestimonialCard.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(TestimonialCard);
