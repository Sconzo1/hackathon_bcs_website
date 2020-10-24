import React, {Fragment, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Box, Grid, isWidthDown, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import NewsCard from "./NewsCard";
import ScrollTo from "../../../shared/components/ScrollTo";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";


const styles = theme => ({
    newsContentWrapper: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4)
        },
        maxWidth: 1280,
        width: "100%"
    },
    wrapper: {
        minHeight: "60vh"
    },
    noDecoration: {
        textDecoration: "none !important"
    },
    contentWrapper: {
        padding: theme.spacing(3),
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(2)
        },
        width: "100%"
    },
});

const getVerticalNewsPosts = (width, newsPosts) => {
    const gridRows = [[], [], []];
    let rows;
    let xs;
    if (isWidthUp("md", width)) {
        rows = 3;
        xs = 4;
    } else if (isWidthUp("sm", width)) {
        rows = 2;
        xs = 6;
    } else {
        rows = 1;
        xs = 12;
    }

    newsPosts.forEach((newsPost, index) => {
        gridRows[index % rows].push(
            <Grid key={newsPost.id} item xs>
                <Box mb={3}>
                    <NewsCard
                        importImage={newsPost.importImage}
                        title={newsPost.title}
                        snippet={newsPost.snippet}
                        date={newsPost.date}
                        url={newsPost.url}
                    />
                </Box>
            </Grid>
        );
    });
    return gridRows.map((element, index) => (
        <Grid key={index} item xs={xs}>
            {element}
        </Grid>
    ));
};

const News = ({classes, width, newsPosts, selectNews}) => {

    useEffect(() => {
        selectNews();
    }, [selectNews]);

    function getStopThreshold() {
        if (isWidthDown("xs", width)) {
            return 5400
        } else if (isWidthDown("sm", width)) {
            return 4700
        } else if (isWidthDown("md", width)) {
            return 4500
        } else {
            return 4150
        }
    }

    const refTop = useRef(null);

    return (
        <Fragment>
            <div ref={refTop}/>
            <Box
                display="flex"
                justifyContent="center"
                className={classNames(classes.wrapper, "lg-p-top")}
            >
                <div className={classes.newsContentWrapper}>
                    <Box mb={isWidthUp("md", width) ? 12 : 6}>
                        <Typography variant="h3" align="center" className="title-comfortaa">
                            Новости
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        {newsPosts.length !== 0 ? getVerticalNewsPosts(width, newsPosts) : (
                            <div className={classes.contentWrapper}>
                                <HighlightedInformation>
                                    Еще нет новостей.
                                </HighlightedInformation>
                            </div>)
                        }
                    </Grid>
                </div>
            </Box>
            <ScrollTo anchorRef={refTop} stopThreshold={getStopThreshold()}>
                <Fab color="secondary" size="medium" aria-label="Scroll to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </ScrollTo>
        </Fragment>
    );
};

News.propTypes = {
    selectNews: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
    newsPosts: PropTypes.arrayOf(PropTypes.object)
};

export default withWidth()(withStyles(styles, {withTheme: true})(News));
