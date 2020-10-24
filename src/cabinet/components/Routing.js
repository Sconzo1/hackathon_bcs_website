import React, {memo} from "react";
import PropTypes from "prop-types";
import {Switch} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import Timetable from "./timetable/Timetable";
import Marks from "./marks/Marks";
import PropsRoute from "../../shared/components/PropsRoute";

const styles = (theme) => ({
    wrapper: {
        margin: theme.spacing(1),
        width: "auto",
        [theme.breakpoints.up("xs")]: {
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
        },
        [theme.breakpoints.up("md")]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            width: "82.5%",
            marginLeft: "auto",
            marginRight: "auto",
        },
        [theme.breakpoints.up("lg")]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
});

const Routing = ({
                     classes,
                     selectTimetable,
                     selectMarks,
                 }) => (
    <div className={classes.wrapper}>
        <Switch>
            <PropsRoute
                path="/c/marks"
                component={Marks}
                selectMarks={selectMarks}
            />
            <PropsRoute
                path="/"
                component={Timetable}
                selectTimetable={selectTimetable}
            />
        </Switch>
    </div>
);

Routing.propTypes = {
    classes: PropTypes.object.isRequired,
    selectTimetable: PropTypes.func.isRequired,
    selectMarks: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(memo(Routing));
