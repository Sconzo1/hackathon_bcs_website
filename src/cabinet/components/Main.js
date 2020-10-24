import React, {Fragment, memo, useCallback, useEffect, useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {withStyles} from "@material-ui/core";
import Routing from "./Routing";
import NavBar from "./navigation/NavBar";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";

const styles = (theme) => ({
    main: {
        marginLeft: theme.spacing(9),
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        },
    },
});

const Main = ({classes}) => {
    const [selectedTab, setSelectedTab] = useState(null);
    const [hasFetchedCardChart, setHasFetchedCardChart] = useState(false);
    const [homework, setHomework] = useState([]);

    const fetchRandomHomeWork = useCallback(() => {
        const homework = [];
        const count = 8;
        const oneDayMs = 1000 * 60 * 60 * 24;
        let curUnix = Math.round(
            new Date().getTime()
        );
        for (let i = 0; i < count; i += 1) {
            const message = {
                id: i,
                date: curUnix,
                subject: "География",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.",
            };
            curUnix += oneDayMs;
            homework.push(message);
        }
        setHomework(homework);
    }, [setHomework]);

    const selectTimetable = useCallback(() => {
        smoothScrollTop();
        document.title = "Расписание - nEdu";
        setSelectedTab("Timetable");
        if (!hasFetchedCardChart) {
            setHasFetchedCardChart(true);
        }
    }, [
        setSelectedTab,
        hasFetchedCardChart,
        setHasFetchedCardChart,
    ]);

    const selectMarks = useCallback(() => {
        smoothScrollTop();
        document.title = "Оценки - nEdu";
        setSelectedTab("Marks");
    }, [setSelectedTab]);

    useEffect(() => {
        fetchRandomHomeWork();
    }, [
        fetchRandomHomeWork,
    ]);

    return (
        <Fragment>
            <NavBar
                selectedTab={selectedTab}
                homework={homework}
            />
            <main className={classNames(classes.main)}>
                <Routing
                    selectTimetable={selectTimetable}
                    selectMarks={selectMarks}
                />
            </main>
        </Fragment>
    );
};

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(memo(Main));
