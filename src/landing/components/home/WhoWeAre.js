import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Box, Grid, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import WaveBorder from "../../../shared/components/WaveBorder";


const styles = (theme) => ({
    waveBorder: {
        marginTop: "-6vw"
    },
    subLabel: {
        fontFamily: "'Comfortaa'",
        fontWeight: 700,
        textTransform: "uppercase",
        marginLeft: "auto",
        marginRight: "auto",
    },
    containerFix: {
        overflow: "hidden",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
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
    },
});

const WhoWeAre = ({classes, width}) => {
    return (
        <Fragment>
            <WaveBorder
                upperColor="transparent"
                lowerColor="#f5f7fd"
                className={classes.waveBorder}
                animationNegativeDelay={8}
            />
            <div style={{backgroundColor: "#f5f7fd", marginTop: "-4vw"}}>
                <div className="lg-p-top lg-p-bottom">
                    <Box display="flex" justifyContent="center">
                        <div className={classNames(classes.containerFix, "container")}>
                            <Grid container
                                  direction="column"
                                  justify="center"
                                  alignItems="center"
                                  data-aos="fade-up">
                                <Typography paragraph variant="h3" align="center" className="title-comfortaa">
                                    Кто мы
                                </Typography>
                                <Typography paragraph variant="h6" align="center"
                                            className={classes.subLabel}>
                                    {isWidthUp("md", width) ? "_ Путь нашей работы - веселье _" : "Путь нашей работы - веселье"}
                                </Typography>
                                <Grid item md={6}>
                                    <Typography variant="h6" align="center" color="textSecondary"
                                                style={{fontWeight: 400}}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis
                                        doloremque fugit laboriosam numquam obcaecati odio placeat quae, quas recusandae
                                        rem, saepe sit tenetur unde ut veritatis vitae voluptate. Sed.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Box>
                </div>
            </div>
        </Fragment>
    );
}

WhoWeAre.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles, {withTheme: true})(WhoWeAre)
);
