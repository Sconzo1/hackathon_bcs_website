import React, {Fragment, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import format from "date-fns/format";
import {Box, Card, Grid, isWidthDown, Typography, withStyles, withWidth} from "@material-ui/core";
import NewsCard from "./NewsCard";
import ShareButton from "../../../shared/components/ShareButton";
import ZoomImage from "../../../shared/components/ZoomImage";
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";
import ScrollTo from "../../../shared/components/ScrollTo";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

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
    img: {
        width: "100%",
        height: "auto"
    },
    card: {
        boxShadow: theme.shadows[4]
    }
});

const NewsDetails = ({classes, width, date, title, importImage, content, otherArticles}) => {

    useEffect(() => {
        document.title = `${title} - nEdu`;
        smoothScrollTop();
    }, [title]);

    const refTop = useRef(null);


    function getStopThreshold() {
        if (isWidthDown("xs", width)) {
            return 5400
        } else if (isWidthDown("sm", width)) {
            return 4700
        } else if (isWidthDown("md", width)) {
            return 4500
        } else {
            return 1150
        }
    }

    return (
        <Fragment>
            <div ref={refTop}/>
            <Box
                className={classNames("lg-p-top", classes.wrapper)}
                display="flex"
                justifyContent="center"
            >
                <div className={classes.newsContentWrapper}>
                    <Grid container spacing={5}>
                        <Grid item md={9}>
                            <Card className={classes.card}>
                                <Box pt={3} pr={3} pl={3} pb={2}>
                                    <Typography variant="h4">
                                        <b>{title}</b>
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        {format(new Date(date), 'dd.MM.yyyy', {
                                            awareOfUnicodeTokens: true
                                        })}
                                    </Typography>
                                </Box>
                                <ZoomImage className={classes.img} src={importImage} alt=""/>
                                <Box p={3}>
                                    {content}
                                    <Box pt={2}>
                                        <Grid spacing={1} container>
                                            {["WhatsApp", "VK", "Reddit", "Telegram"].map(
                                                (type, index) => (
                                                    <Grid item key={index}>
                                                        <ShareButton
                                                            type={type}
                                                            title="nEdu - будущее школьного обучения"
                                                            description="nEdu - быстро развивающаяся концепция онлайн-обучения для школьников"
                                                            variant="contained"
                                                            className="text-white"
                                                            classes={{
                                                                label: "text-white"
                                                            }}
                                                        />
                                                    </Grid>
                                                )
                                            )}
                                        </Grid>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item md={3}>
                            <Typography variant="h6" paragraph>
                                Другие новости
                            </Typography>
                            {otherArticles.map(newsPost => (
                                <Box key={newsPost.id} mb={3}>
                                    <NewsCard
                                        title={newsPost.title}
                                        snippet={newsPost.snippet}
                                        date={newsPost.date}
                                        url={`${newsPost.url}${newsPost.params}`}
                                    />
                                </Box>
                            ))}
                        </Grid>
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

NewsDetails.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    importImage: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    otherArticles: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles, {withTheme: true})(withWidth()(NewsDetails));
