import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import format from "date-fns/format";
import classNames from "classnames";
import {Box, Card, Typography, withStyles} from "@material-ui/core";
import ruLocale from "date-fns/locale/ru"

const styles = theme => ({
    img: {
        width: "100%",
        height: "auto",
        marginBottom: 8
    },
    card: {
        boxShadow: theme.shadows[2]
    },
    noDecoration: {
        textDecoration: "none !important"
    },
    title: {
        transition: theme.transitions.create(["background-color"], {
            duration: theme.transitions.duration.complex,
            easing: theme.transitions.easing.easeInOut
        }),
        cursor: "pointer",
        color: theme.palette.secondary.main,
        "&:hover": {
            color: theme.palette.secondary.dark
        },
        "&:active": {
            color: theme.palette.primary.dark
        }
    },
    link: {
        transition: theme.transitions.create(["background-color"], {
            duration: theme.transitions.duration.complex,
            easing: theme.transitions.easing.easeInOut
        }),
        cursor: "pointer",
        color: theme.palette.secondary.main,
        "&:hover": {
            color: theme.palette.secondary.dark
        }
    },
    showFocus: {
        "&:focus span": {
            color: theme.palette.secondary.dark
        }
    }
});

const NewsCard = ({classes, url, importImage, date, title, snippet}) => {

    return (
        <Card className={classes.card}>
            {importImage && (
                <Link to={url}>
                    <img src={importImage} className={classes.img} alt=""/>
                </Link>
            )}
            <Box p={2}>
                <Typography variant="body2" color="textSecondary">
                    {format(new Date(date), "PP", {
                        awareOfUnicodeTokens: true,
                        locale: ruLocale
                    })}
                </Typography>
                <Link
                    to={url}
                    className={classNames(classes.noDecoration, classes.showFocus)}
                >
                    <Typography variant="h6">
                        <span className={classes.title}>{title}</span>
                    </Typography>
                </Link>
                <Typography variant="body1" color="textSecondary">
                    {snippet}
                    <Link to={url} className={classes.noDecoration} tabIndex={-1}>
                        <span className={classes.link}> Читать далее...</span>
                    </Link>
                </Typography>
            </Box>
        </Card>
    );
};

NewsCard.propTypes = {
    classes: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired,
    importImage: PropTypes.string.isRequired
};

export default withStyles(styles, {withTheme: true})(NewsCard);
