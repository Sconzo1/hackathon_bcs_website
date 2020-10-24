import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import SchoolScheduler from "./SchoolScheduler";

const Timetable = ({selectTimetable}) => {

    useEffect(selectTimetable, [selectTimetable]);

    return (
        <Fragment>
            <SchoolScheduler/>
        </Fragment>
    );
};

Timetable.propTypes = {
    selectTimetable: PropTypes.func.isRequired,
};

export default Timetable;
